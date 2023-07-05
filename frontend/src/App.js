import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Studentprofile from './pages/StudentProfile/studentProfile';
import { QueryClient, QueryClientProvider } from 'react-query';
import AdminRecord from './pages/AdminRecord/adminRecord';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CounsellerChat from './pages/CounsellerChat/counsellerChat';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path='/admin' element={<AdminRecord />} />
          <Route path='/counseller' element={<CounsellerChat />} />
        </Routes>
      </Router>
    </div>
    <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
