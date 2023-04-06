const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'votre_email@gmail.com',
      pass: 'votre_mot_de_passe_email'
  }
});

const mailOptions = {
  from: 'votre_email@gmail.com',
  to: 'email_destinataire@example.com',
  subject: 'Email de test',
  text: 'Ceci est un e-mail de test envoyé en utilisant nodemailer.',
  html:"<p>cordialement</p>",
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      console.log(error);
  } else {
      console.log('E-mail envoyé : ' + info.response);
  }
});
