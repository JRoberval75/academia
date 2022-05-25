import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listagem from 'pages/Listagem';
import Sobre from 'pages/Sobre';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listagem />} />
        <Route path="/sobre">
          <Route path=":sobreId" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;