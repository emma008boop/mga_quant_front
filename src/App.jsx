// src/App.jsx
import React from 'react';
import MainLayout from './layout/MainLayout.jsx';
import Home from './screens/home/Home.jsx';

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;