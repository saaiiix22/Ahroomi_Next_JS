const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });  

const DB_URL = process.env.DB_URL || 'mongodb+srv://aashditHRMS:3myuODvOmYcEjdy5@cluster0.lg1lsh4.mongodb.net/Ahroomi';

const dbConn = async () => {
  if (!DB_URL) {
    console.error('DB_URL is undefined.');
    return;
  }

  try {
    await mongoose.connect(DB_URL);
    console.log('DB Connected Successfully');
  } catch (error) {
    console.error('DB Connection Failed:', error.message);
  }
};

module.exports = dbConn;
