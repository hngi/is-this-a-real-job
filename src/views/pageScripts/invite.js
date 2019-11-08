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
      const inviteSelector = `[data-inviteId="${inviteId}"]`;
      const up = document.querySelector(`${inviteSelector}.upvote-btn`);
      const down = document.querySelector(`${inviteSelector}.downvote-btn`);

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
      console.log(err);
      notification.innerHTML = `<strong>${err.data ? err.data.message : 'Something happened while processing your request. Contact support or try again.'}:</strong> ${err.data.payload}`;
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
  // const media = document.querySelector('#media'); //No more file upload.

  function showSuccessDialog() {
    successDialog = document.querySelector('.success-dialog');
    successDialog.classList.remove('is-hidden');
  }

  inviteBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePreloader('block');

    const formData = {
      company: companyName.value,
      location: jobLocation.value,
      title: jobTitle.value,
      body: jobDetails.value
    };

    // fetch('api/v1/invites', options) //Now using api-helper.
    newApi.Post('invites', JSON.stringify(formData), true)
      .then(res => {
        //Show success modal.
        showSuccessDialog();
      })
      .catch(err => {
        console.log(err);
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data ? err.data.message : 'Something happened while processing your request. Contact support or try again.'}:</strong> ${err.data.payload}`;
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
          // notification.className = 'notification'; //Using classList is better.
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

  // console.log('the target', target, 'the other', other);

  if (voted === 'false') {
    setUp(target, other);
    newApi.Patch(`invites/${inviteId}/upvote`, JSON.stringify({}), true)
      .then((res) => {
        refresh(inviteId);
      })
      .catch((err) => {
        console.log(err);
        notification.innerHTML = `<strong>${err.data ? err.data.message : 'Something happened while processing your request. Contact support or try again.'}:</strong> ${err.data.payload}`;
        refresh(inviteId);
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
        console.log(err);
        notification.innerHTML = `<strong>${err.data ? err.data.message : 'Something happened while processing your request. Contact support or try again.'}:</strong> ${err.data.payload}`;
        refresh(inviteId);
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
        console.log(err);
        notification.innerHTML = `<strong>${err.data ? err.data.message : 'Something happened while processing your request. Contact support or try again.'}:</strong> ${err.data.payload}`;
        refresh(inviteId);
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
        console.log(err);
        notification.innerHTML = `<strong>${err.data ? err.data.message : 'Something happened while processing your request. Contact support or try again.'}:</strong> ${err.data.payload}`;
        refresh(inviteId);
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
