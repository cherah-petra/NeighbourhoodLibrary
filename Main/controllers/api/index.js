const router = require('express').Router();
const participantRoutes = require('./participantRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/participants', participantRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
