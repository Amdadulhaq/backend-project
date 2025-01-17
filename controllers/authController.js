const { generateToken } = require('../utils/jwtUtils');

exports.getToken = (req, res) => {
  const token = generateToken({ userId: 1 });
  res.json({ token });
};

exports.postBody = (req, res) => {
  res.send('I am post body');
};
