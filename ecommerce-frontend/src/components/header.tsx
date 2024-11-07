import { FaSearch, FaShoppingBag, FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const user = { _id: "sdfsd", role: "user" };
const Header = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?.id ? (
        <>
          <button>
            <FaUser />
          </button>
          <dialog>
            <div>
              {user.role === "admin" && (
                <Link to='/admin/dashboard'>Admin</Link>
              )}
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/cart"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
