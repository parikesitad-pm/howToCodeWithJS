const { updateUser, createUser } = require("./api/users");
const { validationMessages, printErrors } = require("./pro/validation");

function saveUser(user) {
  if (user.id == null) {
    console.log("Created User");
    createUser(user);
  } else {
    console.log("Updated User");
    updateUser(user);
  }
}

function validateUser(user) {
  const validations = {
    username: {
      required: true,
      length: 3,
    },
    password: {
      required: true,
      length: 8,
    },
  };

  const errors = validationMessages(validations, user);

  return {
    valid: Object.values(errors).every((messages) => messages.length === 0),
    errors: errors,
  };
}

const user = {
  id: 3,
  username: "parikesit",
  password: "administrator",
};

const { errors, valid } = validateUser(user);
if (valid) {
  saveUser(user);
} else {
  printErrors(errors);
}
