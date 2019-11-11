/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
// fetch all invites for admin

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if (document.querySelector('.users-section')) {
  const api = new ItarjApi('/api/v1');
  const blockBtns = [...document.querySelectorAll('.block-btn')];
  const userIds = [...document.querySelectorAll("input[type='hidden']")];
  const notification = document.querySelector('.notification');

  const btns = blockBtns.map(btn => btn);
  const users = userIds.map(user => user.value);

  for (let i = 0; i < blockBtns.length; i++) {
    btns[i].addEventListener('click', (e) => {
      e.preventDefault();

      api.Patch(`users/block/${users[i]}`, null, true)
        .then(res => {
          if (e.target.className.includes('block-btn-blue')) {
            e.target.classList.remove('block-btn-blue');
            e.target.innerHTML = 'Unblock';
          } else {
            e.target.classList.add('block-btn-blue');
            e.target.innerHTML = 'Block';
          }
          window.location.href = window.location.pathname;
        })
        .catch(error => {
          console.log(error);
          notification.innerHTML = error.data.message;
          notification.className += ' show';
        });
    });
  }
}
