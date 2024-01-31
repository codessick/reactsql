import logo from './logo.svg';
import './App.css';
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preview from './Preview';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="app__body">
        <Routes>
          <Route path="/preview" element={<Preview />} />
          <Route path="/" element={<WebcamCapture />} />
        </Routes>
      </div>
    </Router>
  </div>
        
  );
}
export default App;
