import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Balloon_me, Balloon_a, Balloon_b } from './styled';

const Chatballoon = ({ team, userName, message }) => {
  const _loginUser = useSelector(state => state.user.loginUser);

  if (userName == _loginUser['userName']) {
    return (
      <Balloon_me>
        <div>{_loginUser['userName'] + ': ' + message}</div>
      </Balloon_me>
    );
  } else if (team == 'a') {
    return (
      <Balloon_a>
        <div>{userName + ': ' + message}</div>
      </Balloon_a>
    );
  } else if (team == 'b') {
    return (
      <Balloon_b>
        <div>{userName + ': ' + message}</div>
      </Balloon_b>
    );
  }
};

export default Chatballoon;
