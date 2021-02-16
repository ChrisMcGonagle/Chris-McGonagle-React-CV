import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Sidebar from './components/sidebar/Sidebar';
import data from './data';
const App = () => {
  const matches = useMediaQuery("(max-width:600px)");
  console.log(data)
  return (
    <div className={matches ? 'main_container_full' : 'main_container'}>
      <Sidebar data={data}/>
      <Body data={data} />
    </div>
  )
}

export default App
