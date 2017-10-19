import SocketIOClient from 'socket.io-client';
import ipAddress from '../../api/ipaddress';

const socketReducer = (state = SocketIOClient(`http://${ipAddress}`)) => state;

export default socketReducer;
