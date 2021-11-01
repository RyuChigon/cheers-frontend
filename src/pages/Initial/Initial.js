import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { InitialContainer, Logo, JoinButton, InputPasscode } from './styled';
import CheersLogo from '@/images/logos/Cheers_logo.svg';

const Initial = () => {
  const [adminAccess, setAdminAccess] = useState(false);
  const [passcode, setPasscode] = useState('');

  const history = useHistory();
  const join = () => history.push('/game');
  const tryToAccess = () => setAdminAccess(true);
  const handlePasscode = e => setPasscode(e.target.value);
  const keyPress = e => {
    if (e.key === 'Enter') access();
  };
  const access = () => {
    if (passcode === 'hello') history.push('/game');
    else {
      alert('Passcode is incorrect!');
      setAdminAccess(false);
    }
  };

  return (
    <InitialContainer>
      <Logo src={CheersLogo} />
      {adminAccess ? (
        <>
          <InputPasscode
            type="password"
            placeholder="passcode"
            onChange={handlePasscode}
            onKeyPress={keyPress}
          />
          <JoinButton admin onClick={access}>
            join as admin
          </JoinButton>
        </>
      ) : (
        <>
          <JoinButton onClick={join}>join</JoinButton>
          <JoinButton admin onClick={tryToAccess}>
            join as admin
          </JoinButton>
        </>
      )}
    </InitialContainer>
  );
};

export default Initial;
