const { Router } = require('express');
const router = Router();
const express = require('express');
const nodemailer = require('nodemailer')
const app =  express();


router.get('/', (req, res) => {
  res.render('index', { title: 'Magnaabogados' });
});
router.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Contactenos-MagnaAboados' });
});
router.get('/politicaDePrivacidad', (req, res) => {
  res.render('politicaDePrivacidad', { title: 'Politica de privacidad-MagnaAboados' });
});
router.get('/areasEspecializacion', (req, res) => {
  res.render('areasEspecializacion', { title: 'Areas de especialiazación-MagnaAboados' });
});
router.get('/logInAdmin', (req, res) => {
  res.render('logInAdmin', { title: 'Inicio de sesión - ADMIN' });
});

router.post('/send-email', async (req, res) => {
  const {name, email, phone, message} = req.body;

  contentHTML = `
        <h1>INFORMACIÓN</h1>
        <ul>
            <li style="font-weight: bold;">NOMBRE:  ${name}</li>
            <li style="font-weight: bold">EMAIL:  ${email}</li>
            <li style="font-weight: bold">NUMERO DE CELULAR:  ${phone}</li>
        </ul>
        <h1>MENSAJE</h1>
        <p>${message}</p>
        <p>____________________________________________________________</p>
        <h3 style="color: #435468; font-family: 'Playfair Display'; font-weight: normal; font-style: italic">Mensaje enviado desde magnaabogados.com - formulario de contacto.</h3>
    `;
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'thomas.esteban@gmail.com',
      pass: 'teaf1905'
    },
  });
  let info = await transporter.sendMail({
    to: 'thomas.esteban@gmail.com',
    subject:"MagnaAbogados - Web",
    html: contentHTML
  })
  res.redirect('contacto');
});

module.exports = router;