const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function onFormInput(event) {

  formData[event.target.name] = event.target.value.trim();


  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFromStorage() {
 
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    if (formData.email) {
      emailInput.value = formData.email;
    }
    if (formData.message) {
      messageInput.value = formData.message;
    }
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }


  console.log('Form data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
populateFormFromStorage();
