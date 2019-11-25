import React from 'react';
import Reader from './components/Reader/Reader';
import publications from './components/publications.json';

const App = () => (
  <>
    <Reader items={publications} />
  </>
);

export default App;
