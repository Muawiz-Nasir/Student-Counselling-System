import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat/chat';
import Services from './pages/Services/services';
import Contact from './pages/Contact/contact';
import Profile from './pages/Profile/profile';
import About from './pages/About/about';
import Login from './pages/Login/login';
import Logintype from './pages/Logintype/logintype';
import Signup from './pages/Signup/signup';
import Home from './pages/Home/Home';
import Studentprofile from './pages/Student Profile/studentProfile';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/services' element={<Services />} />
          <Route path='/studentProfile' element={<Studentprofile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logintype' element={<Logintype />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
