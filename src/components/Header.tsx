import { LogIn, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="text-4xl">
          Omkar Garde
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box border-2 border-slate-600 bg-base-100 p-2 shadow"
            >
              <li className="border-b-2 border-b-slate-600 px-3 pb-1 text-lg">
                My Account
              </li>
              <li>
                <a>My Links</a>
              </li>
              <li>
                <a className="text-secondary">
                  <LogOut />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn btn-primary btn-xs sm:btn-sm md:btn-md"
            onClick={() => {
              navigate("/auth");
            }}
          >
            <LogIn />
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
