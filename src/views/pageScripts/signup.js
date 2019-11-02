/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */


function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if (document.forms.signup) {
  const signupForm = document.forms.signup;
  const signupBtn = document.querySelector('#signup-btn');
  const notification = document.querySelector('.notification');
  signupBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePreloader('block');

    const formData = {};

    for (let i = 0; i < signupForm.length; i++) {
      formData[signupForm[i].name] = signupForm[i].value;
    }

    const api = new ItarjApi('/api/v1');

    api
      .Post('auth/signup', JSON.stringify(formData))
      .then(res => {
        console.log(res);
        togglePreloader('none');

        document.cookie = `login=${res.data.token};path=/`; // path required so cookie always sends.
        window.location.href = '/posts';
      })
      .catch(err => {
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message || ''}:</strong> ${err.data.payload || ''}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  });
}
