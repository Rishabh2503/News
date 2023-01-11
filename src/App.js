import Home from "./page/Home";
import Navbar from "./component/Navbar"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import New from "./page/New";
import News2 from "./page/News2";
import News3 from "./page/News3";
import News4 from "./page/News4";
import News5 from "./page/News5";
function App() {
  return (
    <Router >
      <Navbar />
   <div>
    <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/New' element={< New />}></Route>
                 <Route exact path='/News2' element={< News2 />}></Route>
                 <Route exact path='/News3' element={< News3 />}></Route>
                 <Route exact path='/News4' element={< News4 />}></Route>
                 <Route exact path='/News5' element={< News5 />}></Route>
          </Routes>
   </div> 
   </Router>
  );
}

export default App;
