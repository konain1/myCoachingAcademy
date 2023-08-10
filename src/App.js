import './App.scss';
import English from './Course/English';
import Navbar from './Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/english' element={<English/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
