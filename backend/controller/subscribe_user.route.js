const route = require('express').Router();
const Subscriber = require('../module/subscribe.module');

const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

route.post('/subscribe_user', async (req, res) => {
    const subscriber = req.body;
    const data = await Subscriber.find({ email: subscriber.email });

    if (data.length === 0) {
        const createdSubscriber = new Subscriber({
            email: subscriber.email,
            status: "unverified",
        });

        try {
            const result = await createdSubscriber.save();
            console.log(result);

            const config = {
                service: "gmail",
                auth: {
                    user: "krunaltarale.iceico@gmail.com",
                    pass: "zblzoiergfvatxwd",
                },
            }

            let transporter = nodemailer.createTransport(config);

            let MailGenerator = new Mailgen({
                theme: "default",
                product: {
                    name: 'AIPROFF',
                    link: 'https://www.aiproff.ai/'
                }
            })

            let response = {
                body: {
                    name: "AIPROFF",
                    intro: "Verify Your Email Address",
                    action: {
                        button: {
                            color: '#22BC66',
                            text: 'Confirm your Email',
                            link: 'http://localhost:5173/updatesubscriber/'+result._id
                        }
                    },
                    outro: "Looking forward to doing more business"
                }
            }

            let mail = MailGenerator.generate(response)

            let message = {
                from: "krunaltarale.iceico@gmail.com",
                to: subscriber.email,
                subject: "Verify Your Email Address",
                html: mail
            }

            transporter.sendMail(message).then(() => {
                res.status(201).json({
                    status: "You should receive an email"
                })
            }).catch(error => {
                console.error(error);
                res.status(500).json({ error })
            })
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'Internal Server Error' });
        }
    } else {
        res.send({
            status: "Already subscribed"
        })
    }
})

module.exports = route;
