const UserListFilter = ({ onFilterChange, filter }) => {
  return (
    <>
      <h1>Users:</h1>
      <h3>Filter users:</h3>
      Filter: <input value={filter} onChange={onFilterChange} />
    </>
  );
};

export default UserListFilter;
