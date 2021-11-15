import React, { useState } from 'react';
import {
  ViewPointButton,
  ViewContainer,
  ViewContent,
  ViewImage,
  ViewMode,
  ViewWindow,
  ViewVideo,
} from './styled';
import { ClickAwayListener } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getViewpoints } from '@/actions/actions';

const ViewPoint = () => {
  const [expand, setExpand] = useState(false);
  const _viewpoints = useSelector(state => state.user.viewpoints);
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(getViewpoints());
    setExpand(!expand);
    console.log(_viewpoints);
  };

  return (
    <>
      <ViewPointButton onClick={handleButton} expand={expand}>
        View Point
      </ViewPointButton>
      {expand && (
        <ViewContainer>
          {_viewpoints.map((num, index) => (
            <View num={num} key={index} />
          ))}
        </ViewContainer>
      )}
    </>
  );
};

export default ViewPoint;

const View = ({ num }) => {
  const [mode, setMode] = useState(false);
  const thumbnailPath = `./archive/thumbnail${num}_1.jpg`;
  const videoPath = `./archive/archived${num}.mp4`;
  const Click = () => setMode(!mode);

  return (
    <>
      <ViewContent onClick={Click}>
        <ViewImage src={require(`${thumbnailPath}`).default} />
        View Point!
      </ViewContent>
      {mode && (
        <ViewMode>
          <ClickAwayListener onClickAway={Click}>
            <ViewWindow>
              <ViewVideo src={require(`${videoPath}`).default} controls />
            </ViewWindow>
          </ClickAwayListener>
        </ViewMode>
      )}
    </>
  );
};
