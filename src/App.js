import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {List, ListView} from "./Presentation/View/Products";
import {Cart} from "./Presentation/View/User";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">Shopping Store</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/viewProduct" element={<ListView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
