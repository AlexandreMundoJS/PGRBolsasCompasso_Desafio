const nameVal = document.getElementById('name');
const emailVal = document.getElementById('email');
const contentVal = document.getElementById('content');
const formVal = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (submitForm) => {
    let messages = []

    if (nameVal.value === '' || nameVal.value == null) {
      messages.push('O preenchimento do nome é obrigatório')
    }

    if (emailVal.value === '' || nameVal.value == null) {
        messages.push('O preenchimento do campo e-mail é obrigatório')
      }

    if (contentVal.value === '' || contentVal.value == null) {
        messages.push('O preenchimento do campo assunto é obrigatório')
      }

    if (contentVal.value === '' || contentVal.value == null) {
        messages.push('O preenchimento do campo de mensagem é obrigatório')
      }
  

   
    if(messages.length > 0) {
        submitForm.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
})