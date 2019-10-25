/* eslint-disable no-undef */
// create a new post

const jobDetails = document.querySelector('#jobDetails');
const jobTitle = document.querySelector('#jobTitle');
const inviteBtn = document.querySelector('#newInviteBtn');

if (inviteBtn) {
  inviteBtn.addEventListener('click', e => {
    e.preventDefault();

    api.Post('invites', JSON.stringify({ title: jobTitle.value, body: jobDetails.value, media: `https://loremflickr.com/320/240/${jobTitle.value.slice(0, 3)}` }), true)
      .then(res => {
        // navigate to somewhere. created post maybe
        window.location.href = '/jobInvites';
      })
      .catch(err => console.error(err.data));
  });
}
