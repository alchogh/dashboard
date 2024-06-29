import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../pages/Auth/Signin/Signin';
import Signup from '../pages/Auth/Signup/Signup';
import Main from '../pages/Main/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
