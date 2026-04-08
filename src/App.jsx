import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import DataAnalyst from "./views/DataAnalyst";
import FullStack from "./views/FullStack";
import ProductUX from "./views/ProductUX";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/data-analyst" element={<DataAnalyst />} />
      <Route path="/full-stack" element={<FullStack />} />
      <Route path="/product-ux" element={<ProductUX />} />
    </Routes>
  );
}

export default App;
