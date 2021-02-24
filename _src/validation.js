function setupValidation() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        const emailInput = event.target.getElementsByClassName('email-address')[0]
        const emailInvalidFeedback = document.getElementById('email-invalid-feedback')
        const successMessage = document.getElementById('mailchimp-success-message')

        const emailOptInElem = document.getElementById('email-opt-in')
        const emailOptIn = (emailOptInElem !== null) ? emailOptInElem.checked : true

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
              if(emailOptIn) {
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
              }

              if(event.target.classList.contains('resource-form')) {
                // this is a resource page, the user just unlocked the content.
                document.getElementById('resource-content-overlay').classList.add('d-none')
                document.getElementById('resource-content').classList.remove('d-none')
              }
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

  return await response.json()
}

export { setupValidation }


