const express = require('express');
const router = express.Router();
const {
  getContact,
  putContact,
  updateContact,
  getContactForId,
  deleteContact,
} = require('../controllers/contactController');

router.route('/').get(getContact);

router.route('/').post(putContact);

router.route('/:id').get(getContactForId);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;
