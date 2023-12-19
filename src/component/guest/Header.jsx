import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <h1>King of Coworkings</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coworkings">Coworkings</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/admin/">admin login</Link>
          </li>
          <li>
            <Link to="/admin/coworkings">admin coworkings to delete</Link>
          </li>
          <li>
            <Link to="/admin/createCoworking">CreateCoworkings</Link>
          </li>
          <li>
            <Link to="/admin/updateCoworkings/:id">updateCoworkings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
