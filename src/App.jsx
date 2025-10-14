import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Terminal from './pages/Terminal';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
