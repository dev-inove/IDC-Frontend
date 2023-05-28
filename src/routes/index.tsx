import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default routes;