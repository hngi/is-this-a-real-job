/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const api = new ItarjApi('/api/v1');
const notification = document.querySelector('.notification');
const deleteBtns = [...document.querySelectorAll('#delete-btn')];
const inviteIds = [...document.querySelectorAll("input[type='hidden']")];

const btns = deleteBtns.map(deleteBtn => deleteBtn);
const invites = inviteIds.map(invite => invite.value);

for (let i = 0; i < deleteBtns.length; i++) {
  btns[i].addEventListener('click', () => {
    api.Delete(`invites/${invites[i]}`, true)
      .then(res => {
        window.location.href = '/admin/posts';
      })
      .catch(error => {
        notification.innerHTML = error.data.message;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  });
}
