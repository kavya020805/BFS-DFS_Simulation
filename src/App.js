import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BFS from './BFS';
import DFS from './DFS';
// import './MainPage.css';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Graph Traversal Simulations</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/bfs">
          <button style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Breadth First Simulation</button>
        </Link>
        <Link to="/dfs">
          <button style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Depth First Simulation</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bfs" element={<BFS />} />
        <Route path="/dfs" element={<DFS />} />
      </Routes>
    </Router>
  );
}

export default App;
