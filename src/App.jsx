import { useEffect, useRef, useState } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import TermList from './layout/TermList';

const App = () => {
  const myRef = useRef(document);
  const terms = [
    { name: 'žvajznut', type: 'glagol' },
    { name: 'zdrmat', type: 'glagol' },
    { name: 'zika', type: 'imenica' },
  ];
  const [totalClicks, setTotalClicks] = useState(0);
  const [password, setPassword] = useState([]);

  const handleClick = (event) => {
    setTotalClicks(totalClicks + 1);
  };

  useEffect(() => {
    myRef.current.addEventListener('click', handleClick);
    return () => {
      myRef.current.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return (
    <>
      {totalClicks ? <h4>Broj klikova: {totalClicks}</h4> : 'Klikne me gdje god zelis...'}
      {/* --- Header --- */}
      <Header />
      {/* --- Content --- */}
      <TermList terms={terms} />
      {/* --- Footer ---*/}
      <Footer />
    </>
  );
};

export default App;
