var socket = io()

socket.on('connect', function () {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'Kaew',
        text: 'Hello oink!'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log(`New Message from ${message.from}: ${message.text}, since ${message.createAt}`)
})