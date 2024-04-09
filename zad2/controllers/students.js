exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
  };
  
  exports.addStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    res.redirect('/students-list');
  };