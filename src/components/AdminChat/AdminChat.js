import React from 'react';
import AdminChatWindow from '../AdminChatWindow';
import { ChatContainer, ChatList, ChatContent, Input, Enter } from './styled';
import { enter_btn } from '@/images/etc';
import socket from '@/utils/socket';

const AdminChat = () => {
  const onClickSend = () => {
    if (document.getElementById('input').value == '') {
      console.log('empty message box');
    } else {
      socket.emit('admin-msg-snd', {
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
