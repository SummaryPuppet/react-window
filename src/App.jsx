import "./App.css";
import Window from "./components/Window";
import { useSelector } from "react-redux";
import BottomBar from "./components/BottomBar";

function App() {
  const win = useSelector((state) => state.win.entities);
  
  return (
    <>
      {win.map((win, i) => (
        <Window name={win.name} key={i} />
      ))}

      <BottomBar />
    </>
  );
}

export default App;
