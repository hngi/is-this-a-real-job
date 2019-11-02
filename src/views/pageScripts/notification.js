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
console.log(localStorage.getItem('token'));
api
  .Get('notifications', true)
  .then(res => {
    console.log(res.data);
    if (Object.keys(res.data).length) {
      notificationBadge.innerHTML = Object.keys(res.data).length;
      const notificationHTML = res.data.map(getNotificationHTML);
      notificationContainer.innerHTML = notificationHTML.join('');
    }
  })
  .catch(console.error);
