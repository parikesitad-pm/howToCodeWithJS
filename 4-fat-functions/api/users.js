function createUser(user) {
  return {
    ...user,
    id: Date.now(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function updateUser(user) {
  return {
    ...user,
    updateAt: new Date(),
  };
}

module.exports = { createUser, updateUser };
