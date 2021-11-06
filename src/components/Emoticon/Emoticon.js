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

const Emoticon = () => {
  const [expand, setExpand] = useState(false);

  const onClickExpand = () => {
    if (!expand) {
      dispatch(chooseEmogee(''));
    }
    setExpand(!expand);
  };

  const dispatch = useDispatch();

  const chooseAngry = () => {
    dispatch(chooseEmogee('angry'));
  };
  const chooseExclamation = () => {
    dispatch(chooseEmogee('exclamation'));
  };
  const chooseSmile = () => {
    dispatch(chooseEmogee('smile'));
  };
  const chooseHeart = () => {
    dispatch(chooseEmogee('heart'));
  };

  return (
    <EmoticonContainer>
      {expand ? (
        <ExpandField>
          <EmoticonIcon src={angry} onClick={chooseAngry} />
          <EmoticonIcon src={exclamation} onClick={chooseExclamation} />
          <EmoticonIcon src={smile} onCLick={chooseSmile} />
          <EmoticonIcon src={heart} onClick={chooseHeart} />
        </ExpandField>
      ) : null}
      <EmoticonButton src={emoticon_btn} onClick={onClickExpand} />
    </EmoticonContainer>
  );
};

export default Emoticon;
