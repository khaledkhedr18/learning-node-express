/**
 * @desc    Get all contacts
 * @route   GET /api/contacts
 * @access  Public
 */

const getContact = (req, res) => {
  res.json({ message: 'Get all contacts' });
};

/**
 * @desc    Create contact
 * @route   POST /api/contacts
 * @access  Public
 */
const putContact = (req, res) => {
  res.json({ message: 'Create contact' });
};

/**
 * @desc    Update contact for id
 * @route   PUT /api/contacts/:id
 * @access  Public
 */
const updateContact = (req, res) => {
  res.json({ message: `Update contact for id ${req.params.id}` });
};

/**
 * @desc    Get contact for id
 * @route   GET /api/contacts/:id
 * @access  Public
 */
const getContactForId = (req, res) => {
  res.json({ message: `Get contact for id ${req.params.id}` });
};

/**
 * @desc    Delete contact for id
 * @route   DELETE /api/contacts/:id
 * @access  Public
 */
const deleteContact = (req, res) => {
  res.json({
    message: `Deleted Contact with id ${req.params.id} Successfully!`,
  });
};

module.exports = {
  getContact,
  putContact,
  updateContact,
  getContactForId,
  deleteContact,
};
