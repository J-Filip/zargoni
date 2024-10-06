import Term from '@/components/Terms/Term';
import { useCallback, useState } from 'react';

const TermList = ({ terms }) => {
  console.log(terms);

  const [termList, setTermList] = useState(terms);
  const [selectedTerm, setSelectedTerm] = useState(0);
  const [termOfTheDay, setTermOfTheDay] = useState(termList[0].definition);
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('a new comment...');
  const [showAll, setShowAll] = useState(true);

  const getTotalVotesCount = () => {
    return termList.reduce((sum, term) => sum + term.votes, 0);
  };

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

  const handleFinish = useCallback(() => {
    event.preventDefault();
    console.log(comment);
    const newComment = {
      id: commentList.length + 1,
      content: comment,
      important: Math.random() < 0.5,
    };
    setCommentList(commentList.concat(newComment));
    setComment('');
  }, [comment, commentList, setCommentList]);

  const commentsToShow = showAll ? commentList : commentList.filter((comment) => comment.important === true);

  return (
    <>
      <Term term={termList[selectedTerm]} />

      <h4> Votes: {termList[selectedTerm].votes} </h4>
      <button onClick={addVote}>Vote for me</button>
      <button onClick={getRandomTerm}>Randomize</button>

      <h5>Total votes casted: {getTotalVotesCount()}</h5>

      <h3>Term of the day:</h3>
      <h2>{termOfTheDay}</h2>

      <h3>Leave a comment:</h3>
      <form onSubmit={handleFinish}>
        <input value={comment} onChange={(input) => setComment(input.target.value)} />
        <button type="submit">Add comment</button>
      </form>

      <p>
        {commentsToShow.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </p>

      <div>
        <button onClick={() => setShowAll(!showAll)}>Show: {showAll ? 'all' : 'important'}</button>
      </div>
    </>
  );
};

export default TermList;
