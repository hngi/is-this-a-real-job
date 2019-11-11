/* eslint-disable no-undef */
console.log('forgot password loaded', api); // Itarj Api has already been declared

/* Forgot Password Logic */
const forgotPasswordBtn = document.querySelector('#forgotPasswordBtn');
const emailField = document.querySelector('#emailField');

if (forgotPasswordBtn) {
  forgotPasswordBtn.addEventListener('click', e => {
    togglePreloader('block');
    // consume forgot password api; change properties as required
    const data = { email: emailField.value };

    api
      .Post('users/forgot-password', JSON.stringify(data))
      .then(async res => {
        showNotification(res.message, false);
        emailField.style.display = 'none';
        forgotPasswordBtn.style.display = 'none';
        togglePreloader('none');
      })
      .catch(err => {
        togglePreloader('none');
        showNotification(`${err.data.message} ${err.data.payload[0]}` || 'We\'re unable to process you request right now. Try again after a while.');
      });
  });
}

/**
 * Helper fn to show error message on template
 * @param {string} [message] the message to show on the template
 * @param {boolean} [hideError] specifies if the error should be hidden
 *  */
const showError = (message = '', hideError = true) => {
  const elem = document.querySelector('#rp-error');
  elem.innerHTML = message;
  elem.style.display = hideError ? 'none' : 'block';
};

if (document.querySelector('#confirmPasswordField')) {
  const confirmPasswordField = document.querySelector('#confirmPasswordField');
  // todo: may add more fe validation for password
  confirmPasswordField.addEventListener('keyup', () => {
    if (newPasswordField.value !== confirmPasswordField.value) {
      // passwords don't match error
      showError('Passwords do not match', false);
    } else {
      showError();
    }
  });
}

if (document.querySelector('#changePasswordBtn')) {
  /* Reset Password Logic */
  const changePasswordBtn = document.querySelector('#changePasswordBtn');
  const newPasswordField = document.querySelector('#newPasswordField');
  const tokenField = document.querySelector('#tokenField');
  const token = tokenField.getAttribute('data-token');
  changePasswordBtn.addEventListener('click', e => {
    togglePreloader('block');
    if (newPasswordField.value.length < 6) {
      showError('Password must be at least 6 characters.', false);
      return;
    }
    // consume reset password api; change properties as required
    const data = { password: newPasswordField.value };
    api
      .Patch(`users/reset-forgot-password/${token}`, JSON.stringify(data))
      .then(res => {
        showNotification(res.message, false);
        togglePreloader('none');

        document.cookie = `login=${res.data.token};path=/`; // path required so cookie always sends.
        window.location.href = '/posts';
      })
      .catch(err => {
        togglePreloader('none');
        showNotification(`${err.data.message} ${err.data.payload[0]}` || 'We\'re unable to process you request right now. Try again after a while.');
      });
  });
}
