import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'; // 保留默认样式或根据需要修改

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/books">书籍</Link>
          </li>
          <li>
            <Link to="/about">关于我们</Link>
          </li>
          <li>
            <Link to="/contact">联系我们</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
