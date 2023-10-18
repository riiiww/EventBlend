import Header from "../src/page/header";
import Contents from "../src/page/Contents";
import Signup from "../src/page/Signup";
import Signin from "../src/page/Signin";
import Events from "../src/page/Events";
import CreateEvent from "../src/page/CreateEvent"
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
  <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Contents />} />
          <Route path = 'signup' element={<Signup />} />
          <Route path = 'signin' element={<Signin />} />
          <Route path = 'events' element={<Events />} />
          <Route path = 'createEvent' element={<CreateEvent />} />
        </Route>
  </Routes>
  );
}
export default App;