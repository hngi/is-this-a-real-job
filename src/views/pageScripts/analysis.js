/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-undef */

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

function getAnalysis(btnType) {
  $('#analysisModal').modal({ show: false });
  const notification = document.querySelector('.notification');
  const apiEndpoint = document.querySelector('#api_endpoint').innerHTML;
  const analysisText = document.querySelector('#analysis_text');
  togglePreloader('block');

  let uri = '';
  const formData = new FormData();
  let options = {};

  if (btnType === 2) {
    uri = apiEndpoint;
    options = {
      method: 'GET',
      mode: 'no-cors'
    };
  } else if (btnType === 3) {
    uri = 'https://isthisarealjob-api.herokuapp.com';
    const company = document.querySelector('#company');
    const location = document.querySelector('#location');
    const jobDetails = document.querySelector('#jobDetails');
    const data = { company, address: location, invite: jobDetails };
    options = {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors',
      'Content-Type': 'application/json',
    };
  } else {
    formData.append('title', analysisText.value);
    options = {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    };
  }

  fetch(uri, options)
    .then(res => {
      togglePreloader('none');
      console.log(res);
      const analysisModal = document.querySelector('#result');
      analysisModal.innerHTML = JSON.stringify(res);
      $('#analysisModal').modal('show');
    })
    .catch(err => {
      console.log(err);
      const analysisModal = document.querySelector('#result');
      analysisModal.innerHTML = JSON.stringify(err);
      $('#analysisModal').modal('show');
    });
}

function selectAnalysis(item) {
  $('#analysisModal').modal({ show: false });
  const x = item.selectedIndex;
  const invite = [];
  const inputForm = document.querySelector('#analysis_text');
  const inviteData = document.querySelectorAll('.invite-data');
  const apiEndpoint = document.querySelector('#api_endpoint');
  inviteData.forEach((data) => {
    invite.push(data.getAttribute('data-info'));
  });
  switch (x) {
    case 1: {
      inputForm.value = invite[3];
      apiEndpoint.innerHTML = `http://34.66.66.215/?email=${invite[3]}`;
      break;
    }
    case 2: {
      inputForm.value = invite[3];
      apiEndpoint.innerHTML = `http://34.66.66.215/error_counter?msg_body=${invite[3]}`;
      break;
    }
    case 3: {
      inputForm.value = invite[2];
      apiEndpoint.innerHTML = `http://34.66.66.215/check_address?address=${invite[2]}`;
      break;
    }
    case 4: {
      inputForm.value = invite[1];
      apiEndpoint.innerHTML = `http://34.66.66.215/check_name?company_name=${invite[1]}`;
      break;
    }
    case 5: {
      inputForm.value = invite[1];
      apiEndpoint.innerHTML = `http://34.66.66.215/nairaland_sentimental_analysis?searchTerm=${invite[1]}`;
      break;
    }
    default: {
      inputForm.value = invite[1];
      apiEndpoint.innerHTML = `http://34.66.66.215/match_name_and_address?name=&address=${invite[1]}`;
      break;
    }
  }
}
