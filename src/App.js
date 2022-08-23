import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstartedpage from './components/pages/Getstart/Getstartedpage'
import loginpage from './components/pages/Loginpage'
import Signuppage from './components/pages/Sighnuppage'
import Hosppage from './components/pages/Hosppage'
import vistara from './components/Hotels/vistara';
import vydehi from './components/Hotels/vydehi';
import Taramani from './components/Hotels/Taramani';
import senohouse from './components/Hotels/senohouse';
import pepark from './components/Hotels/pepark';
import Mariya from './components/Hotels/Mariya';
import kartav from './components/Hotels/kartav';
import janimansion from './components/Hotels/janimansion';
import kanika from './components/Hotels/kanika';
import FOODPAGE from './components/pages/FOODPAGE'
import kfc from './components/Food/kfc';
import pastha from './components/Food/pastha';
import mixedpastha from './components/Food/mixedpastha';
import pizza from './components/Food/pizza';
import Dosa from './components/Food/Dosa';
import Samosa from './components/Food/Samosa';

function App() {
  return (
   <>
    <Router> 
    

<Switch>

  <Route path='/' exact component=
  {Home}/>
  <Route path='/Getstartedpage' exact component=
  {Getstartedpage}/>
   <Route path='/login' exact component=
  {loginpage}/>
  <Route path='/signup' exact component=
  {Signuppage}/>
   <Route path='/Hospitality' exact component=
  {Hosppage}/>
  <Route path='/vistara' exact component=
  {vistara}/>
   <Route path='/vydehi' exact component=
  {vydehi}/>
   <Route path='/Taramani' exact component=
  {Taramani}/>
   <Route path='/senohouse' exact component=
  {senohouse}/>
   <Route path='/pepark' exact component=
  {pepark}/>
   <Route path='/Mariya' exact component=
  {Mariya}/>
   <Route path='/kartav' exact component=
  {kartav}/>
   <Route path='/kanika' exact component=
  {kanika}/>
   <Route path='/janimansion' exact component=
  {janimansion}/>
<Route path='/FOOD' exact component=
  {FOODPAGE}/>
<Route path='/kfc' exact component=
  {kfc}/>
<Route path='/pastha' exact component=
  {pastha}/>
<Route path='/mixedpastha' exact component=
  {mixedpastha}/>
<Route path='/pizza' exact component=
  {pizza}/>
<Route path='/Dosa' exact component=
  {Dosa}/>
<Route path='/Samosa' exact component=
  {Samosa}/>
 
</Switch>

    </Router>
    
  
   
</>

    
  );
  
}

export default App;
