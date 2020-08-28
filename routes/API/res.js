const router = require('express').Router();
const poolController = require('../../controllers/poolController');

router.route('/')
  .get(poolController.findAll)
  .post(poolController.create);

  router.route('/:id')
  .get(poolController.findById);

module.exports = router;