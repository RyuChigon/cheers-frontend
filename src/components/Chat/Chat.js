import React, { useCallback, useState, useEffect } from 'react';
import {
  ChatContainer,
  NoticeBox,
  Expand,
  ExpandField,
  ChatContent,
  Input,
  Enter,
  Output,
  Balloon_me,
  Balloon_a,
  Balloon_b,
  NotExpand,
} from './styled';
import { enter_btn, expand_btn, notexpand_btn } from '@/images/etc';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import ChatBalloon from '@/components/ChatBalloon';

import io from 'socket.io-client';

// const socket = io.connect('http://192.249.28.102:80/');
const socket = io.connect('http://localhost:80/');
socket.emit('init_chat', { name: 'chat' });

const Chat = () => {
  const [expand, setExpand] = useState(false);
  const onClickExpand = () => setExpand(!expand);
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: 'huikyeong', message: '' });
  // const _userList = useSelector(state => state.user.userList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const dispatch = useDispatch();

  dispatch(getAllUser());

  useEffect(() => {
    socket.on('msg-rcv', item => {
      setChatArr(chatArr => chatArr.concat(item));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  socket.on('msg-rcv', item => {
    var el = document.getElementById('ef');
    if (el != null && el.scrollHeight > 0) {
      el.scrollTop = el.scrollHeight;
    }
  });

  const onClickSend = () => {
    if (document.getElementById('input').value == null) {
      console.log('empty message box');
    } else {
      socket.emit('msg-snd', {
        name: _loginUser['userName'],
        message: document.getElementById('input').value,
        team: _loginUser['team'],
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
      {expand ? (
        <ExpandField id="ef">
          {chatArr.map(ele => (
            <ChatBalloon
              key={ele.name}
              team={ele.team}
              userName={ele.name}
              message={ele.message}
            />
          ))}
        </ExpandField>
      ) : null}
      {expand ? (
        <NotExpand src={notexpand_btn} onClick={onClickExpand} />
      ) : (
        <Expand src={expand_btn} onClick={onClickExpand} />
      )}
      {/* <Expand src={expand_btn} onClick={onClickExpand} /> */}
      <ChatContent>
        <Input id="input" placeholder="send a message..." />
        <Enter src={enter_btn} onClick={onClickSend} />
      </ChatContent>
    </ChatContainer>
  );
};

export default Chat;
