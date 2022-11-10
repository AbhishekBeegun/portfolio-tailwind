import React from 'react';


function Email() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_o4uylgi','template_qmw3o2q',e.target,'6l66SXfLT48zUocC7')
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
 
  return (
    <div className="mail" id = "mail">
        <form className="formail"
         onSubmit={sendEmail}>
            <label>Enter Name</label>
            <input type ='text' name='name' />

            <label>Email(optional)</label>
            <input type = 'email' name='user_email' />

            <label>Message</label>
            <textarea name='message' rows='4' />
            <input type ='submit' value='Send' />
        </form>
        <p>P.S You will not receive a confirmation message as EmailJs quota is 200 email per month.I will try to reply as soon as possible.</p>
    </div>
  )
}


  


export default Email