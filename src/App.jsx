import Appy from "./components/app.component";
import Comp from "./components/compo.component";
import Navigation from "./components/navigation"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Appy />} />
          <Route path="comp" element={<Comp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
