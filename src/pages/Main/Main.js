import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Video from '@/components/Video';
import Emoticon from '@/components/Emoticon';
import Chat from '@/components/Chat';
import ViewPoint from '@/components/ViewPoint';
import Character from '@/components/Character';
import {
  MainContainer,
  CheerGuide,
  CommunicationContent,
  NoticeBox,
} from './styled';
import { cheer_guide } from '@/images/etc';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import { useHistory } from 'react-router';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:80/');

const Main = () => {
  const _userList = useSelector(state => state.user.userList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [adminchatArr, setAdminChatArr] = useState([]);
  const [notice, setNotice] = useState(false);

  dispatch(getAllUser());

  useEffect(() => {
    socket.on('kickout-rcv', item => {
      history.push('/');
    });
  }, []);

  useEffect(() => {
    socket.on('admin-msg-rcv', item => {
      setAdminChatArr(item.message);
      setNotice(true);
    });
  }, []);

  const noticeRemove = () => setNotice(false);

  return (
    <MainContainer tableIndex="0">
      <Header />
      <Video />
      <div>
        {_userList.map(
          (char, index) =>
            char[1] != _loginUser['userName'] && (
              <span key={index}>
                <Character
                  character={char[3]}
                  team={char[7]}
                  userName={char[1]}
                  loggin={false}
                  position={[char[5], char[6]]}
                  emoticon={char[4]}
                />
              </span>
            )
        )}
        {_userList.map(
          (char, index) =>
            char[1] === _loginUser['userName'] && (
              <span key={index}>
                <Character
                  character={char[3]}
                  team={char[7]}
                  userName={char[1]}
                  loggin={true}
                />
              </span>
            )
        )}
      </div>
      <ViewPoint />
      <CheerGuide src={cheer_guide} />
      {notice ? (
        <NoticeBox onClick={noticeRemove}>
          {
            <>
              <br />
              {adminchatArr}
            </>
          }
        </NoticeBox>
      ) : null}
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default Main;
