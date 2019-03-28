const express = require('express'); 
const morgan = require('morgan');
const cors = require('cors');
const app = express(); 

const { mongoose } = require('./database');

//SETTINGS
app.set('port', process.env.PORT || 3000)

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}));

//ROUTES
//app.use('/api/employees', require('./routes/employee.routes'))

// START SERVER
app.listen(app.get('port'), () => {
     console.log('Server on port', app.get('port'))
});