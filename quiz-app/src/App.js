import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div style={styles.app}>
      <h1>React Quiz App</h1>
      <Quiz />
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default App;
