const { updatedUser, createUser } = require("./api/users");

function saveUser(user) {
  const errors = [];
  if (user.username) {
    if (user.username.length > 3) {
      errors.push("Username must be at least 3 characters");
    }
  } else {
    errors.push("Username is required");
  }

  if (user.password) {
    if (user.password.length < 5) {
      errors.push("Password must be at least 5 characters");
    }
  } else {
    errors.push("Password is required");
  }

  if (errors.length > 0) {
    errors.forEach((error) => console.log(error));
    return;
  }

  if (user.id == null) {
    console.log("Created User");
    createUser(user);
  } else {
    console.log("Updated User");
    updatedUser(user);
  }
}

const user = {
  username: "PAD",
  password: "password",
};

saveUser(user);
