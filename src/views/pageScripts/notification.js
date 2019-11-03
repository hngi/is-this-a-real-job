/* eslint-disable no-console */
/* eslint-disable no-undef */
console.log('notification loaded');

const socket = io();
const api = new ItarjApi('/api/v1');
const notificationContainer = document.querySelector('#branded');
const notificationBadge = document.querySelector('.badge');
const globalNotification = document.querySelector('.notification');
const bell = document.querySelector('#bell-icon');

const userElem = document.querySelector('#user');

if (userElem) {
  setTimeout(() => localStorage.setItem('userId', userElem.dataset.userid), 500);
}

let snackBarTimeout;
const showSnackBar = message => {
  if (snackBarTimeout) {
    return;
  }
  const sb = document.getElementById('snackbar');
  sb.innerHTML = message;
  sb.classList.add('show');
  snackBarTimeout = setTimeout(() => { sb.classList.remove('show'); }, 3500);
};

const getNotificationHTML = notification => {
  let icon = '<i class="far fa-flag"></i>';
  if (notification.type === 'comment') {
    icon = '<i class="far fa-comments"></i>';
  }

  if (notification.type === 'upvote') {
    icon = '<i class="far fa-arrow-alt-circle-up text-success"></i>';
  }

  return `
    <a class="notification-link" data-seen="${notification.isSeen}" data-notification="${notification.notificationId}" href="/post/${notification.inviteId}">
      <div class="notification-wrapper">
      <div class="notification-image">${icon}</div>
      <p class="notification-title text-dark">${notification.message}</p>
      ${!notification.isSeen ? '<span class="unread-indicator">&#x25CF;</span>' : ''}
      </div>
    </a>
  `;
};

const renderNotifications = (notifications) => {
  const notificationHTML = (notifications.length > 0) ? notifications.map(getNotificationHTML)
    : ['You have no notifications'];
  notificationContainer.innerHTML = notificationHTML.join('');
  notificationBadge.innerHTML = notifications.filter(n => !n.isSeen).length;
};

if (notificationContainer && notificationBadge) {
  api
    .Get('notifications', true)
    .then(res => renderNotifications(res.data))
    .catch(console.error);
}

let isScrolling;
const scrollStopped = (callback) => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    callback();
  }, 500);
};

const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  const parentBounding = notificationContainer.getBoundingClientRect();
  const relativeBottom = bounding.bottom - parentBounding.bottom;
  const relativeTop = bounding.top - parentBounding.top;
  return relativeBottom < 10 && relativeTop > -10;
};

const markNotificationsAsRead = () => {
  const elems = document.querySelectorAll('.notification-link');
  const notifications = Array.from(elems).filter(elem => {
    const elemIsInViewPort = isInViewport(elem);
    const elemIsNotSeen = elem.dataset.seen === 'false';
    return elemIsInViewPort && elemIsNotSeen;
  }).map(el => el.dataset.notification);

  if (notifications.length > 0) {
    api.Patch('notifications', JSON.stringify({ notifications }))
      .then(res => {
        notificationBadge.innerHTML = Number(notificationBadge.innerHTML) - res.data.length;
        // eslint-disable-next-line no-restricted-syntax
        for (const n of res.data) {
          const elem = document.querySelector(`[data-notification="${n.notificationId}"]`);
          elem.outerHTML = getNotificationHTML(n);
        }
      })
      .catch(console.error);
  }
};

// eslint-disable-next-line max-len
if (notificationContainer) { // mark `visible` notifications as seen when notification dropdown is scrolled
  notificationContainer.addEventListener('scroll', e => {
    scrollStopped(() => markNotificationsAsRead());
  });
}

if (bell) { // mark `visible` notifications as seen when notification dropdown is clicked
  bell.addEventListener('click', () => {
    setTimeout(() => markNotificationsAsRead(), 500);
  });
}

socket.on('connect', () => console.log('connected socket'));
socket.on('new:notification', notification => {
  if (notification.userId === localStorage.getItem('userId')) {
    notificationBadge.innerHTML = Number(notificationBadge.innerHTML) + 1;
    notificationContainer.innerHTML = getNotificationHTML(notification)
    + notificationContainer.innerHTML;

    // show on-screen notification
    showSnackBar(notification.message);
  }
});
