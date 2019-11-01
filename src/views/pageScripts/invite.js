/* eslint-disable no-console */
/* eslint-disable no-undef */
// create a new post


function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

const newApi = new ItarjApi('/api/v1');

const refresh = (inviteId) => {
  newApi.Get(`invites/${inviteId}/votes`, true)
    .then((res) => {
      const invite = document.querySelector(`[data-inviteId="${inviteId}"`);
      const up = invite.querySelector('.upvote-btn');
      const down = invite.querySelector('.downvote-btn');

      up.querySelector('.count').innerText = res.data.upvotes;
      down.querySelector('.count').innerText = res.data.downvotes;

      if (res.data.upvoted) {
        up.dataset.upvoted = 'true';
        down.dataset.downvoted = 'false';
      } else if (res.data.downvoted) {
        up.dataset.upvoted = 'false';
        down.dataset.downvoted = 'true';
      } else {
        up.dataset.upvoted = 'false';
        down.dataset.downvoted = 'false';
      }
    })
    .catch((err) => {
      notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
      notification.className += ' show';
      setTimeout(() => {
        notification.className = 'notification';
      }, 5000);
    });
};

if (document.querySelector('#newInviteBtn')) {
  const inviteBtn = document.querySelector('#newInviteBtn');

  const notification = document.querySelector('.notification');

  const jobDetails = document.querySelector('#jobDetails');
  const jobTitle = document.querySelector('#jobTitle');
  const jobLocation = document.querySelector('#jobLocation');
  const companyName = document.querySelector('#companyName');
  const media = document.querySelector('#media');
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
        togglePreloader('none');
        // navigate to somewhere. created post maybe
        window.location.href = '/posts';
      })
      .catch(err => {
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  });
}

const upvotePostBtnHander = (event) => {
  const { inviteid: inviteId, upvoted } = (event.target.nodeName === 'A') ? event.target.dataset : event.target.parentNode.dataset;

  if (upvoted === 'false') {
    newApi.Patch(`invites/${inviteId}/upvote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  } else {
    newApi.Delete(`invites/${inviteId}/vote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  }
};

const downvotePostBtnHander = (event) => {
  const { inviteid: inviteId, downvoted } = (event.target.nodeName === 'A') ? event.target.dataset : event.target.parentNode.dataset;

  if (downvoted === 'false') {
    newApi.Patch(`invites/${inviteId}/downvote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  } else {
    newApi.Delete(`invites/${inviteId}/vote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  }
};

const uiCanInteract = () => {
  console.log('upvote script loaded');
  const postMeta = document.querySelector('.post-meta');
  const inviteId = postMeta ? postMeta.id : null; // invite id

  const upvoteButtons = document.querySelectorAll('.upvote-btn');
  const downvoteButtons = document.querySelectorAll('.downvote-btn');
  upvoteButtons.forEach((element) => {
    element.addEventListener('click', upvotePostBtnHander);
  });
  downvoteButtons.forEach((element) => {
    element.addEventListener('click', downvotePostBtnHander);
  });
};

uiCanInteract();
