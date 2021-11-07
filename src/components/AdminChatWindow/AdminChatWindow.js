import React, { useState, useEffect } from 'react';
import { WindowContainer, Text, ChatList } from './styled';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:80/');
socket.emit('init_chat', { name: 'chat' });

const AdminChatWindow = () => {
  const [chatArr, setChatArr] = useState([]);

  useEffect(() => {
    socket.on('msg-rcv', item => {
      setChatArr(chatArr => chatArr.concat(item));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  return (
    <WindowContainer>
      <Text>Chat</Text>
      <ChatList>
        {chatArr.map(ele => (
          <>
            {ele.name + ': ' + ele.message}
            <br />
          </>
        ))}
      </ChatList>
    </WindowContainer>
  );
};

export default AdminChatWindow;
