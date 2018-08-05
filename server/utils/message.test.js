var expect = require('expect')

var {generateMessage} = require('./message.js')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Kerk'
        var text = 'Hey there!'
        var message = generateMessage(from, text)

        expect(message).toMatchObject({from, text})
        expect(message.from).toBe(from)
        expect(message.text).toBe(text)
        expect(typeof message.createdAt).toBe('number')
    })
})