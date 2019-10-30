/* eslint-disable no-console */
/* eslint-disable no-undef */

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if (document.querySelector('#login-btn')) {
  if (localStorage.getItem('token')) {
    window.location.href = '/posts';
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
        localStorage.setItem('user', JSON.stringify(res.data)); // convert from [object object]

        document.cookie = `login=${res.data.token}`;
        window.location.href = '/posts';
      })
      .catch(err => {
        togglePreloader('none');
        console.log(err);
        notification.innerHTML = `<strong>${err.data.message}</strong>`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  });
}

if (document.querySelector('#logout')) {
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (ev) => {
    ev.preventDefault();

    localStorage.removeItem('token');
    document.cookie = 'signOut=true';

    window.location.href = '/';
  });
}
