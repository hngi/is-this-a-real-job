/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
// fetch all invites for admin

if (!window.localStorage.getItem('token')) {
  window.localStorage.clear();
}

if (document.querySelector('.invites-section')) {
  const api = new ItarjApi('/api/v1');
  const deleteBtns = [...document.querySelectorAll('#delete-btn')];
  const inviteIds = [...document.querySelectorAll("input[type='hidden']")];
  const notification = document.querySelector('.notification');

  const btns = deleteBtns.map(deleteBtn => deleteBtn);
  const invites = inviteIds.map(invite => invite.value);

  for (let i = 0; i < deleteBtns.length; i++) {
    btns[i].addEventListener('click', () => {
      api.Delete(`invites/${invites[i]}`, true)
        .then(res => {
          window.location.href = '/admin/posts';
        })
        .catch(error => {
          if (error.data.message.includes('Session is invalid')) {
            window.localStorage.clear();
            setTimeout(() => {
              window.location.href = '/login';
            }, 3000);
          }
          notification.innerHTML = error.data.message;
          notification.className += ' show';
          setTimeout(() => {
            notification.className = 'notification';
          }, 5000);
        });
    });
  }
}
