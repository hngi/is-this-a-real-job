/* eslint-disable no-console */
/* eslint-disable no-undef */
const deleteBtn = document.querySelector('#delete-btn');
const notification = document.querySelector('.notification');
deleteBtn.addEventListener('click', () => {

  const api = new ItarjApi('/api/v1');

  api.Post(`invites/${inviteId}`, true)
    .then(res => {
      console.log(res);
      window.location.href = '/admin';
    })
    .catch(error => {
      console.log(error);
      notification.innerHTML = error.data.message;
      notification.className += ' show';
      setTimeout(() => {
        notification.className = 'notification';
      }, 5000);
    });
});
