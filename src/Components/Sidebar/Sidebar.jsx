import { Link } from "react-router-dom";

const Sidebar = () => {

  const friends = [];

  const visibleFriends = friends.slice(0, 10);

  return (
    <div className="flex flex-col fixed left-0 bg-primary-dark h-[calc(100vh-60px)] w-1/6 p-2 gap-8 overflow-y-scroll">
      <div className="flex flex-col gap-4">
        <Link
          className="flex w-full flex-row justify-between button-primary"
          to="/make_post"
        >
          <span className="">Post</span>
          <span className="text-xl">+</span>
        </Link>
        <Link
          className="flex w-full flex-row justify-between button-primary"
          to="/make_note"
        >
          <span className="">Note</span>
          <span className="text-xl">+</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl">Your friends</span>
        {visibleFriends.length === 0 ? (
          <span className="text-text-accent/50 text-sm">You currently have no friends</span>
        ) : (
          visibleFriends.map((friend) => (
            <Link
              key={friend.id}
              className="flex w-full flex-row gap-2 button-primary items-center"
              to={`/profile/${friend.id}`}
            >
              <img src={friend.pfp} alt="pfp" className="w-1/6 aspect-square rounded-full" />
              <span className="text-text truncate">{friend.name}</span>
            </Link>
          ))
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl">Quick settings</span>
        <Link className="flex w-full flex-row justify-between button-primary items-center" to="/settings">
          <i className="fa-solid fa-gear text-lg"></i>
          <span className="">Settings</span>
        </Link>
        <Link className="flex w-full flex-row justify-between button-primary items-center" to="/logout">
          <i className="fa-solid fa-right-from-bracket text-lg"></i>
          <span className="">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
