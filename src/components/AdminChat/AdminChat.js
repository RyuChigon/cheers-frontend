import React, { useState, useEffect } from 'react';
import AdminChatWindow from '../AdminChatWindow';
import { ChatContainer, ChatList, ChatContent, Input, Enter } from './styled';
import { enter_btn } from '@/images/etc';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:80/');
socket.emit('init_chat', { name: 'chat' });

const AdminChat = () => {
  const [chatArr, setChatArr] = useState([]);
  // const _userList = useSelector(state => state.user.userList);
  // const _loginUser = useSelector(state => state.user.loginUser);
  // const dispatch = useDispatch();

  // dispatch(getAllUser());

  useEffect(() => {
    socket.on('msg-rcv', item => {
      setChatArr(chatArr => chatArr.concat(item));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  const onClickSend = () => {
    if (document.getElementById('input').value == null) {
      console.log('empty message box');
    } else {
      socket.emit('admin-msg-snd', {
        // name: _loginUser['userName'],
        name: 'Admin',
        message: document.getElementById('input').value,
      });
      document.getElementById('input').value = '';
    }
  };

  const onEnterSend = e => {
    if (e.keyCode == 13) {
      onClickSend();
    }
  };

  return (
    <ChatContainer onKeyDown={onEnterSend}>
      <ChatList>
        <AdminChatWindow />
      </ChatList>
      <ChatContent>
        <Input id="input" placeholder="send a notice..." />
        <Enter src={enter_btn} onClick={onClickSend} />
      </ChatContent>
    </ChatContainer>
  );
};

export default AdminChat;
