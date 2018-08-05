var expect = require('expect')

var {generateMessage, generateLocationMessage} = require('./message.js')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Kerk'
        var text = 'Hey there!'
        var message = generateMessage(from, text)

        expect(message).toMatchObject({from, text})
        expect(typeof message.createdAt).toBe('number')
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Kaew'
        var latitude = 100
        var longitude = 100
        var url = 'https://www.google.com/maps?q=100,100'
        var message = generateLocationMessage(from, latitude, longitude)

        expect(message).toMatchObject({from, url})
        expect(typeof message.createdAt).toBe('number')
    })
})