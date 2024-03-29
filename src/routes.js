import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Filme from './pages/Filme/Filme.js'
import Header from './components/Header/Header.js'
import Error from './pages/Error/Error.js';

function RoutersApp()
{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Filme/>} />
                <Route path="*" element={ <Error/>} />
            </Routes>
        </BrowserRouter>
        )
}

export default RoutersApp;