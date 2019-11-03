/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
// fetch all invites for admin

if (true) {
  const api = new ItarjApi('/api/v1');
  const deleteBtns = document.querySelectorAll('.delete');
  const notification = document.querySelector('.notification');

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      api.Delete(`invites/${btn.dataset.inviteid}`, true)
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
  });
}
