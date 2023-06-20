import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import ResetPassword from '../pages/Login/ResetPassword/index';
import Home from '../pages/Home';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/resetPassword' element={<ResetPassword />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default routes;