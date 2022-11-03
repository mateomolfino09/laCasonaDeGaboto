import React, { useEffect }  from 'react';
import styles from './style';
import { Route, Routes, Link  } from 'react-router-dom';
import './App.css';
import { Home, AboutsUs, Admision, Prices, Rules, Services} from './pages/index';
import { Navbar, Footer } from './components/index';


function App() {
  useEffect(() => {

  }, [])

  return (
    
    <div className='overflow-hidden'>
      <div className={`w-full fixed z-30 bg-black/70  ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/admision' element={<Admision />} />
        <Route exact path='/sobre' element={<AboutsUs />} />
        <Route exact path='/precios' element={<Prices />} />
        {/* <Route exact path='/reglas' element={<Rules />} /> */}
        <Route exact path='/servicios' element={<Services />} />
      </Routes>
    <Footer />
    </div>
  )
  
}

export default App;
