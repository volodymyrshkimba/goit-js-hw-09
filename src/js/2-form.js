let formData = {
	email : '',
	message : '',
}

const key = "feedback-form-state";
const formEl = document.querySelector('.feedback-form')

if (localStorage.getItem(key)) {
formData = JSON.parse(localStorage.getItem(key));
formEl.elements.email.value = formData.email;
formEl.elements.message.value = formData.message;
}

const onFormElInput = event => {
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
	formData = {email : '', message : '',}
}

formEl.addEventListener('input', onFormElInput)
formEl.addEventListener('submit', onFormElSubmit)

