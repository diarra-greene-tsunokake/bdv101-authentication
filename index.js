const express = require("express");

const app = express();

const user = {
    username: "your name here",
    role: "admin"
};

// middleware will come here this is the most important part they said 
//in human word is this : we are creating a function called authorize
// this is the role we requre to enter ("admin") or ("editor")
function authorize (requiredRole) {
    return(req, res, next) => {
// this part checks to see if your role matches the role required to enter
        if(user.role === requiredRole) {
            next ();
        }
        else {
            res.status(403).json({
                message: "Access denied. You do not have the required role to access this resource."
            });
        }

    }
}

app.get("/admin",
    authorize("admin"), (req, res) => {
        res.send("Welcome to the admin Dashboard." + user.username + "!");
    });

app.get("/profile",
    authorize("user"), (req, res) => {
        res.send("Welcome to your Profile page" + user.username + "!");

    }
);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});
