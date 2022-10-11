import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Films from "./components/elements/Films/Films";
import Header from "./components/elements/Header/Header";
import ProfilePopup from "./components/elements/Header/ProfilePopup/ProfilePopup";
import Home from "./components/elements/Home/Home";
import MyList from "./components/elements/MyList/MyList";
import Hr from "./components/UI/HR/Hr";
import "./style/index.scss"

export const Context = createContext(null)
function App() {
  const [myList, setMyList]=useState(JSON.parse(localStorage.getItem('myList')) || [])
  const [popup, setPopup] = useState(false)

  return (
    <Context.Provider value={{
      popup,
      setPopup,
      myList,
      setMyList,
    }}>

      <BrowserRouter>
        <Header />
        <ProfilePopup />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<MyList />} />
          {/* <Films/> */}
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
