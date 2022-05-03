const UserService = require('./../../app/services/userService');
const User = require('./../../models/user');

describe('Test for UserService', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, 'AlejandroMtz', 'Alejandro');
        expect(user.username).toBe("AlejandroMtz");
        expect(user.name).toBe("Alejandro");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });
});