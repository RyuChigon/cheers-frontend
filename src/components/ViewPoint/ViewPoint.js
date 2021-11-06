import React, { useState } from 'react';
import {
  ViewPointButton,
  ViewContainer,
  ViewContent,
  ViewImage,
} from './styled';

const ViewPoint = () => {
  const [expand, setExpand] = useState(false);
  const handleButton = () => setExpand(!expand);

  return (
    <>
      <ViewPointButton onClick={handleButton} expand={expand}>
        View Point
      </ViewPointButton>
      {expand && (
        <ViewContainer>
          <ViewContent>
            <ViewImage />
            Sihwan Noh hitted a homerun!!
          </ViewContent>
        </ViewContainer>
      )}
    </>
  );
};

export default ViewPoint;
