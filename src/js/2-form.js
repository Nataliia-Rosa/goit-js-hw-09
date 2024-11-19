const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

populateForm();

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const handleInput = event => {
  const { name, value } = event.target;
  formData[name] = value;
  saveToLocalStorage();
};

const handleSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

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

