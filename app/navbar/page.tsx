import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center px-20">

                    <a href="" className="text-white text-lg font-bold">Awesome Page</a>

                    <div className="flex space-x-4">
                        <a href="" className="text-white hover:text-gray-300">Home</a>
                        <a href="/register" className="text-white hover:text-gray-300">Register</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar