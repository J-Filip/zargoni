const TermList = ({ terms, names }) => {
  return (
    <>
      <h3>Popis žargona:</h3>
      {terms.map((term) => {
        return (
          <div>
            <li>
              {term.name} - {term.type}
            </li>
          </div>
        );
      })}
    </>
  );
};

export default TermList;
