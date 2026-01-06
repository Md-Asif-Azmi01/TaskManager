const express = require('express');
let app = express();
const cors = require('cors');
require('dotenv').config();
require('./connection/conn');
// const userApi = require('./controller/user')
const taskApi = require('./controller/task')


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// app.use(cookieParser());
 

// app.use('/api/v1', userApi);
app.use('/api/v1', taskApi);

app.get('/', (req, res) => {
    res.send('from server');
});

app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);   
});