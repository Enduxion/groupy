import { GroupyIcon } from "../../assets/image";

const Navbar = () => {
    const currentUserId = "1";
    const navElements = [
        {
            name: "Friends",
            path: "/friends"
        },
        {
            name: "Profile",
            path: `/profile/${currentUserId}`
        },
        {
            name: "Settings",
            path: "/settings"
        }
    ]
    return (
        <div className="">
            <img src={GroupyIcon} className="" />
            <div className="">
                {navElements.map((element) => {
                    return (
                        <a href={element.path} className="">{element.name}</a>
                    )
                })}
            </div>
        </div>
    );
};

export default Navbar;