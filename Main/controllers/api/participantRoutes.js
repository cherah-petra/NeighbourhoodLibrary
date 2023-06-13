const router = require('express').Router();
const { participants } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const participantData = await participants.create(req.body);

    req.session.save(() => {
      req.session.user_id = participantData.person_id;
      req.session.logged_in = true;

      res.status(200).json(participantData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const participantData = await participants.findOne({ where: { Email: req.body.Email } });

    if (!participantData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await participantData.checkPassword(req.body.userPass);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = participantData.person_id;
      req.session.logged_in = true;
      
      res.json({ particpants: participantData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
