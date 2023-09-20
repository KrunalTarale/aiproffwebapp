const route = require('express').Router();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

route.post('/send_result', async (req, res) => {
    const resp = req.body;
  
    const config = {
      service: "gmail",
      auth: {
        user: "krunaltarale.iceico@gmail.com",
        pass: "zblzoiergfvatxwd",
      },
    };
  
    let transporter = nodemailer.createTransport(config);
  
    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: 'AIPROFF',
        link: 'https://www.aiproff.ai/'
      }
    });
  
    const tableData = resp.questions.map((question, index) => ({
      sr_no: index + 1,
      correct_ans: question.answer,
      selected_ans: resp.answers[index]
    }));
  
    let response = {
      body: {
        name: "AIPROFF",
        intro: "Assessment Result. Your Score is " + resp.score + " out of "+resp.outoff,
        table: {
          data: tableData
        },
        outro: "Looking forward to do more business"
      }
    };
  
    let mail = MailGenerator.generate(response);
  
    let message = {
      from: "krunaltarale.iceico@gmail.com",
      to: resp.email,
      subject: "Assessment Result",
      html: mail
    };
  
    transporter.sendMail(message).then(() => {
      res.status(200).json({
        message: "You have been sent an email"
      });
    }).catch(error => {
      return res.status(500).json({
        status: "Internal Server Error"
      });
    });
  });
  

module.exports = route;
