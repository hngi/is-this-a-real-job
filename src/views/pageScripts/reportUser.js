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

  setTimeout(() => {
    notification.classList.remove('show');
  }, 8000);
}

window.onload = (event)=> {

  const notification = document.querySelector('.notification');
  const formData = {
    offender: document.querySelector('.report-form__username'),
    offence: document.querySelector('.report-form__offence'),
    details: document.querySelector('.report-form__details')
  };

  const submit = document.querySelector('.report-form__submit');
  submit.onclick = (event)=> {
    event.preventDefault();

    if (!formData.offender || !formData.offence || !formData.details) {
      return window.alert('Please fill in all fields.')
    }

    if (formData.details.length < 20) {
      return window.alert('Please fill in the details fields with enough information. Include links to the offending posts or comment. \n(We expect at least 20 characters)');
    }

    togglePreloader('block');

    api.Post('/reportuser', JSON.stringify(formData), true)
      .then(res => {
        showSuccessDialog();
      })
      .catch(err => {
        console.log(err);
        togglePreloader('none');
        showErrorMessage(err);
      });
  }
}
