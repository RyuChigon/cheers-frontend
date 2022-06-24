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
  };

  return (
    <>
      <ViewPointButton onClick={handleButton} expand={expand}>
        View Point
      </ViewPointButton>
      {expand && (
        <ClickAwayListener onClickAway={handleButton}>
          <ViewContainer>
            {_viewpoints &&
              _viewpoints.map((point, index) => (
                <View point={point} key={index} />
              ))}
          </ViewContainer>
        </ClickAwayListener>
      )}
    </>
  );
};

export default ViewPoint;

const View = ({ point }) => {
  const [mode, setMode] = useState(false);
  const thumbnailPath = `./archive/thumbnail${point.num}_1.jpg`;
  const videoPath = `./archive/archived${point.num}.mp4`;
  const time = `${point.hour}:${point.min}:${point.sec}`;
  const Click = () => setMode(!mode);

  return (
    <>
      <ViewContent onClick={Click}>
        <ViewImage src={require(`${thumbnailPath}`).default} />
        {time}
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
