/* eslint-disable no-undef */
console.log('forgot password loaded', api); // Itarj Api has already been declared

/* Forgot Password Logic */
const forgotPasswordBtn = document.querySelector('#forgotPasswordBtn');
const emailField = document.querySelector('#emailField');

if (forgotPasswordBtn) {
  forgotPasswordBtn.addEventListener('click', e => {
    // consume forgot password api; change properties as required
    const data = {
      email: emailField.value
    };

    api
      .Post('users/forgot-password', JSON.stringify(data))
      .then(res => {
        showNotification(res.message, false);
      })
      .catch(err => {
        showNotification(err.message || 'We\'re unable to process you request right now. Try again after a while.');
      });
  });
}

/* Reset Password Logic */
const changePasswordBtn = document.querySelector('#changePasswordBtn');
const newPasswordField = document.querySelector('#newPasswordField');
const confirmPasswordField = document.querySelector('#confirmPasswordField');

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

if (confirmPasswordField) {
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

if (changePasswordBtn) {
  changePasswordBtn.addEventListener('click', e => {
    if (newPasswordField.value.length < 6) {
      showError('Password must be at least 6 characters.', false);
      return;
    }
    // consume reset password api; change properties as required
    const data = {
      password: newPasswordField.value
    };

    api
      .Post('users/reset-password', JSON.stringify(data), true)
      .then(res => {
        showNotification(res.message, false);
      })
      .catch(err => {
        console.error(err);
        showNotification(err.message || 'We\'re unable to process you request right now. Try again after a while.');
      });
  });
}
