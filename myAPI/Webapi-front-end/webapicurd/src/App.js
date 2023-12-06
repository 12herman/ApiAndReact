import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
 <Route path='/' Component={Create}/>
 <Route path='/read' Component={Read}/>
 <Route path='/update' Component={Update}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
