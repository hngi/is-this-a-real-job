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
  const jobLocation = document.querySelector('#jobLocation');
  const companyName = document.querySelector('#companyName');
  const media = document.querySelector('#media');
  const notification = document.querySelector('.notification');
  inviteBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePreloader('block');

    const api = new ItarjApi('/api/v1');
    const formData = new FormData();

    formData.append('title', jobTitle.value);
    formData.append('location', jobLocation.value);
    formData.append('body', jobDetails.value);
    formData.append('company', companyName.value);
    formData.append('media', media.files[0]);

    const options = {
      method: 'POST',
      body: formData,
      headers: {
      // If you add this, upload won't work
        // 'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token')
      }
    };

    fetch('api/v1/invites', options)
      .then(res => {
        window.location.href = '/jobInvites';
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

const upvotePost = (e, index, inviteId) => {
  const api = new ItarjApi('/api/v1');
  api.Patch(`invites/upvote/${inviteId}/true`)
    .then(res => {
      const upvoteCountElems = document.querySelectorAll(`#${res.data.inviteId} .upvote-count`);
      upvoteCountElems.forEach((elem, i) => {
        elem.innerText = Number(elem.innerText) + 1;
      });
    }).catch(err => console.log(err));
};

const uiCanInteract = () => {
  console.log('upvote script loaded');
  const postMeta = document.querySelector('.post-meta');
  const inviteId = postMeta ? postMeta.id : null; // invite id
  const upvoteButtons = document.querySelectorAll('.upvote-btn');
  upvoteButtons.forEach((element, index, fields) => {
    element.addEventListener('click', (e) => upvotePost(e, index, inviteId));
  });
};

uiCanInteract();
