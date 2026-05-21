import {NavLink} from 'react-router'

function Header() {
  console.log("Navbar rendered")
  return (
    <div className="flex justify-between items-center bg-red-800 text-white p-4">
      <h1 className="text-xl font-bold"></h1>
      <ul className="flex gap-6">
        <li><NavLink to="" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Home</NavLink></li>
        <li><NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>CreateEmp</NavLink></li>
        <li><NavLink to="list" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Employees</NavLink></li>
      </ul>
    </div>
  );
}
export default Header;
