document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulated backend authentication
    authenticate(username, password);
});

function authenticate(username, password) {
    // Simulated user data
    var users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "Naveen", password: "9361166136" }
    ];

    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        // Redirect or show success message
        window.location.href = "welcome.html";
    } else {
        document.getElementById("error").innerText = "Invalid username or password";
    }
}
