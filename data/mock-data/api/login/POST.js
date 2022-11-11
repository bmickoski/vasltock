const fs = require("fs-extra");

const userDb = fs.readJsonSync("data/mock-data/users-db.json");

module.exports = function (req, res) {
  const { username, password } = req.body;
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = "Incorrect username or password";
    res.status(status).json({ status, message });
    return;
  }
  res.status(200).json({
    user: {
      username,
      password,
    },
  });
};

// Check if the user exists in database
function isAuthenticated({ username, password }) {
  return (
    userDb.users.findIndex(
      (user) => user.username === username && user.password === password
    ) !== -1
  );
}
