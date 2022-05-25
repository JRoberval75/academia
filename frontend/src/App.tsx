import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listagem from 'pages/Listagem';
import Sobre from 'pages/Sobre';
import Navbar from "components/Navbar";
import Avaliacao from "pages/Avaliacao";
import NavTop from "components/NavTop";

function App() {
  return (
    <BrowserRouter>
      <NavTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Listagem />} />
        <Route path="/sobre">
          <Route path=":sobreId" element={<Sobre />} />
        </Route>
        <Route path="/avalicao">
          <Route path=":avaliacaoId" element={<Avaliacao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;