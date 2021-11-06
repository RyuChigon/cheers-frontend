import React, { Component } from 'react';
import { useHistory } from 'react-router';
import { UserListContainer, Text, List } from './styled';

const UserList = () => {
  return (
    <UserListContainer>
      <Text>UserList</Text>
      <List />
    </UserListContainer>
  );
};

export default UserList;
