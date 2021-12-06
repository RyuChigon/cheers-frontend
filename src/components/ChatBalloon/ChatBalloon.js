import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Balloon_me,
  Balloon_general,
  Balloon_a,
  Balloon_b,
  Report_,
  ReportLetter,
  ReportContainer,
} from './styled';
import { report } from '@/images/etc';
import NoticePopupReport from '@/components/NoticePopupReport';
import socket from '@/utils/socket';

const Chatballoon = ({ team, userName, message, isuser }) => {
  const _loginUser = useSelector(state => state.user.loginUser);
  const [pageOn, setPageOn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    socket.on('report-user-rcv', item => {
      var str = 'name: ' + item.name + ' report: ' + item.report;
      console.log(str);
    });
  }, []);

  const handleChatClick = () => {
    if (pageOn) {
      setPageOn(false);
    } else {
      setPageOn(true);
    }
  };

  const handleReport = () => {
    openModal();
  };

  if (userName == _loginUser['userName'] && isuser) {
    return (
      <Balloon_general>
        {modalVisible && (
          <NoticePopupReport
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            userName={userName}
          >
            <div>Are you planning to report the following user?</div>
            <div>{userName}</div>
          </NoticePopupReport>
        )}
        <Balloon_me onClick={handleChatClick}>
          <div>{userName + ': ' + message}</div>
        </Balloon_me>
        <div>
          {pageOn && (
            <ReportContainer>
              <div>
                <Report_ src={report} onClick={handleReport} />
              </div>
              <ReportLetter onClick={handleReport}>report!!</ReportLetter>
            </ReportContainer>
          )}
        </div>
      </Balloon_general>
    );
  } else if (team == 'a') {
    return (
      <Balloon_general>
        {modalVisible && (
          <NoticePopupReport
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            userName={userName}
          >
            <div>Are you planning to report the following user?</div>
            <div>{userName}</div>
          </NoticePopupReport>
        )}
        <Balloon_a onClick={handleChatClick}>
          <div>{userName + ': ' + message}</div>
        </Balloon_a>
        <div>
          {pageOn && (
            <ReportContainer>
              <div>
                <Report_ src={report} onClick={handleReport} />
              </div>
              <ReportLetter onClick={handleReport}>report!!</ReportLetter>
            </ReportContainer>
          )}
        </div>
      </Balloon_general>
    );
  } else if (team == 'b') {
    return (
      <Balloon_general>
        {modalVisible && (
          <NoticePopupReport
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            userName={userName}
          >
            <div>Are you planning to report the following user?</div>
            <div>{userName}</div>
          </NoticePopupReport>
        )}
        <Balloon_b onClick={handleChatClick}>
          <div>{userName + ': ' + message}</div>
        </Balloon_b>
        <div>
          {pageOn && (
            <ReportContainer>
              <div>
                <Report_ src={report} onClick={handleReport} />
              </div>
              <ReportLetter onClick={handleReport}>report!!</ReportLetter>
            </ReportContainer>
          )}
        </div>
      </Balloon_general>
    );
  }
};

export default Chatballoon;
