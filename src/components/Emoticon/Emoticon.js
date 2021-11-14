import React, { useEffect, useState } from 'react';
import {
  EmoticonButton,
  EmoticonContainer,
  ExpandField,
  EmoticonIcon,
} from './styled';
import { emoticon_btn } from '@/images/etc';
import { angry, exclamation, heart, smile } from '@/images/emoticons';
import { useDispatch, useSelector } from 'react-redux';
import { chooseEmogee } from '@/actions/actions';
import socket from '@/utils/socket';

const Emoticon = () => {
  const [expand, setExpand] = useState(false);
  const _loginUser = useSelector(state => state.user.loginUser);

  const onClickExpand = () => {
    if (!expand) {
      dispatch(chooseEmogee(''));
      socket.emit('emogee-snd', {
        name: _loginUser['userName'],
        emogee: '',
      });
    }
    setExpand(!expand);
  };

  const dispatch = useDispatch();

  const chooseAngry = () => {
    dispatch(chooseEmogee('angry'));
    socket.emit('emogee-snd', {
      name: _loginUser['userName'],
      emogee: 'angry',
    });
  };
  const chooseExclamation = () => {
    dispatch(chooseEmogee('exclamation'));
    socket.emit('emogee-snd', {
      name: _loginUser['userName'],
      emogee: 'exclamation',
    });
  };
  const chooseSmile = () => {
    dispatch(chooseEmogee('smile'));
    socket.emit('emogee-snd', {
      name: _loginUser['userName'],
      emogee: 'smile',
    });
  };
  const chooseHeart = () => {
    dispatch(chooseEmogee('heart'));
    socket.emit('emogee-snd', {
      name: _loginUser['userName'],
      emogee: 'heart',
    });
  };

  return (
    <EmoticonContainer>
      {expand ? (
        <ExpandField>
          <EmoticonIcon src={angry} onClick={chooseAngry} />
          <EmoticonIcon src={exclamation} onClick={chooseExclamation} />
          <EmoticonIcon src={smile} onClick={chooseSmile} />
          <EmoticonIcon src={heart} onClick={chooseHeart} />
        </ExpandField>
      ) : null}
      <EmoticonButton src={emoticon_btn} onClick={onClickExpand} />
    </EmoticonContainer>
  );
};

export default Emoticon;
