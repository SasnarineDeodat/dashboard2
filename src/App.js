import Header from "./components/header/navbar/utils/header/Header";
import LeftPart from "./components/header/navbar/utils/leftPart/LeftPart";
import NavBar from "./components/header/navbar/utils/navbar/NavBar";
import RightPart from "./components/header/navbar/utils/rightPart/RightPart";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <NavBar />
        <div className="grid grid-cols-1 xl:grid-cols-5 w-full col-span-10">
          {/* left part */}
          <LeftPart />
          {/* right part */}
          <RightPart />
        </div>
      </div>
    </div>
  );
}
export default App;
