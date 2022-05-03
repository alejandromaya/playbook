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
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, 'AlejandroMtz', 'Alejandro');
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe('AlejandroMtz');
        expect(userInfoList[2]).toBe('Alejandro');
        expect(userInfoList[3]).toBe('Sin bio');
    });
});