const UserList = ({ list }) => {
  console.log(list);

  return (
    <>
      {list.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </>
  );
};

export default UserList;
