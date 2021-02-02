function setupValidation() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        const emailInput = document.getElementById('mailchimp-email')
        const emailInvalidFeedback = document.getElementById('email-invalid-feedback')
        const successMessage = document.getElementById('mailchimp-success-message')

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          // reset the message if this is a client-side validation
          emailInput.classList.remove('is-invalid')
          emailInvalidFeedback.innerHTML = ''
          successMessage.innerHTML = ''
        } else {
          event.preventDefault()
          grecaptcha.ready(() => {
            grecaptcha.execute('6LdGUEcaAAAAAAiT_ZLd0w-yKzEbrPm4ZZinhCuA', {action: 'submit'}).then((token) => {
              postData(event.target, token)
                .then(data => {
                  if (!data.success) {
                    emailInput.classList.add('is-invalid')
                    emailInvalidFeedback.innerHTML = data.message
                    successMessage.innerHTML = ''
                  } else {
                    emailInput.classList.remove('is-invalid')
                    emailInvalidFeedback.innerHTML = ''
                    successMessage.innerHTML = `<div class="alert alert-success" role="alert">${data.message}</div>`
                  }
                })
            })
          })
        }

        form.classList.add('was-validated')
      }, false)
    })
}

const postData = async (form, token) => {
  const formData = new FormData(form)
  formData.append('g-recaptcha-response', token)
  const response = await fetch(form.action,{
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    method: form.method,
    body: new URLSearchParams(formData)
  });

  const data = await response.json()
  console.log(data)
  return data
}

export { setupValidation }


