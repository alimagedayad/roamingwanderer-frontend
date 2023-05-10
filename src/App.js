import styled from "styled-components";
import "./App.css";
import Banner from "./pages/Banner";
import Omnibox from "./pages/Omnibox";


function App() {
  return (
    <div className="flex flex-col flex-1 w-full bg-stone-100">
      <Banner />
      <Omnibox/>
    </div>
  );
}

export default App;

// const Body = styled.div`
//   padding: 10px;
// `;
