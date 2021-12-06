import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Character from '@/components/Character';
import {
  MainContainer,
  MainContainer2,
  CheerGuide,
  HanhwaLogo,
  SamsungLogo,
} from './styled';
import { cheer_guide } from '@/images/etc';
import { hanwha_logo, samsung_logo } from '@/images/logos';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllUser,
  initViewpoint,
  setCheerScore,
  setCheerScore2,
  setAdmin,
} from '@/actions/actions';
import { useHistory } from 'react-router';
import socket from '@/utils/socket';

const Main = () => {
  const _userList = useSelector(state => state.user.userList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const loginuser_name = _loginUser['userName'];
  const dispatch = useDispatch();
  const history = useHistory();
  const _is_admin = useSelector(state => state.user.isadmin);
  const [minigametimer, setMinigameTimer] = useState(5);
  var badUserList = [];

  dispatch(getAllUser());

  window.addEventListener('unload', function (e) {
    dispatch(setAdmin(false));
    badUserList.push(loginuser_name);
    socket.emit('logout-snd', {
      name: _loginUser['userName'],
    });
  });

  useEffect(() => {
    dispatch(setCheerScore(0, 0));
    dispatch(setCheerScore2(0, 0));
    dispatch(initViewpoint());
    socket.on('kickout-rcv', item => {
      if (item.badUserList.includes(_loginUser['userName'])) {
        if (item.returntohome == false) {
          history.push('/');
          alert('administrator kicked you out!');
        } else {
          history.push('/');
        }
      }
    });
    // socket.on('logout-rcv', item => {
    //   if (item.name == _loginUser['userName']) {
    //     history.push('/');
    //   }
    // });
  }, []);

  const minigameStartTimer = () => {
    socket.on('minigame1-start-rcv', item => {
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
    socket.on('minigame1-start-rcv', item => {
      history.push('/minigame1');
    });
    socket.on('minigame2-start-rcv', item => {
      history.push('/minigame2');
    });
  }, []);

  return (
    <MainContainer>
      <Header />
      <MainContainer2>
        <HanhwaLogo src={hanwha_logo} />
        <SamsungLogo src={samsung_logo} />
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
        <CheerGuide src={cheer_guide} />
      </MainContainer2>
    </MainContainer>
  );
};

export default Main;
