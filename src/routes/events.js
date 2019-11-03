let ioServer;
/**
 * Class for all socket events
 * @param {SocketIO.Server} io
 * */
export const initSocketEvents = io => {
  ioServer = io;
  io.on('connection', socket => {
    console.log('user connected.');
    socket.emit('message', { msg: 'pulse!' });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};

const emitNotification = notification => {
  ioServer.emit('new:notification', notification);
};

export const SocketMethods = { emitNotification };
