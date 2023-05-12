import "../../src/App.css"
import Banner from "../../src/pages/Banner";
import Omnibox from "../../src/pages/Omnibox";

function App() {
  return (
    <div className="flex flex-col flex-1 w-full bg-stone-100">
      <Banner />
      <Omnibox/>
    </div>
  );
}

export default App;