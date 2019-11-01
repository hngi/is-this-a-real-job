/* eslint-disable no-console */
/* eslint-disable no-undef */
console.log('notification loaded');

const api = new ItarjApi('/api/v1');
const notificationContainer = document.querySelector('#branded');
const notificationBadge = document.querySelector('.badge');

const getNotificationHTML = notification => `
  <a class="notification-link" href="/post/${notification.inviteId}">
    <div class="notification-wrapper">
      ${notification.target.profileImage ? `<img src="${notification.target.profileImage}" class="notification-image">`
    : `<div class="notification-no-image">${notification.target.name.substr(0, 2).toUpperCase()}</div>`}
      <p class="notification-title">${notification.message}</p>
    </div>
  </a>
`;

api
  .Get('notifications', true)
  .then(res => {
    const notificationHTML = (res.data.length > 0)
      ? res.data.map(getNotificationHTML)
      : ['You have no notifications'];
    notificationContainer.innerHTML = notificationHTML.join('');
    notificationBadge.innerHTML = res.data.filter(n => n.isSeen).length;
  })
  .catch(console.error);
