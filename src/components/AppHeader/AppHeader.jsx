import { TfiShoppingCart } from "react-icons/tfi";
const AppHeader=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid text-white">
    <a className="navbar-brand text-white" href="#">Reeco</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Analytics</a>
        </li>
      </ul>
      <span className="navbar-text-white d-flex gap-4">
      <TfiShoppingCart />
       Hello james
      </span>
    </div>
  </div>
</nav>
    )
}

export default AppHeader;