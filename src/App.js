import Header from "../src/page/header";
import Contents from "../src/page/Contents";
import Signup from "../src/page/Signup";
import Signin from "../src/page/Signin";
import Events from "../src/page/Events";
import Profile from "../src/page/Profile";
import CreateEvent from "../src/page/CreateEvent"
import CategoryEvents from "../src/page/CategoryEvents";
import EditEvents from "../src/page/EditEvents";
import EventRegistration from "../src/page/EventRegistration";
import BuyTicket from "../src/page/BuyTicket";
import Tickets from "../src/page/Tickets";
import CreateAds from "../src/page/CreateAds"
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Contents />} />
          <Route path = 'signup' element={<Signup />} />
          <Route path = 'signin' element={<Signin />} />
          <Route path = 'profile' element={<Profile />} />
          <Route path = 'events' element={<Events />} />
          <Route path = 'tickets' element={<Tickets />} />
          <Route path = 'createEvent' element={<CreateEvent />} />
          <Route path = 'createAds' element={<CreateAds />} />
          <Route path = 'categoryEvents' element={<CategoryEvents />} />
          <Route path = 'editEvents' element={<EditEvents />} />
          <Route path = 'eventRegistration' element={<EventRegistration />} />
          <Route path = 'buyTicket' element={<BuyTicket />} />
        </Route>
      </Routes>
  );
}
export default App;