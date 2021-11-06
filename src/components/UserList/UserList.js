import React, { useEffect } from 'react';
import {
  UserListContainer,
  Text,
  List,
  UserListHeader,
  TrashCan,
} from './styled';
import { trashcan } from '@/images/etc';
import UserBox from './UserBox';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';

const UserList = () => {
  const _userList = useSelector(state => state.user.userList);
  const user1 = _userList[0];
  const user2 = _userList[1];
  const user3 = _userList[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
    console.log(_userList);
  }, []);
  return (
    <UserListContainer>
      <UserListHeader>
        <Text>UserList</Text>
        <TrashCan src={trashcan} />
      </UserListHeader>
      <List>
        {_userList.map((char, index) => (
          <span key={index}>
            <UserBox userName={char[1]} character={char[3]} team={char[7]} />
          </span>
        ))}
      </List>
    </UserListContainer>
  );
};

export default UserList;
