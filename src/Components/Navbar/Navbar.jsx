import { GroupyIcon } from "../../assets/image";

const Navbar = () => {
  const currentUserId = "1";
  const navElements = [
    {
      name: "Friends",
      path: "/friends",
    },
    {
      name: "Profile",
      path: `/profile/${currentUserId}`,
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];
  return (
    <div className="flex flex-row h-nav w-full justify-between item-center">
      <img
        src={GroupyIcon}
        alt="Groupy Icon"
        style={{
          height: "40px",
          width: "40px",
        }}
      />
      <div className="flex">
        {navElements.map((element) => {
          return (
            <a href={element.path} className="">
              {element.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
