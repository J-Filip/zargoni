import { useCallback, useState } from 'react';
import { terms } from '@/terms';

const TermList = () => {
  const [termList, setTermList] = useState(terms);
  const [selectedTerm, setSelectedTerm] = useState(0);
  const [termOfTheDay, setTermOfTheDay] = useState(termList[0].definition);

  const getRandomTerm = () => {
    setSelectedTerm(Math.floor(Math.random() * termList.length));
  };

  const addVote = useCallback(() => {
    const newList = termList.map((term) => {
      if (term === termList[selectedTerm]) {
        return {
          ...term,
          votes: term.votes + 1,
        };
      } else {
        return term;
      }
    });
    setTermList(newList);
    setTermOfTheDay(termList.sort((a, b) => b.votes - a.votes)[0].definition);
  }, [termList, setTermList, selectedTerm, setTermOfTheDay]);

  return (
    <>
      <h3>{termList[selectedTerm].definition}</h3>

      <h4> Votes: {termList[selectedTerm].votes} </h4>
      <button onClick={addVote}>Vote for me</button>
      <button onClick={getRandomTerm}>Randomize</button>

      <h3>Term of the day:</h3>
      <h2>{termOfTheDay}</h2>
    </>
  );
};

export default TermList;
