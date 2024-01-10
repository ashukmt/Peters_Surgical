import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SideSec from './components/SideSec';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const[category,setCategory] = useState("Category-1");
  return (
    <div className="App">
     
      {/* <Home/> */}
      <Flex>
      <SideSec setCategory={setCategory} />
      <Home category={category} />
      </Flex>
    </div>
  );
}

export default App;
