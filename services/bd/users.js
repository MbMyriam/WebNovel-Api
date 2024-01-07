const db = require('../../models');

exports.addUser = async (username, password, firstName, lastName) => {
    return await db.users.create({username, password, firstName, lastName});
};

exports.updateUser = async (userId, username, password, firstName, lastName) => {
    const user = db.users.find(o => o.id == userId);
    user.username = username;
    user.password = password;
    user.firstName = firstName;
    user.lastName = lastName;
};

exports.deleteUserById = (userId) => {
    return db.users.destroy({
        where: {
            userId
        }
    });
};

exports.getAllUsers = async () => {
    return await db.users.findAll();
};

exports.getUserById = async (userId) => {
    return await db.users.findOne({
        where: {
            userId
        }
    });
};

exports.findByName = async (firstNameParam) => {
    return await db.users.find(o => o.firstName == firstNameParam)
};
