import React from 'react';
import { ChatContainer, Expand, ChatContent, Input, Enter } from './styled';
import { enter_btn, expand_btn } from '@/images/etc';

const Chat = () => (
  <ChatContainer>
    <Expand src={expand_btn} />
    <ChatContent>
      <Input placeholder="send a message..." />
      <Enter src={enter_btn} />
    </ChatContent>
  </ChatContainer>
);

export default Chat;
