import { Fragment } from "react";
import { Link } from "react-router-3";
import useInput from "../hooks/useInput";

export default function Layout(props) {
  console.log(props.pepe);
  const { value, setValue, resetValue } = useInput();
  return (
    <>
      <header>
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input style={{ display: "none" }} type="submit" value="Search" />
        </form>
        <nav>
          <ul>
            <li>
              <Link to="/africa">África</Link>
            </li>
            <li>
              <Link to="/america">América</Link>
            </li>
            <li>
              <Link to="/asia">Asia</Link>
            </li>
            <li>
              <Link to="/europa">Europa</Link>
            </li>
            <li>
              <Link to="/oceania">Oceania</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>Front End 3 - Digital House, 2021.</footer>
    </>
  );
}
