import React, { useState } from 'react';
import MainLayout from './layout/MainLayout.jsx';
import Accounts from './screens/accounts/Accounts.jsx';

function App() {
  {/*We save the user's text*/}
  const [searchTerm, setSearchTerm] = useState('');

  const handleGlobalSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <MainLayout onSearchSubmit={handleGlobalSearch}>
      <Accounts externalSearchTerm={searchTerm} />
    </MainLayout>
  );
}

export default App;