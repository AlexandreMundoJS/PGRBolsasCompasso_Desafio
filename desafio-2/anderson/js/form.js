const nameVal = document.getElementById('name');
const emailVal = document.getElementById('email');
const subjectVal = document.getElementById('subject');
const contentVal = document.getElementById('content');
const formVal = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (submitForm) => {

    let messages = [];

    if (nameVal.value === '' || nameVal.value == null) {
      messages.push('O preenchimento do nome é obrigatório');
    }

    if (emailVal.value === '' || nameVal.value == null) {
        messages.push('é obrigatório preencher o email');
      }

    if (subjectVal.value === '' || subjectVal.value == null) {
        messages.push('é obrigatório preencher o assunto');
      }

    if (contentVal.value === '' || contentVal.value == null) {
        messages.push('é obrigatório enviar uma mensagem');
      }

    if(messages.length > 0) {
        submitForm.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
   
})


