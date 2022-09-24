import './App.css';
import './Assets/css/Home.css';
import Home from './Components/Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TermsContent from './Components/Home/TermsContent';

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/termscontent" element={<TermsContent/>}/> 
          </Routes>
        </Router>
        <Footer/>
      </div>
    </>
  );
}
export default App;
