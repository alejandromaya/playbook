const User = require('./../models/user');

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }
    static getInfo(user){
        return Object.values(user);
    }
    static updateUserUsername(user, newusername){
        return user.username = newusername;
    }
    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username]       
    }
}


module.exports = UserService;