/* eslint-disable no-undef */
// create a new post

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}
const inviteBtn = document.querySelector('#newInviteBtn');

if (inviteBtn) {
  if (!localStorage.getItem('token')) {
    window.location.href = '/login';
  }

  const jobDetails = document.querySelector('#jobDetails');
  const jobTitle = document.querySelector('#jobTitle');
  const notification = document.querySelector('.notification');

  inviteBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePreloader('block');

    const api = new ItarjApi('/api/v1');

    api.Post('invites', JSON.stringify({ title: jobTitle.value, body: jobDetails.value, media: `https://loremflickr.com/320/240/${jobTitle.value.slice(0, 3)}` }), true)
      .then(res => {
        // navigate to somewhere. created post maybe
        window.location.href = `/post/${res.data.inviteId}`;
        togglePreloader('none');
      })
      .catch(err => {
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
        console.error(err.data);
      });
  });
}
