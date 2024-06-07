const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulated user data
    const users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "Naveen", password: "9361166136" }
    ];

    const authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        res.redirect('/welcome.html');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

app.get('/welcome.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
