function restricted(req, res) {
  console.log(`user ${req.user.email} is calling /api/restricted`);
  res.json({
    name: 'foo'
  });
}

module.exports = restricted;