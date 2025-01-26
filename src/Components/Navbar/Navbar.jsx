import { Link } from "react-router-dom";
import { GroupyIcon } from "../../assets/image";

const Navbar = () => {
  const currentUserId = "1";
  const navElements = [
    {
      name: "Friends",
      path: "/friends",
      icon: "fa-users"
    },
    {
      name: "Profile",
      path: `/profile/${currentUserId}`,
      icon: "fa-user"
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "fa-gear"
    },
  ];
  return (
    <nav className="flex items-center h-nav justify-between bg-primary-dark p-2 pl-4 w-full fixed border-b border-accent/30 z-50">
      <Link to="/" className="flex item-center tracking-wide font-bold text-text-accent text-lg hover:text-text">
        Groupy.
      </Link>
      <div className="flex items-center">
        {navElements.map((element) => (
          <Link
            key={element.name}
            to={element.path}
            className="mx-4 text-text hover:text-text-accent"
          >
            <i className={`fa-solid ${element.icon}`}></i>
            <span className="ml-2">{element.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
