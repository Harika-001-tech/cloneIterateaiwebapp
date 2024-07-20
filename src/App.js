import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyBookings from "./MyBookings";
import PoojaOptions from "./PoojaOptions";
import PoojaDetail from "./PoojaDetail";
import PackageOptions from "./PackageOptions";
import ReviewBooking from "./ReviewBooking";
import BookingConfirmed from "./BookingConfirmed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MyBookings" element={<MyBookings />} />
      <Route path="/PoojaOptions" element={<PoojaOptions />} />
      <Route path="/PoojaDetail" element={<PoojaDetail />} />
      <Route path="/PackageOptions" element={<PackageOptions />} />
      <Route path="/ReviewBooking" element={<ReviewBooking />} />
      <Route path="/BookingConfirmed" element={<BookingConfirmed />} />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
