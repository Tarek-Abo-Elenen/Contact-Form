const form = document.querySelector('form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const fradio = document.querySelector('#general');
const lradio = document.querySelector('#support');
const textarea = document.querySelector('#message');
const checkBox = document.querySelector('#check');
const customAlert = document.querySelector('.custom-alert');

function validName(value) {
  return /^[a-zA-Z\s]+$/.test(value.trim());
}

function validEmail(value) {
  return  /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value.trim());
}

function validTextArea() {
  return textarea.value.trim() !== '';
}

function isRadioChecked() {
  return fradio.checked || lradio.checked;
}

function isCheckBoxChecked() {
  return checkBox.checked;
}

function showError(input, className) {
  input.classList.add('input-error');
  document.querySelector(`.${className}`).style.display = 'block';
}

function clearError(input, className) {
  input.classList.remove('input-error');
  document.querySelector(`.${className}`).style.display = 'none';
}

function clearForm() {
  form.reset();

  document.querySelectorAll('.errormessage').forEach(el => {
    el.style.display = 'none';
  });

  document.querySelectorAll('.input-error').forEach(el => {
    el.classList.remove('input-error');
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  if (!validName(fname.value)) {
    showError(fname, 'fname');
    isValid = false;
  } else {
    clearError(fname, 'fname');
  }

  if (!validName(lname.value)) {
    showError(lname, 'lname');
    isValid = false;
  } else {
    clearError(lname, 'lname');
  }

  if (!validEmail(email.value)) {
    showError(email, 'email');
    isValid = false;
  } else {
    clearError(email, 'email');
  }

  if (!isRadioChecked()) {
    document.querySelector('.radiomessage').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('.radiomessage').style.display = 'none';
  }

  if (!validTextArea()) {
    showError(textarea, 'textarea');
    isValid = false;
  } else {
    clearError(textarea, 'textarea');
  }

  if (!isCheckBoxChecked()) {
    document.querySelector('.checkbox').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('.checkbox').style.display = 'none';
  }

  if (isValid) {
    clearForm();
    customAlert.style.display = 'block';
    setTimeout(() => {
      customAlert.style.display = 'none';
    }, 3000);
  } 
});
