import { Box  } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <LandingPage />
    </Box>
  );
}

export default App;
