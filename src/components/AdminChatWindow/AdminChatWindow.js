import React from 'react';
import { WindowContainer, Text, ChatList } from './styled';

const AdminChatWindow = () => {
  return (
    <WindowContainer>
      <Text>Chat</Text>
      <ChatList />
    </WindowContainer>
  );
};

export default AdminChatWindow;
