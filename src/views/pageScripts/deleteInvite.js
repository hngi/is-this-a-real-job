/* eslint-disable no-console */
/* eslint-disable no-undef */
function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

const deleteBtn = document.querySelector('#delete-btn');

const notification = document.querySelector('.notification');
// This is to be completed when POST fetch API is implemented to deliver inviteId
// const inviteId = document.querySelector('.inviteId').innerText;
const inviteId = 'fdbd468a-2976-4f2f-8fe0-ae12dd8d5101'; // This deletes a real Invite inside the seeded DB
deleteBtn.addEventListener('click', () => {
  const api = new ItarjApi('/api/v1');
  console.log('delete clicked');

  api.Delete(`invites/${inviteId}`, true)
    .then(res => {
      console.log(res);
      window.location.href = '/admin/posts';
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
