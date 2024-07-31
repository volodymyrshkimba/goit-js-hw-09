const formData = {
	email : '',
	message : '',
}

const key = "feedback-form-state";
const formEl = document.querySelector('.feedback-form')

if (localStorage.getItem(key)) {
formEl.elements.email.value = JSON.parse(localStorage.getItem(key)).email;
formEl.elements.message.value = JSON.parse(localStorage.getItem(key)).message;
formData.email = JSON.parse(localStorage.getItem(key)).email;
formData.message = JSON.parse(localStorage.getItem(key)).message;
}

const onFormElInput = () => {
	formData.email = formEl.elements.email.value.trim();
	formData.message = formEl.elements.message.value.trim();
   localStorage.setItem(key, JSON.stringify(formData));
}

const onFormElSubmit = event => {
	event.preventDefault();
	if (formData.email === '' || formData.message === '') {
		alert('Fill please all fields');
		return;
	}
	console.log(formData);
	localStorage.removeItem(key);
	formEl.reset();
}

formEl.addEventListener('input', onFormElInput)
formEl.addEventListener('submit', onFormElSubmit)

