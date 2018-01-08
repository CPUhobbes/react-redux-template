const ioSocket = (io) => {
  // Socket.io connection
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('player_added', (msg) => {
      console.log(`Message: ${msg}`);
      io.emit('player_added', Math.random());
    });
  });
};

module.exports = ioSocket;
