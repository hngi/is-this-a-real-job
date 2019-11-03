function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

function showSuccessDialog() {
  successDialog = document.querySelector('.success-dialog');
  successDialog.classList.remove('is-hidden');
}

window.onload = (event) => {
  const formData = {
    offender: document.querySelector('.report-form__username'),
    offence: document.querySelector('.report-form__offence'),
    details: document.querySelector('.report-form__details')
  };

  const submit = document.querySelector('.report-form__submit');
  submit.onclick = (event) => {
    event.preventDefault();

    /* Dummy implementation */
    togglePreloader('block');
    setTimeout(() => {
      showSuccessDialog();
    }, 2000);

    /* Work In Progress. Dummy implementation above will be removed once completed. */
    return;
    api.Post('/reportuser', JSON.stringify(formData), true)
      .then(res => {
        togglePreloader('none');
      })
      .catch(err => {
        console.log(err);
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
        }, 8000);
      });
  };
};
