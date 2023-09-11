const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get("/send-email", async (req, res) => {

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "a5cdc7a60e02a3",
          pass: "0b24d511ba9f21"
        }
      });

      var message = {
        from: "abcdown@senai.com.br",
        to: "melqui@senai.com",
        subject: "Redefinir senha",
        text: "Prezado(a) Melqui. \n\nVocê solicitou a alteração de senha.",
        html: "<p>Prezado(a) Melqui. <br><br>Você solicitou a alteração de senha.<br><br>"
      };

      transport.sendMail(message, function(erro){
        if(erro) return res.status(400).json({
            erro: true,
            mensagem: "Erro: E-mail não enviado com sucesso!"
        })
      })

      
    
      
    
    return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso"
    })
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})