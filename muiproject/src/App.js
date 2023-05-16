

import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages';
import About from './Pages/Abouts';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (<>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/signup" element={<SignUp/>}/>
</Routes>
  </>
  );
}

export default App;
