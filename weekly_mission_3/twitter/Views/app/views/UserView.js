const UserService = require('./../../services/UserService');

class UserView {
    static createUser(payload){
        if(payload === null){
            return {error: "payload no existe"}
        }else if((typeof payload.username !== 'string' || payload.usuername === null) || (typeof payload.name !== 'string' || payload.name === null) || (typeof payload.id !== 'number' || payload.id === null)){
            return {error: "necesitan tener un valor válido"}
        }else{
            return UserService.create(payload.id, payload.username, payload.name);
        }
    }
}

module.exports = UserView;