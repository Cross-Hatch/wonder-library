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
import MyCart from './pages/MyCart/MyCart';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="mycart" element={<MyCart />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
