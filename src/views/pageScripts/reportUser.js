window.onload = (event)=> {
  const formData = {
    offender: document.querySelector('.report-form__username'),
    offence: document.querySelector('.report-form__offence'),
    details: document.querySelector('.report-form__details')
  };

  const submit = document.querySelector('.report-form__submit');
  submit.onclick = (event)=> {
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
  }
}
