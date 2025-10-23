import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/themeToggle';
import Time from './components/Time';
import UserList from './components/UserList';

function App() {
  return (
    <ThemeProvider>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>TP React - Hooks Essentiels</h1>
        <ThemeToggle />   {/* Theme toggle using enoncer code */}
        <Time />          {/* Time component */}
        <UserList />      {/* API user list */}
      </div>
    </ThemeProvider>
  );
}

export default App;
