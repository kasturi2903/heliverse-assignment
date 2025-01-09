const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors')
const userRoutes = require('./routes/user.routes');
const patientRoutes=require('./routes/patient.routes')
const dietChart =require('./routes/diet.routes')
const meal = require('./routes/meal.routes')
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/diet',dietChart)
app.use('/api/meal',meal)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));