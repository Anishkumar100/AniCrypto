import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    

<footer className="bg-white  shadow-sm  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 max-sm:mt-4 max-sm:gap-4">
        <li>
            <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
        </li>
        <li>
            <Link to="/cryptocurrencies" className="hover:underline me-4 md:me-6">Cryptocurrencies</Link>
        </li>
        <li>
            <Link to="/exchanges" className="hover:underline me-4 md:me-6">Exchanges</Link>
        </li>
        <li>
            <Link to="/news" className="hover:underline me-4 md:me-6">News</Link>
        </li>

        <li>
            <a href="https://anishkumarversion1.netlify.app/" target='_blank' className="hover:underline me-4 md:me-6">About Developer</a>
        </li>

    </ul>
    </div>
</footer>

  )
}
