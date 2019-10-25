/* eslint-disable no-console */
/* eslint-disable no-undef */

const upvotePost = (e, index, inviteId) => {
  const api = new ItarjApi('/api/v1');
  api.Patch(`/api/v1/invites/upvote/${inviteId}/true`)
    .then(invite => {
      const newUpvote = invite.upVotes;
      // TODO: update upvote count on page
      // at the moment, there's no html element to display number of upvotes.
      // frontenders have to take care of that.
      // select element using a combination of query selector and index, and update it's value.
    }).catch(err => console.log(err));
};

const uiCanInteract = () => {
  const upvoteButtons = document.querySelectorAll(
    'div.container > a[invite-id]'
  );
  upvoteButtons.forEach((element, index, fields) => {
    // get inviteId from anchor attribute list
    const inviteId = fields.getAttribute('invite-id');
    element.addEventListener('click', (e) => upvotePost(e, index, inviteId));
  });
};

uiCanInteract();
