
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Teacher from './components/Teacher/Teacher';
import Cource from './components/Course/Cource';

function App() {
  return (
      

    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path = '/'>
<Home></Home>
      </Route>
      <Route path = '/home'>
<Home></Home>
      </Route>
      <Route path = '/aboutUs'>
<AboutUs></AboutUs>
      </Route>
      <Route path = '/teacher'>
<Teacher></Teacher>
      </Route>
      <Route path = '/course'>
<Cource></Cource>
      </Route>
      <Route path = '*'>
<NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
