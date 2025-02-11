import Mailchimp from 'mailchimp-api-v3';
import fetch from 'node-fetch';

export default async (request, context) => {
  // Only allow POST
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {status: 405});
  }

  const formData = await request.formData()
  const formObject = Object.fromEntries(formData.entries())

  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_API_KEY}&response=${formObject['g-recaptcha-response']}`;
  const MAILCHIMP_LIST_ID = 'b4d8624172'

  const recaptchaResponse = await fetch(VERIFY_URL, { method: 'POST' })
  const recaptchaData = await recaptchaResponse.json()
  let result;

  if(recaptchaData.success) {
    let mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
    try {
      await mailchimp.request({
        method : 'post',
        path : `/lists/${MAILCHIMP_LIST_ID}/members`,
        body : {
          email_address : formObject.email,
          status : 'subscribed'
        }
      })
      result = {success: true, message: `${formObject.email} has been subscribed to the ControlShift mailing list.`};
    } catch(err) {
      const message = err.response.body.detail
      if (message.match(/is already a list member/)) {
        result = {success: true, message: `${formObject.email} has been subscribed to the ControlShift mailing list.`};
      } else {
        result = {success: false, message: message};
      }
    }
  } else {
    result = {success: false, message: 'reCaptcha rejected submission'}
  }

  return new Response(JSON.stringify(result), {status: 200});
}
