import React from 'react';
import ComicProvider from './context/ComicContext';
import ThemeProvider from './context/ThemeContext';
import Home from './Pages/Home';

function App() {
  return (
    <ThemeProvider>
      <ComicProvider>
        <Home/>
      </ComicProvider>
    </ThemeProvider>
  );
}

export default App;
