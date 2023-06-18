const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Books } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
    const newBook = await Books.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newBook = await Books.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/createRquest', withAuth, async (req, res) => {

  


  try {


    await sequelize.query('UPDATE books set book_status=:new_status where book_id=:book_id', {
      replacements: { new_status: 'Unavailable', book_id: req.body.book_id },
      type: sequelize.UPDATE

    });

    await sequelize.query('INSERT INTO booksout (borrow_person_id, book_lent, borrow_date, estimated_due, request_state) '+
     'VALUES (:borrow_person_id, :book_lent, now(), :estimated_due, :request_state);', {
      replacements: { borrow_person_id: req.body.user_id, book_lent: req.body.book_id , estimated_due:req.body.due_date, request_state:'Pending' },
      type: sequelize.INSERT

    });


    //Insert code for QR generation

    

    res.status(200).json(req.body.due_date);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
