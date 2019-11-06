/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-undef */


function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

let uri = '';

function getAnalysis(btnType) {
  $('#analysisModal').modal({
    show: false
  });
  togglePreloader('block');

  const formData = new FormData();
  let options = {};

  if (btnType === 1) {
    const media = document.querySelector('#media');
    formData.append('file', media.files[0]);
    options = {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    fetch(uri, options)
      .then(async res => {
        console.log(res);
        const result = await res.json();
        console.log(result);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = `<h5>The confidence level for this job invite is ${result.confidence}</h5>`;
        togglePreloader('none');
        $('#analysisModal').modal('show');
      })
      .catch(err => {
        console.error(err);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = '<h5>Our servers couldn\'t fetch data at the moment</h5>';
        $('#analysisModal').modal('show');
      });
  } else if (btnType === 2) {
    const selection = document.querySelector('#select_id');
    const inputForm = document.querySelector('#analysis_text');
    if (inputForm.value === '') {
      togglePreloader('none');
      const analysisModal = document.querySelector('#result');
      analysisModal.innerHTML = '<h5>Type an email in textbox or select from dropdown</h5>';
      $('#analysisModal').modal('show');
      return null;
    }
    console.log(selection.selectedIndex);
    if (selection.selectedIndex === 0 || !selection.selectedIndex) {
      uri = `http://34.66.66.215/?email=${inputForm.value}`;
    }
    console.log(uri);
    options = {
      method: 'GET',
      mode: 'no-cors'
    };
    fetch(uri, options)
      .then(async res => {
        console.log(res);
        const result = await res.json();
        console.log(result);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = `<h5>The confidence level for this job invite is ${result.confidence}</h5>`;
        togglePreloader('none');
        $('#analysisModal').modal('show');
      })
      .catch(err => {
        console.error(err);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = '<h5>Our servers couldn\'t fetch data at the moment</h5>';
        $('#analysisModal').modal('show');
      });
  } else {
    uri = 'https://itarj-cors.appspot.com/http://35.223.64.55';
    const company = document.querySelector('#company');
    const location = document.querySelector('#location');
    const jobDetails = document.querySelector('#jobDetails');
    const data = {
      company: company.value,
      address: location.value,
      invite: jobDetails.value
    };
    options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Origin: 'x-requested-with',
      },
    };
    fetch(uri, options)
      .then(async res => {
        console.log(res);
        const result = await res.json();
        console.log(result);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = `<h5>The confidence level for this job invite is ${result.confidence}</h5>`;
        togglePreloader('none');
        $('#analysisModal').modal('show');
      })
      .catch(err => {
        console.error(err);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = '<h5>Our servers couldn\'t fetch data at the moment</h5>';
        $('#analysisModal').modal('show');
      });
  }
}

function selectAnalysis(item) {
  $('#analysisModal').modal({
    show: false
  });
  const x = item.selectedIndex;
  const invite = [];
  const inputForm = document.querySelector('#analysis_text');
  const inviteData = document.querySelectorAll('.invite-data');
  inviteData.forEach((data) => {
    invite.push(data.getAttribute('data-info'));
  });
  switch (x) {
    case 1: {
      inputForm.value = invite[3].trim();
      uri = `http://34.66.66.215/error_counter?msg_body=${invite[3]}`;
      break;
    }
    case 2: {
      inputForm.value = invite[2].trim();
      uri = `http://34.66.66.215/check_address?address=${invite[2]}`;
      break;
    }
    case 3: {
      inputForm.value = invite[1].trim();
      uri = `http://34.66.66.215/check_name?company_name=${invite[1]}`;
      break;
    }
    case 4: {
      inputForm.value = invite[1].trim();
      uri = `http://34.66.66.215/nairaland_sentimental_analysis?searchTerm=${invite[1]}`;
      break;
    }
    default: {
      inputForm.value = invite[1].trim();
      uri = `http://34.66.66.215/match_name_and_address?name=${invite[1]}&address=${invite[2]}`;
      break;
    }
  }
}
