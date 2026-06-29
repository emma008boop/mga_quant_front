import React, { useState } from 'react';
import MainLayout from './layout/MainLayout.jsx';
import Home from './screens/home/Home.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleGlobalSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <MainLayout onSearchSubmit={handleGlobalSearch}>
      <Home externalSearchTerm={searchTerm} />
    </MainLayout>
  );
}

export default App;