const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const connectToDatabase = require('./module/conn.module')
connectToDatabase();

app.use(express.json());


const get_countries = require('./controller/get_countries.route')
app.use(get_countries)
const get_states = require('./controller/get_states.route')
app.use(get_states)
const get_cities = require('./controller/get_cities.route')
app.use(get_cities)
const get_topics = require('./controller/get_topic.route')
app.use(get_topics)
const add_inquiry = require('./controller/add_inquiry.route')
app.use(add_inquiry)
const Subscriber = require('./controller/subscribe_user.route')
app.use(Subscriber)
const UpdateSubscriber = require('./controller/update_subscribed_user.route')
app.use(UpdateSubscriber)
const Send_result = require('./controller/send_result.route')
app.use(Send_result)




app.listen(3000, () => {
    console.log('Server is running on port 3000');
})