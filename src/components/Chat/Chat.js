import React, { useCallback, useState } from 'react';
import {
  ChatContainer,
  Expand,
  ExpandField,
  ChatContent,
  Input,
  Enter,
  Output,
} from './styled';
import { enter_btn, expand_btn } from '@/images/etc';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:80/');
socket.emit('init', { name: 'huikyeong' });

const Chat = () => {
  const [expand, setExpand] = useState(false);
  const onClickExpand = () => setExpand(!expand);
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: 'huikyeong', message: '' });

  socket.on('msg-rcv', item => {
    console.log(
      'received message from ' + item.name + ': [ ' + item.message + ' ]'
    );
    setChatArr(item.name + ': ' + item.message);
    if (expand) {
      document.getElementById('output').value = item.name + ': ' + item.message;
    }
  });

  const onClickSend = useCallback(() => {
    console.log('onclick....');
    socket.emit('msg-snd', { name: chat.name, message: chat.message });
  }, [chat]);

  const changeMessage = useCallback(
    e => {
      setChat({ name: chat.name, message: e.target.value });
    },
    [chat]
  );

  return (
    <ChatContainer>
      {expand ? (
        <ExpandField>
          <Output type="text" id="output" value="" disabled="disabled" />
        </ExpandField>
      ) : null}
      <Expand src={expand_btn} onClick={onClickExpand} />
      <ChatContent>
        <Input placeholder="send a message..." onChange={changeMessage} />
        <Enter src={enter_btn} onClick={onClickSend} />
      </ChatContent>
    </ChatContainer>
  );
};

export default Chat;
