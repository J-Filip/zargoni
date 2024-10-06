import { useState } from 'react';
import UserList from './UserList';
import UserListFilter from './UserListFilter';
import CreateUserForm from './CreateUserForm';

const UserListContainer = ({ users }) => {
  const [inputFilter, setInputFilter] = useState('');
  const [userList, setUserList] = useState(users);

  const handleFilter = (values) => {
    const input = values.target.value.toLowerCase();
    setInputFilter(input);
    setUserList(users.filter((user) => user.name.toLowerCase().includes(input) || input === ''));
  };

  const handleCreateUser = (values) => {
    event.preventDefault();
    const addedUser = {
      ...values,
      id: userList.length + 1,
    };
    const userNameExist = userList.some((x) => {
      return JSON.stringify(x.name) === JSON.stringify(addedUser.name);
    });

    if (userNameExist) {
      alert(`${addedUser.name} already exists!`);
      return;
    }
    setUserList(userList.concat(addedUser));
  };

  return (
    <>
      <UserListFilter filter={inputFilter} onFilterChange={handleFilter} />
      <UserList list={userList} />
      <CreateUserForm onCreateUser={handleCreateUser} />
    </>
  );
};

export default UserListContainer;
