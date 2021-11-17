const address = 'localhost';
const port = {
  backend: 9000,
  socket: 8080,
  video: 8000,
};

const path = {
  backend: `http://${address}:${port.backend}`,
  socket: `http://${address}:${port.socket}/`,
  video: `http://${address}:${port.video}/live/cheers.flv`,
};

export default path;
