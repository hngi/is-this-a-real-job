/* eslint-disable no-console */
/* eslint-disable no-undef */

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if (document.querySelector('#login-btn')) {
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

        document.cookie = `login=${res.data.token};path=/`; // path required so cookie always sends.
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
    document.cookie = 'signOut=true;path=/'; // Path required so cookie always sends

    window.location.href = '/';
  });
}

function showNotification(message, isError = true) {
  const notification = document.querySelector('.notification');
  notification.innerHTML = `<strong>${message.includes('expected') ? 'We\'re unable to process you request right now. Try again after a while.' : message}</strong>`;
  notification.style.backgroundColor = isError ? '#f590888c' : '#79fc968c';
  notification.className += ' show';
  setTimeout(() => {
    notification.className = 'notification';
  }, 5000);
}
