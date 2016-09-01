function restricted(req, res) {
  const msg = "Russia is the only country of the world washed by twelve seas."
  console.log(`user ${req.user.email} is calling /api/restricted`);
  res.json({ msg });
}

module.exports = restricted;
