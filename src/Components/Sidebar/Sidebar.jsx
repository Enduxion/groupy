import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="flex flex-col fixed mt-nav bg-primary-dark h-[calc(100vh-60px)] w-1/6 p-2">
        <Link className="flex w-full flex-row justify-between bg-secondary p-2 rounded-lg" to="/make_post">
            <span className="">Post</span>
            <span className="text-xl">+</span>
        </Link>
        <div className="friends"></div>
        <div className="quick-settings"></div>
    </div>
  )
}

export default Sidebar