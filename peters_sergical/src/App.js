import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SideSec from './components/SideSec';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
     
      {/* <Home/> */}
      <Flex>
      <SideSec/>
      <Home/>
      </Flex>
    </div>
  );
}

export default App;
