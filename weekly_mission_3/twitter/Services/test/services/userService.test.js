const UserService = require('../../app/services/userService');
const User = require('../../models/user');

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
    test('3. Update username', () => {
        const user = UserService.create(1, 'AlejandroMtz', 'Alejandro');
        UserService.updateUserUsername(user, 'AlejandroM');
        expect(user.username).toBe('AlejandroM');
    });
    test('4. Given a list of users give me the list of usarnemes', () => {
        const user1 = UserService.create(1, 'AlejandroMtz1', 'Alejandro');
        const user2 = UserService.create(1, 'AlejandroMtz2', 'Alejandro');
        const user3 = UserService.create(1, 'AlejandroMtz3', 'Alejandro');
        const usarnemes = UserService.getAllUsernames([user1, user2, user3]);
        expect(usarnemes).toContain('AlejandroMtz1');
        expect(usarnemes).toContain('AlejandroMtz2');
        expect(usarnemes).toContain('AlejandroMtz3');
    });
});