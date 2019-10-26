/* eslint-disable no-undef */

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if (document.querySelector('.edit-post')) {
  if (!localStorage.getItem('token')) {
    window.location.href = '/login';
  }

  const editForm = document.querySelector('.edit-post');
  const updateButton = editForm.querySelector("button[type='submit']");
  const notification = document.querySelector('.notification');

  window.addEventListener('load', (ev) => {
    const api = new ItarjApi('/api/v1');
    const inviteId = editForm.querySelector("input[name='inviteId']").value;

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();

      togglePreloader('block');

      updateButton.disabled = true;

      const formData = {
        title: editForm.querySelector("input[name='title']").value,
        body: editForm.querySelector("textarea[name='body']").value,
      };

      api.Put(`invites/${inviteId}`, JSON.stringify(formData), true)
        .then((data) => {
          togglePreloader('none');
          window.location.href = `/post/${inviteId}`;
        })
        .catch((error) => {
          togglePreloader('none');
          notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
          notification.className += ' show';
          setTimeout(() => {
            notification.className = 'notification';
          }, 5000);
        });
    });
  });
}
