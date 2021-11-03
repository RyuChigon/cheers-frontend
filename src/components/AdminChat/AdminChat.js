import React from 'react';
import AdminChatWindow from '../AdminChatWindow';
import { ChatContainer, ChatList, ChatContent, Input, Enter } from './styled';
import { enter_btn } from '@/images/etc';

const AdminChat = () => (
  <ChatContainer>
    <ChatList>
      <AdminChatWindow />
    </ChatList>
    <ChatContent>
      <Input placeholder="send a notice..." />
      <Enter src={enter_btn} />
    </ChatContent>
  </ChatContainer>
);

export default AdminChat;
