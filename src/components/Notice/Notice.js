import React, { useState, useEffect } from 'react';
import { NoticeBox } from './styled';
import socket from '@/utils/socket';

const Notice = () => {
  const [adminchatArr, setAdminChatArr] = useState([]);
  const [timer, settimer] = useState(0);

  useEffect(() => {
    socket.on('admin-msg-rcv', item => {
      setAdminChatArr(item.message);
      settimer(timer => timer + 1);
      console.log('timer increase to ' + timer);
      setTimeout(() => {
        settimer(timer => timer - 1);
        console.log('timer decrease to ' + timer);
      }, 4000);
    });
  }, []);

  return (
    <>
      {timer > 0 ? (
        <NoticeBox>
          {
            <>
              <br />
              {adminchatArr}
            </>
          }
        </NoticeBox>
      ) : null}
    </>
  );
};

export default Notice;
