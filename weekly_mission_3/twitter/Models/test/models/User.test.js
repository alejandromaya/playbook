const User = require('./../../app/models/User');

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, 'IsaacMaya', 'Alejandro', 'Bio');

        expect(user.username).toBe('IsaacMaya');
        expect(user.name).toBe('Alejandro');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });
    test('Add getters', () =>{
        const user = new User(1, 'IsaacMaya', 'Alejandro', 'Bio');

        expect(user.getUsername).toBe('IsaacMaya');
        expect(user.getBio).toBe('Bio');
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();    
    });
    test('Add setters', () => {
        const user = new User(1, 'IsaacMaya', 'Alejandro', 'Bio');
        user.setUsername = "AlejandroMtz";
        expect(user.username).toBe("AlejandroMtz");

        user.setBio = "New bio";
        expect(user.bio).toBe("New bio");
    });
});