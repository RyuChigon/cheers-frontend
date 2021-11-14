import React, { useEffect, useState } from 'react';
import {
  UserListContainer,
  Text,
  List,
  UserListHeader,
  TrashCan,
} from './styled';
import { ImageList, ImageListItem } from '@material-ui/core';
import { trashcan } from '@/images/etc';
import UserBox from './UserBox';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import socket from '@/utils/socket';
import { FormatAlignJustify } from '@material-ui/icons';

socket.emit('init', { name: 'huikyeong' });

const UserList = () => {
  const _userList = useSelector(state => state.user.userList);
  const dispatch = useDispatch();
  const [badUserList, setBadUserList] = useState([]);
  const addBadUser = badUserName => {
    setBadUserList(badUserList.concat(badUserName));
  };
  const deleteBadUser = badUserName => {
    setBadUserList(
      badUserList.filter(badUserList => badUserList != badUserName)
    );
  };

  const kickOut = () => {
    socket.emit('kickout-snd', { badUserList });
  };

  useEffect(() => {
    dispatch(getAllUser());
    console.log(_userList);
  }, []);
  return (
    <UserListContainer>
      <UserListHeader>
        <Text>UserList</Text>
        <TrashCan src={trashcan} onClick={kickOut} />
      </UserListHeader>
      <List>
        <ImageList rowHeight={60} cols={2} className={'imagelist'}>
          {_userList.map((char, index) => (
            <ImageListItem key={char[1]}>
              <UserBox
                userName={char[1]}
                character={char[3]}
                team={char[7]}
                report={char[8]}
                add={addBadUser}
                del={deleteBadUser}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </List>
    </UserListContainer>
  );
};

export default UserList;
