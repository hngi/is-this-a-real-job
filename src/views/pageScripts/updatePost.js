const editForm = document.querySelector('.edit-post');
const updateButton = editForm.querySelector("button[type='submit']");
const notification = document.querySelector('.notification');

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

window.addEventListener('load', (ev) => {

  const api = new ItarjApi('/api/v1');
  const inviteId = editForm.querySelector("input[name='inviteId']").value;

  editForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    togglePreloader('block');

    updateButton.disabled = true;

    const formData = {
      title: editForm.querySelector("input[name='title']").value,
      body: editForm.querySelector("textarea[name='body']").value,
    };

    api.Put(`invites/${inviteId}`, JSON.stringify(formData), true)
      .then( (data) => {
        togglePreloader('none');
        window.location.href = '/singlepost';
      })
      .catch( (error) => {
        togglePreloader('none');
        notification.innerHTML = error.data.message;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });

  });
});
