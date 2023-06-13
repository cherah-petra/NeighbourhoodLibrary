const router = require('express').Router();
const participantRoutes = require('./participantRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/participant', participantRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
