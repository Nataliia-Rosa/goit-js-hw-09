const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const handleInput = event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage();
};

const handleSubmit = event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill all fields, please.');
    return;
  }

  console.log({ email, message });

  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
};

const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

populateForm();
