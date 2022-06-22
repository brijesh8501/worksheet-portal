
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../src/components/home/index';
import Profile from '../src/components/profile/index';
import Assets from '../src/components/assets/index';
import WorksheetList from '../src/components/worksheet/list';
import WorksheetInsert from '../src/components/worksheet/insert';
import WorksheetEdit from '../src/components/worksheet/edit';
import Login from './components/login/login';
import CreateAccount from './components/login/createAccount';
import ForgotPassword from './components/login/forgotPassword';
import ChangePassword from './components/login/changePassword';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/create-account" element={<CreateAccount/>} />
        <Route exact path="/forgot-password" element={<ForgotPassword/>} />
        <Route exact path="/change-password" element={<ChangePassword/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/assets" element={<Assets/>} />
        <Route path="/worksheet/list" element={<WorksheetList/>} />
        <Route path="/worksheet/create" element={<WorksheetInsert/>} />
        <Route path="/worksheet/edit/:id" element={<WorksheetEdit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
