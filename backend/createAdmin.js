require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

mongoose.connect('mongodb://127.0.0.1:27017/hospitalManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

 async function createAdmin() {
  const admin = new Admin({
    firstName: "abc",
    lastName: "xyz",
    email: "abc@gmail.com",
    password: "xyz123", 
    role: "admin"
  });

  try {
    await admin.save();
    console.log('Admin created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
}

exports.module={
createAdmin
}