/* eslint-disable no-console */
/* eslint-disable no-undef */

if (localStorage.getItem('token')) {
  window.location.href = '/jobInvites';
}

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}


const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('#login-btn');
const notification = document.querySelector('.notification');
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  togglePreloader('block');

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const formVals = { email, password };

  const api = new ItarjApi('/api/v1');

  api.Post('auth/signin', JSON.stringify(formVals))
    .then(res => {
      console.log(res);
      togglePreloader('none');
      localStorage.setItem('token', res.data.token);
      window.location.href = '/jobInvites';
    })
    .catch(error => {
      togglePreloader('none');
      notification.innerHTML = error.data.message;
      notification.className += ' show';
      setTimeout(() => {
        notification.className = 'notification';
      }, 5000);
    });
});
