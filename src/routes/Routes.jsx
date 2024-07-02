import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
import { Header } from '../components/Layout/Header';
import AdicionarVideo from '../pages/AdicionarVideo';
import NotFound from '../pages/Erro';
import Home from '../pages/Home';
  
const AppRoutes = () => {
return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/novo-video' element={ <AdicionarVideo /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    </Router>
);
}
  
export default AppRoutes;