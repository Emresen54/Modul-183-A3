const { body, validationResult} = require('express-validator');

const initializeAPI = async (app) => {
app.post("/api/login", body('username').notEmpty().isEmail(), 
body('password').notEmpty().isLength({ min: 10 }), login);
};

const login = async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() })
}

const { username, password } = req.body;

const answer = `
<h1>Answer</h1>
<p>Username: ${username}</p>
<p>Password: ${password}</p>
`;

res.send(answer);
};

module.exports = { initializeAPI };
 