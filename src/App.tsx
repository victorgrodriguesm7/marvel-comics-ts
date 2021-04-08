import React from 'react';
import ComicProvider from './context/ComicContext';
import ThemeProvider from './context/ThemeContext';
import Home from './Pages/Home';

function App() {
  return (
    <ComicProvider>
      <ThemeProvider>
        <Home/>
      </ThemeProvider>
    </ComicProvider>
  );
}

export default App;
