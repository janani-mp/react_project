// import logo from './logo.svg';
// import './App.css';
// import IMS from './Components/IMS';
// import Footer from './Components/Footer.jsx';
// import Header from './Components/Header.jsx';
// import About from './Components/About.jsx';
// import LoginSignup from './Components/LoginSignup.jsx';

// function App() {
//   return (
//     <div>
//       <LoginSignup/>
//       <IMS/>
//       <Header/>
//       <Footer/>
//       <About/>
//     </div>
//   );
// }

//export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IMS from './Components/IMS';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import LoginSignup from './Components/LoginSignup.jsx';

function App() {
  return (
    <Router>
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<LoginSignup/>} />
        <Route path="/Ims" element={<IMS/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;

