import TermList from '@/components/terms/TermsList';
import { terms } from '@/components/terms/terms';
import { users } from '@/components/users/users';
import React from 'react';
import UserListContainer from '../components/users/UserListContainer';

const Content = () => {
  return (
    <React.Fragment>
      <TermList terms={terms} />
      <UserListContainer users={users} />
    </React.Fragment>
  );
};

export default Content;
