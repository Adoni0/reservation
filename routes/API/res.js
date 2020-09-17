const router = require('express').Router();
const poolController = require('../../controllers/poolController');

router.route('/')
  .get(poolController.findAll)
  .post(poolController.create);

  router.route('/:id')
  .delete(poolController.remove)
  .put(poolController.update)

module.exports = router;