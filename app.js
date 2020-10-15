const express = require('express');
const Nexmo = require('nexmo');


const app = express();


app.post('/', async (req, res) => {


    const nexmo = new Nexmo({
        apiKey: 'api key',
        apiSecret: 'api secret key',
    });

    const from = 'from name';
    const to = 'number in format (380+)';
    const text = 'text message';



    await nexmo.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
    res.send(`message send successfully`)
})

app.listen(3000, (err) => {
    console.log(err ? console.log(err) : `300 port work`);
})
