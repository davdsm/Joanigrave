const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
var env = './.env'

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_KEY;

// Uncomment below two lines to configure authorization using: partner-key
// var partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = 'YOUR API KEY';

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

const port = 3000
app.use(express.json())


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/send', (req, res) => {
  const apiKey = req.header(process.env.API_HEADER);
  const data = req.body
  if(apiKey === process.env.API_KEY) {
    sendSmtpEmail = {
      sender: {
          name: "Website Joanigrave",
          email: "geral@davdsm.pt"
      },
      to: [
          {
              email: "geral@davdsm.pt",
              name: "David"
          }
      ],
      subject: "Nova Mensagem de " + data.name,
      htmlContent: `<html><head></head><body><p>Olá Álvaro,</p>Recebeu uma nova mensagem de ${data.name} (${data.email}).</p><p>Assunto: ${data.subject}.</p><p>Mensagem: ${data.message} </p></body></html>`
  };
  
  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function (error) {
      console.error(error);
  });

  res.sendStatus(200)

  } else {
    res.sendStatus(403)
  }
})

app.post('/sendMail', (req, res) => {
  const apiKey = req.header(process.env.API_HEADER);
  const data = req.body
  if (apiKey === process.env.API_KEY) {
    sendSmtpEmail = {
      sender: {
        name: data.sender,
        email: "geral@davdsm.pt"
      },
      to: [
        {
          email: data.receiver.email,
          name: data.receiver.name
        }
      ],
      subject: data.subject,
      htmlContent: data.message
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function (error) {
      console.error(error);
    });

    res.sendStatus(200)

  } else {
    res.sendStatus(403)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})