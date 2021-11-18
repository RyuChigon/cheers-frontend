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
import {
  getAllUser,
  initViewpoint,
  setCheerScore,
  setCheerScore2,
} from '@/actions/actions';
import { useHistory } from 'react-router';
import socket from '@/utils/socket';

const Main = () => {
  const _userList = useSelector(state => state.user.userList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const _is_admin = useSelector(state => state.user.isadmin);
  const [adminchatArr, setAdminChatArr] = useState([]);
  const [timer, settimer] = useState(0);
  const [minigametimer, setMinigameTimer] = useState(5);

  dispatch(getAllUser());

  useEffect(() => {
    dispatch(setCheerScore(0, 0));
    dispatch(setCheerScore2(0, 0));
    dispatch(initViewpoint());
    console.log('is admin? :' + _is_admin);
    socket.on('kickout-rcv', item => {
      if (_loginUser['userName'] in item.badUserList) {
        history.push('/');
        alert('administrator kicked you out!');
      }
    });
  }, []);

  const minigameStartTimer = () => {
    socket.on('minigame1-start-rcv', item => {
      // setMinigameTimer(5);
      console.log('minigametimer increase to ' + minigametimer);
      setTimeout(() => {
        setMinigameTimer(timer => timer - 1);
        console.log('minigametimer decrease to ' + minigametimer);
      }, 1000);
      if (minigametimer == 0) {
        // history.push('/minigame1');
      }
    });
  };

  useEffect(() => {
    socket.on('admin-msg-rcv', item => {
      setAdminChatArr(item.message);
      settimer(timer => timer + 1);
      console.log('timer increase to ' + timer);
      setTimeout(() => {
        settimer(timer => timer - 1);
        console.log('timer decrease to ' + timer);
      }, 4000);
    });
    socket.on('minigame1-start-rcv', item => {
      history.push('/minigame1');
    });
    socket.on('minigame2-start-rcv', item => {
      history.push('/minigame2');
    });
  }, []);

  return (
    <MainContainer tableIndex="0">
      <Header />
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
      <Video />
      <CheerGuide src={cheer_guide} />
      {timer > 0 ? (
        <NoticeBox>
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
