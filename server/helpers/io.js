const ioSocket = (io) => {
  // Socket.io connection
  io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('action', {
      type: 'NEW_USER',
      userId: Math.round(Math.random() * 100000),
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('page_change', (msg) => {
      console.log(`Current Page: ${msg}`);
      io.emit('New Page', 'random', Math.random());
    });
  });
};

module.exports = ioSocket;
