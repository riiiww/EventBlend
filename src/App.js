import Header from "../src/page/header";
import Contents from "../src/page/Contents";
import Signup from "../src/page/Signup";
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
  <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Contents />} />
          <Route path = 'signup' element={<Signup />} />
        </Route>
  </Routes>
  );
}
export default App;