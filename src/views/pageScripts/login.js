/* eslint-disable no-console */
/* eslint-disable no-undef */

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if (document.querySelector('#login-btn')) {
  if (localStorage.getItem('token')) {
    window.location.href = '/jobInvites';
  }

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
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.href = '/jobInvites';
      })
      .catch(err => {
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message}</strong>`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  });
}
