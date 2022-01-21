import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/paymet" element={<Payment />}></Route>
      </Routes>
    </>
  );
}

export default App;

// ! All pages should be placed in the pages folder
// ! All components should be placed in the components folder
// ! Any images, svg, pdf and others will be placed in the public folder
// ! Any common and resuable functions like loadDataFromLocalStorage(key) should be placed in the utils folder
// ! Reach out to me in case of any concerns