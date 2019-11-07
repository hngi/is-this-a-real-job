/* eslint-disable no-alert */
/* eslint-disable no-undef */
function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

function showSuccessDialog() {
  successDialog = document.querySelector('.success-dialog');
  successDialog.classList.remove('is-hidden');
}

function showErrorMessage(err) {
  const notification = document.querySelector('.notification');
  notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
  notification.classList.add('show');
}


if (document.querySelector('.report-form__submit')) {
  const submit = document.querySelector('.report-form__submit');
  submit.addEventListener('click', (e) => {
    let form = new FormData();
    const reportForm = document.forms[0];

    e.preventDefault();

    form = {
      offender: reportForm.offenderId.value,
      offence: reportForm.offence.value,
      details: reportForm.details.value
    };

    if (reportForm.details.value.length < 20) {
      return window.alert('Please fill in the details fields with enough information. Include links to the offending posts or comment');
    }

    togglePreloader('block');

    api.Post('users/report', JSON.stringify(form), true)
      .then(res => {
        showSuccessDialog();
      })
      .catch(err => {
        togglePreloader('none');
        showErrorMessage(err);
      });
  });
}
