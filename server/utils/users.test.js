const expect = require('expect')

const {Users} = require('./users.js')

describe('Users', () => {
    var users

    beforeEach(() => {
        users = new Users()
        users.users = [{
            id: '1',
            name: 'Kerk',
            room: 'Node'
        }, {
            id: '2',
            name: 'Kaew',
            room: 'React'
        }, {
            id: '3',
            name: 'gg',
            room: 'Node'
        }]
    })

    it('should add new user', () => {
        var users = new Users()
        var user = {
            id: '123',
            name: 'test',
            room: 'The room'
        }
        var resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user])
    })

    it('should remove a user', () => {
        var userId = '3'
        var user = users.removeUser(userId)

        expect(user.id).toBe(userId)
        expect(users.users.length).toBe(2)
    })

    it('should not remove user', () => {
        var userId = '4'
        var user = users.removeUser(userId)

        expect(user).toBeFalsy()
        expect(users.users.length).toBe(3)
    })

    it('should find user', () => {
        var userId = '1'
        var user = users.getUser(userId)

        expect(user.id).toBe(userId)
    })

    it('should not find user', () => {
        var userId = '4'
        var user = users.getUser(userId)

        expect(user).toBeFalsy()
    })

    it('should return names for node course', () => {
        var userList = users.getUserList('Node')

        expect(userList).toEqual(['Kerk', 'gg'])
    })
})