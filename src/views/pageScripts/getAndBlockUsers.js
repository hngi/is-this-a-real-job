/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
// fetch all invites for admin
const usersBody = document.querySelector('.col-lg-8')
const api = new ItarjApi('/api/v1');
const notification = document.querySelector('.notification');

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

api.Get('users', true)
.then(res => {
    const usersData = res.data
    for (let user of usersData) {
      usersBody.innerHTML += `
      <!-- NEW USER -->
      <div class="row users-list users-list-color">
        <div class="col-lg-6">
          <div class="row">
            <!-- USER AVATAR HERE -->
            <input type="hidden" class=".inviteId" value="${user.userId}" />
            <div class="col-lg-6 user-avatar-container">
              <img class="user-avatar" src="https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70" alt="">
            </div>
            <!-- USER NAME & HANDLE HERE -->
            <div class="col-lg-6">
                <h5 class="user-name">${user.name}</h5>
                <p class="user-handle">@${user.username}</p>
              </div>
          </div>
        </div>
        <!-- BLOCK BUTTON -->
        <div class=" block col-lg-6">
            <a href=""><p class="block-btn">Block</p></a>
          </div>
      </div>`
    }
  })
  .then(blockUsers=>{
    const blockBtns = [...document.querySelectorAll('.block-btn')];
    const userIds = [...document.querySelectorAll("input[type='hidden']")];

    const btns = blockBtns.map(blockBtns => blockBtns);
    const users = userIds.map(user => user.value);

    for (let i = 0; i < blockBtns.length; i++) {
      btns[i].addEventListener('click', () => {
        api.Patch(`users/${users[i]}`, true)
          .then(res => {
            window.location.href = '/admin/users';
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
