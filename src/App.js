import "./App.css";
import "./root.css";
import MyAccordion from "./components/MyAccordion";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Anticipated from "./components/Anticipated";
import Bestnft from "./components/Bestnft";
import Antonym from "./components/Antonym";
import Clone from "./components/Clone";
import CryptoPunks from "./components/CryptoPunks";

function App() {
  return (
    <div>
      <Antonym />
      <Clone />
      <Anticipated />
      <CryptoPunks />
      <MyAccordion />
    </div>
  );
}

export default App;
