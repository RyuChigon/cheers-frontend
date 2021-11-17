import React, { useEffect, useState } from 'react';
import {
  EmoticonButton,
  EmoticonContainer,
  ExpandField,
  EmoticonIcon,
} from './styled';
import { emoticon_btn } from '@/images/etc';
import { angry, exclamation, heart, smile } from '@/images/emoticons';
import { useSelector } from 'react-redux';
import socket from '@/utils/socket';

const Emoticon = () => {
  const [expand, setExpand] = useState(false);
  const _loginUser = useSelector(state => state.user.loginUser);

  const onClickExpand = () => {
    setExpand(!expand);
  };

  const chooseEmoticon = emo => {
    socket.emit('emogee-snd', {
      name: _loginUser['userName'],
      emogee: emo,
    });
  };

  return (
    <EmoticonContainer>
      {expand ? (
        <ExpandField>
          <EmoticonIcon src={angry} onClick={() => chooseEmoticon('angry')} />
          <EmoticonIcon
            src={exclamation}
            onClick={() => chooseEmoticon('exclamation')}
          />
          <EmoticonIcon src={smile} onClick={() => chooseEmoticon('smile')} />
          <EmoticonIcon src={heart} onClick={() => chooseEmoticon('heart')} />
        </ExpandField>
      ) : null}
      <EmoticonButton src={emoticon_btn} onClick={onClickExpand} />
    </EmoticonContainer>
  );
};

export default Emoticon;
