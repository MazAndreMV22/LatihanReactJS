import React from 'react' ;
import Tugas6 from './Tugas6/tugas6' ;
import Tugas7 from './Tugas7/tugas7' ;
import Tugas8 from './Tugas8/tugas8' ;
import Tugas9 from './Tugas9/tugas9' ;
import Tugas10 from './Tugas10/tugas10' ;
import Tugas11 from './Tugas11/tugas11' ;
import { Link , BrowserRouter, Route, Routes} from 'react-router-dom';



const App = () => {
  return(
    <BrowserRouter>
    <nav className="bg-black border-gray-200 dark:bg-gray-900">  
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Sanbercode ReactJS By Andre</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
        <li>
          <Link to="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/tugas6" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tugas 6</Link>
        </li>
        <li>
          <Link to="/tugas7" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tugas 7</Link>
        </li>
        <li>
          <Link to="/tugas8" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tugas 8</Link>
        </li>
        <li>
          <Link to="/tugas9" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tugas 9</Link>
        </li>
        <li>
          <Link to="/tugas10" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tugas 10</Link>
        </li>
        <li>
          <Link to="/tugas11" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tugas 11</Link>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
<Routes>
    <Route path='/tugas6' element={<Tugas6 />}/>
        <Route path='/tugas7' element={<Tugas7 name="ANDRE RUKMANA" batch="36" email="mazandrerukmana22@gmail.com"/>}/>
        <Route path='/tugas8' element={<Tugas8 />}/>
        <Route path='/tugas9' element={<Tugas9 />}/>
        <Route path='/tugas10' element={<Tugas10 />}/>
        <Route path='/tugas11' element={<Tugas11 />}/>
      </Routes>
  </BrowserRouter>

  )
}
export default App;
