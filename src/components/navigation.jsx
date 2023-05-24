import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div style={{ color: "white" }}>
        <Link to="/">Appy</Link>
        <Link to="/comp">Comp</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
