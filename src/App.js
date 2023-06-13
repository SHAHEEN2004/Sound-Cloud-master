import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
// import Caraousel from './components/Carousel';
import { useEffect } from 'react';
import { allData } from './reducer';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './pages/Video';

function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(allData())
  },[])
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/video/:id" element={<Video/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
