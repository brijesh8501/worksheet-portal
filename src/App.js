
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

  const myState = useSelector( (state) => state.myState);
  const { portalSetting } = myState;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact strict path="/" element={<Home/>} />
        <Route exact strict path="/login/" element={<Login/>} />
        <Route exact strict path="/create-account/" element={<CreateAccount/>} />
        <Route exact strict path="/forgot-password/" element={<ForgotPassword/>} />
        <Route exact strict path="/change-password/" element={<ChangePassword/>} />
        <Route exact strict path="/profile/" element={<Profile/>} />
        {
          (portalSetting.worksheet)&&
          <>
            <Route exact strict path="/worksheet/list/" element={<WorksheetList/>} />
            <Route exact strict path="/worksheet/create/" element={<WorksheetInsert/>} />
            <Route exact strict path="/worksheet/edit/:id/" element={<WorksheetEdit/>} />
          </>
        } 
        {
          (portalSetting.assets)&&
          <Route exact strict path="/assets/" element={<Assets/>} />
        }
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
