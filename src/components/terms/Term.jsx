import React from 'react';

const Term = ({ term }) => {
  return (
    <React.Fragment>
      <h3>{term.definition}</h3>
      {term.examples.map((example) => (
        <li key={example.id}>{example.name}</li>
      ))}
    </React.Fragment>
  );
};

export default Term;
