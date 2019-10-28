/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
// fetch all invites for admin
const invitesBody = document.querySelector('.col-lg-8')
const api = new ItarjApi('/api/v1');
const notification = document.querySelector('.notification');

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if(invitesBody){
  togglePreloader('block');
  api.Get('invites', true)
  .then(res => {
    const invitesData = res.data
    for (let invite of invitesData) {
      invitesBody.innerHTML += `
      <div class="row posts-list posts-list-color shadow p-4 mb-4">
        <input type="hidden" class=".inviteId" value="${invite.inviteId}" />
        <div class="row">
            <div class="col-lg-3 post-avatar-container">
                <img class="post-avatar" src="${invite.media}" alt="">
            </div>
            <div class="col-lg-8">
              <h5>${invite.title}</h5>
              <small class="text-muted">${invite.body}</small><br>
              <a href="#">
                <small style="color:green;">${invite.user.username}</small>
              </a>
            </div>
            <div class="col-lg-1">
              <a href="#">
                <button class="btn"><i class="far fa-edit"></i></button>
              </a>
              <a href="#">
                <button class="btn" id="delete-btn"><i class="fas fa-trash"></i></button>
              </a>
          </div>
        </div>
      </div>`
    }
    togglePreloader('none');
  })
  .then(deleteInvite=>{
    const deleteBtns = [...document.querySelectorAll('#delete-btn')];
    const inviteIds = [...document.querySelectorAll("input[type='hidden']")];

    const btns = deleteBtns.map(deleteBtn => deleteBtn);
    const invites = inviteIds.map(invite => invite.value);

    for (let i = 0; i < deleteBtns.length; i++) {
      btns[i].addEventListener('click', () => {
        api.Delete(`invites/${invites[i]}`, true)
          .then(res => {
            window.location.href = '/admin/posts';
          })
          .catch(error => {
            notification.innerHTML = error.data.message;
            notification.className += ' show';
            setTimeout(() => {
              notification.className = 'notification';
            }, 5000);
          });
      });
    }
  })
  .catch(err=>{
    console.log(err)
  });
}

