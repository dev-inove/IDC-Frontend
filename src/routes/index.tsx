import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default routes;