import io from 'socket.io-client';
import path from './path';

const socket = io.connect(path.socket);

export default socket;
