const express = require('express');
const bodyParser = require('body-parser');
const studentsController = require('./zad2/controllers/students');
const errorController = require('./zad2/controllers/error');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.addStudent);

app.use(errorController.getNotFoundPage);

app.get('/', (req, res) => {
  res.render('Home', { title: 'Home' });
});

app.get('/success', (req, res) => {
  res.render('Success', { title: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('List', { title: 'List' });
});

app.post('/add-student', (req, res) => {
  res.redirect('/students-list');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});