import { useState } from 'react';

const CreateUserForm = ({ onCreateUser }) => {
  const [newUser, setNewUser] = useState('');
  const [newUserNumber, setNewUserNumber] = useState('');

  const handleFinish = () => {
    onCreateUser({ name: newUser, number: newUserNumber });
    setNewUser('');
    setNewUserNumber('');
  };

  return (
    <>
      <form onSubmit={handleFinish}>
        Name:
        <input value={newUser} onChange={(input) => setNewUser(input.target.value)} />
        Number:
        <input value={newUserNumber} onChange={(input) => setNewUserNumber(input.target.value)} />
        <button>Add user</button>
      </form>
    </>
  );
};

export default CreateUserForm;
