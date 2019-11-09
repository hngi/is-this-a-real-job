/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-undef */


function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

let uri = '';

// function selectAnalysis(selection, analysisText) {
//   switch (selection) {
//     case 1: {
//       options = {
//         method: 'POST',
//         body: JSON.stringify({ address: analysisText })
//       };
//       uri = 'http://34.66.66.215/check_address';
//       return [uri, options];
//     }
//     case 2: {
//       inputForm.value = invite[1].trim() || '';
//       uri = `http://34.66.66.215/check_name?company_name=${invite[1]}`;
//       break;
//     }
//     case 3: {
//       inputForm.value = invite[1].trim() || '';
//       uri = `http://34.66.66.215/nairaland_sentimental_analysis?searchTerm=${invite[1]}`;
//       break;
//     }
//     default: {
//       inputForm.value = invite[1].trim() || '';
//       uri = `http://34.66.66.215/match_name_and_address?name=${invite[1]}&address=${invite[2]}`;
//       break;
//     }
//   }
// }

if (document.querySelector('#submit_ocr')) {
  const ocrBtn = document.querySelector('#submit_ocr');
  const selectionBtn = document.querySelector('#submit_selection');
  const confidenceBtn = document.querySelector('#submit_confidence');

  $('#analysisModal').modal({ show: false });
  let options = {};

  ocrBtn.addEventListener('click', (e) => {
    e.preventDefault();
    togglePreloader('block');
    uri = 'http://34.66.66.215/upload';
    const media = document.querySelector('#media');
    const formData = new FormData();
    formData.append('file', media.files[0]);
    // console.log(files);
    // const body = { files: { file: media.files[0] } };
    options = {
      method: 'POST',
      body: formData,
    };
    console.log(uri);
    fetch(uri, options)
      .then(async res => {
        const result = await res.text();
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = `<h5>${result}</h5>`;
        togglePreloader('none');
        $('#analysisModal').modal('show');
      })
      .catch(err => {
        console.error(err);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = '<h5>Our servers couldn\'t fetch data at the moment</h5>';
        togglePreloader('none');
        $('#analysisModal').modal('show');
      });
  });

  // selectionBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   togglePreloader('block');
  //   const selection = document.querySelector('#select_id').selectedIndex;
  //   const inputForm = document.querySelector('#analysis_text').value;
  //   fetchParams = [];
  //   if (inputForm === '') {
  //     const analysisModal = document.querySelector('#result');
  //     analysisModal.innerHTML = '<h5>Textbox must have an email or select from dropdown</h5>';
  //     togglePreloader('none');
  //     $('#analysisModal').modal('show');
  //     return null;
  //   }
  //   if (selection === 0 || !selection) {
  //     uri = 'http://34.66.66.215/';
  //     options = {
  //       method: 'POST',
  //       body: JSON.stringify({ msg_body: inputForm })
  //     };
  //     fetchParams = [uri, options];
  //   } else if (selection === 1) {
  //     const inviteData = document.querySelector('.invite-location');
  //     fetchParams = selectAnalysis(selection, inviteData.getAttribute('data-location'));
  //   } else {
  //     const inviteData = document.querySelector('.invite-company');
  //     fetchParams = selectAnalysis(selection, inviteData.getAttribute('data-location'));
  //   }
  //   console.log(...fetchParams);
  //   fetch(fetchParams[0], fetchParams[1])
  //     .then(async res => {
  //       console.log(res);
  //       const result = await res.json();
  //       console.log(result);
  //       const analysisModal = document.querySelector('#result');
  //       analysisModal.innerHTML = `<h5>${result.confidence}</h5>`;
  //       togglePreloader('none');
  //       $('#analysisModal').modal('show');
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       const analysisModal = document.querySelector('#result');
  //       analysisModal.innerHTML = '<h5>Our servers couldn\'t fetch data at the moment</h5>';
  //       togglePreloader('none');
  //       $('#analysisModal').modal('show');
  //     });
  // });

  confidenceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const company = document.querySelector('#company').value;
    const location = document.querySelector('#location').value;
    const jobDetails = document.querySelector('#jobDetails').value;
    if (company === '' || location === '' || jobDetails === '') {
      const analysisModal = document.querySelector('#result');
      analysisModal.innerHTML = '<h5>One or more input cannot be empty</h5>';
      togglePreloader('none');
      $('#analysisModal').modal('show');
      return null;
    }
    togglePreloader('block');
    uri = 'https://itarj-cors.appspot.com/http://35.223.64.55';
    const data = {
      company,
      address: location,
      invite: jobDetails
    };
    options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { Origin: 'x-requested-with', },
    };
    fetch(uri, options)
      .then(async res => {
        const result = await res.json();
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = `<h5>Our confidence level for this job invite is ${result.confidence}%</h5>`;
        togglePreloader('none');
        $('#analysisModal').modal('show');
      })
      .catch(err => {
        console.error(err);
        const analysisModal = document.querySelector('#result');
        analysisModal.innerHTML = '<h5>Our servers couldn\'t fetch data at the moment</h5>';
        togglePreloader('none');
        $('#analysisModal').modal('show');
      });
  });
}
