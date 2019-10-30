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
  const notification = document.querySelector('.notification');

  inviteBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePreloader('block');

    const api = new ItarjApi('/api/v1');

    api
      .Post('invites',
        JSON.stringify({
          title: jobTitle.value,
          body: jobDetails.value,
          company: companyName.value,
          location: jobLocation.value,
          media: `https://loremflickr.com/320/240/${jobTitle.value.slice(0, 3)}`
        }), true)
      .then(res => {
        // navigate to somewhere. created post maybe
        window.location.href = '/posts';
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
