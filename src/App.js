import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyles';
import { theme } from './components/ThemeProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Login from './pages/Login/Login';
import CallBack from './pages/Callback/Callback';
import MyCart from './pages/MyCart/MyCart';
import Payment from './pages/Payment/Payment';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />}>
            <Route path="error/:email_auth" element={<Login />} />
          </Route>
          <Route path="login/callback/*" element={<CallBack />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="payment" element={<Payment/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
