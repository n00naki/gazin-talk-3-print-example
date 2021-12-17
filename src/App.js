import { Printable } from "./components/printable";
import { HomePrint } from "./pages/home-print";

import Home from "./pages/home.js";

function App() {
  return (
    <div className="App">
      <Printable>
        <Home />
      </Printable>
      <Printable isPrintable>
        <HomePrint />
      </Printable>
    </div>
  );
}

export default App;
