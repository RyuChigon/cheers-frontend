import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Balloon_me,
  Balloon_general,
  Balloon_a,
  Balloon_b,
  Report_,
} from './styled';
import { report } from '@/images/etc';
import socket from '@/utils/socket';

const Chatballoon = ({ team, userName, message, isuser }) => {
  const _loginUser = useSelector(state => state.user.loginUser);
  const [pageOn, setPageOn] = useState(false);

  useEffect(() => {
    socket.on('report-user-rcv', item => {
      var str = 'name: ' + item.name + ' report: ' + item.report;
      console.log(str);
    });
  }, []);

  const handleChatClick = () => {
    if (pageOn) {
      setPageOn(false);
    } else {
      setPageOn(true);
    }
  };

  const handleReport = () => {
    const msg = 'reported ' + userName;
    alert(msg);
    socket.emit('report-user-snd', {
      name: userName,
    });
    if (pageOn) {
      setPageOn(false);
    }
  };

  if (userName == _loginUser['userName'] && isuser) {
    return (
      <Balloon_general>
        <Balloon_me onClick={handleChatClick}>
          <div>{_loginUser['userName'] + ': ' + message}</div>
        </Balloon_me>
        <div>{pageOn && <Report_ src={report} onClick={handleReport} />}</div>
      </Balloon_general>
    );
  } else if (team == 'a') {
    return (
      <Balloon_general>
        <Balloon_a onClick={handleChatClick}>
          <div>{_loginUser['userName'] + ': ' + message}</div>
        </Balloon_a>
        <div>{pageOn && <Report_ src={report} onClick={handleReport} />}</div>
      </Balloon_general>
    );
  } else if (team == 'b') {
    return (
      <Balloon_general>
        <Balloon_b onClick={handleChatClick}>
          <div>{_loginUser['userName'] + ': ' + message}</div>
        </Balloon_b>
        <div>{pageOn && <Report_ src={report} onClick={handleReport} />}</div>
      </Balloon_general>
    );
  }
};

export default Chatballoon;
