const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Make sure this is importing the right file
const app = express();
const http = require("http").Server(app);

dotenv.config();

// Connect to the database
connectDB();

// CORS configuration using the cors middleware
const corsOptions = {
    origin: '*', // Or specify your frontend URL here
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,X-CSRF-Token,X-Requested-With,Accept,Accept-Version,Content-Length,Content-MD5,Date,X-Api-Version,X-File-Name',
    credentials: true
};

// Use CORS middleware
app.use(cors());
app.use(express.json());

// Routes

app.use('/api', userRoutes);// Assuming userRoutes handles the `/users` routes
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
  });
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
