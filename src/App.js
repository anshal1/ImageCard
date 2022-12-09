import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Card1 from './ImageCard/Card1/Card1';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './ImageCard/Navbar/Navbar';
import Card2 from './ImageCard/Card2/Card2';
import Card3 from './ImageCard/Card3/Card3';

function App() {
  const [Images, setImages] = useState([]);
  const [loading, setloading] = useState(true);
  const FetchImage = async () => {
    let url = "https://shareimage-app.onrender.com/all/image?page=1&limit=3";
    let data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    });
    let res = await data.json();
    if (res.post) {
      setImages(res.post);
      setloading(false)
    } else {
      setloading(false);
    }
  }
  useEffect(() => {
    FetchImage();
  }, [])
  return (
    <>
      {loading ? <div className='loader'>
        <h1>Loading... Please Wait...</h1>
      </div> : <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Card1 IMG={Images ? Images : []} />} />
          <Route path="/Card2" element={<Card2 IMG={Images ? Images : []} />} />
          <Route path='/Card3' element={<Card3 IMG={Images ? Images : []}/>} />
        </Routes>
      </Router>}
    </>
  );
}

export default App;
