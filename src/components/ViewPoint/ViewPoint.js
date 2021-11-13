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
          {_viewpoints.map((path, index) => (
            <View path={path} key={index} />
          ))}
        </ViewContainer>
      )}
    </>
  );
};

export default ViewPoint;

const View = ({ path }) => {
  const [mode, setMode] = useState(false);
  const Click = () => setMode(!mode);

  return (
    <>
      <ViewContent onClick={Click}>
        <ViewImage />
        View Point!
      </ViewContent>
      {mode && (
        <ViewMode>
          <ClickAwayListener onClickAway={Click}>
            <ViewWindow>
              <ViewVideo src={require(`${path}`).default} controls />
            </ViewWindow>
          </ClickAwayListener>
        </ViewMode>
      )}
    </>
  );
};
