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
        up.dataset.voted = 'true';
        down.dataset.voted = 'false';
      } else if (res.data.downvoted) {
        up.dataset.voted = 'false';
        down.dataset.voted = 'true';
      } else {
        up.dataset.voted = 'false';
        down.dataset.voted = 'false';
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
  //const media = document.querySelector('#media'); //No more file upload.

  inviteBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePreloader('block');

    const api = new ItarjApi('/api/v1');
    
    const formData = {
      company: companyName.value,
      location: jobLocation.value,
      title: jobTitle.value,
      body: jobDetails.value
    };
    console.log(JSON.stringify(formData));

    /* Native form data object seems to send empty req.body. Using manually built formData above.
    const formData = new FormData();
    formData.append('title', jobTitle.value);
    formData.append('location', jobLocation.value);
    formData.append('body', jobDetails.value);
    formData.append('company', companyName.value);
    //formData.append('media', media.files[0]);  //No more file upload.
    */

    /*Switching to api-helper implementation. Options object no more needed.
    const options = {
      method: 'POST',
      body: JSON.stringify(formData),
      // if this is set, the coockieHandler middleware will set token with req.headers.authorization
      addToken: true
    };
    */

    //fetch('api/v1/invites', options) //Now using api-helper.
    api.Post('invites', JSON.stringify(formData), true)
      .then(res => {
        togglePreloader('none');
        // Navigate to somewhere, created post maybe.
        window.location.href = '/posts';
      })
      .catch(err => {
        console.log(err);
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
          //notification.className = 'notification'; //Using classList is better.
        }, 8000);
      });
  });
}

const setUp = (target, other, mode = 'set') => {
  if (other.dataset.voted === 'true') {
    const otherCount = other.querySelector('.count');
    otherCount.innerText = +otherCount.innerText - 1;
    other.dataset.voted = 'false';
  }

  const targetCount = target.querySelector('.count');

  if (mode === 'set') {
    target.dataset.voted = 'true';
    targetCount.innerText = +targetCount.innerText + 1;
  } else if (mode === 'del') {
    target.dataset.voted = 'false';
    targetCount.innerText = +targetCount.innerText - 1;
  }
};

const upvotePostBtnHander = (event) => {
  const { inviteid: inviteId, voted } = (event.target.nodeName === 'A') ? event.target.dataset : event.target.parentNode.dataset;
  const target = (event.target.nodeName === 'A') ? event.target : event.target.parentNode;
  const other = (event.target.nodeName === 'A') ? event.target.parentNode.querySelector('.downvote-btn') : event.target.parentNode.parentNode.querySelector('.downvote-btn');

  console.log('the target', target, 'the other', other);

  if (voted === 'false') {
    setUp(target, other);
    newApi.Patch(`invites/${inviteId}/upvote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        refresh(inviteId);
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  } else {
    setUp(target, other, 'del');
    newApi.Delete(`invites/${inviteId}/vote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        refresh(inviteId);
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  }
};

const downvotePostBtnHander = (event) => {
  const { inviteid: inviteId, voted } = (event.target.nodeName === 'A') ? event.target.dataset : event.target.parentNode.dataset;
  const target = (event.target.nodeName === 'A') ? event.target : event.target.parentNode;
  const other = (event.target.nodeName === 'A') ? event.target.parentNode.querySelector('.upvote-btn') : event.target.parentNode.parentNode.querySelector('.upvote-btn');

  if (voted === 'false') {
    setUp(target, other);
    newApi.Patch(`invites/${inviteId}/downvote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        refresh(inviteId);
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  } else {
    setUp(target, other, 'del');
    newApi.Delete(`invites/${inviteId}/vote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        refresh(inviteId);
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
