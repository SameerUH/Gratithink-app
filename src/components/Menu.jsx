import { Link } from "react-router-dom";
import { HomeIcon,AcademicCapIcon } from "@heroicons/react/20/solid"

/**
 * Main menu
 * 
 * This will be the main navigation component in 
 * the app, with links to all main pages
 * 
 * @author Sameer Haq
 */

function Menu() {
    return (
        <ul className="fixed bottom-0 left-0 w-full bg-[#2f4f4f] border-t border-gray-200 p-4 flex justify-around">
            <div className="flex flex-col items-center">
                <li className="text-white">
                    <Link to="/home" className="text-white flex flex-col items-center">
                        <HomeIcon className="h-10 w-10 text-white" />
                        <span>Home</span>
                    </Link>
                </li>
            </div>
            <div className="flex flex-col items-center">
                <li className="text-white">
                    <Link to="/performance" className="text-white flex flex-col items-center">
                        <AcademicCapIcon className="h-10 w-10 text-white" />
                        <span>Performance</span>
                    </Link>
                </li>
            </div>
        </ul>
    )
}

export default Menu;