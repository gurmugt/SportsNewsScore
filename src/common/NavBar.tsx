import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon, CogIcon } from '@heroicons/react/outline';
import Logo from '../assets/images/Logo.jpg';
import { useLocation } from 'react-router-dom';
import React from 'react';
import Matches from '../pages/matches';
import Articles from '../pages/articles';
import Favourites from '../pages/favourites/Favourites';
import UserPreferences from '../pages/userpreferences/UserPreferences'

const userNavigation = [
  { name: 'Sign out', href: '/logout' },
];

const guestUser = [
  { name: 'Sign up' , href: '/users'},
  { name: 'Sign in' , href: '/users/sign_in'}
]

type User = string | null
 
const classNames = (...classes) => classes.filter(Boolean).join(' ');

const NavBar = () => {
  const authToken: User = localStorage.getItem("authToken")
  const [user,setUser] = useState<User>(null)

  useEffect(()=>{
    if(authToken){
      setUser(authToken)
    }else{
      setUser(null)
    }
  },[authToken])

  const userHandler = user ? userNavigation : guestUser
  const { pathname } = useLocation();

  return (
    <div>
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-14"
              src={Logo}
              alt="Sports Dashboard"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-4">
              <h1 className="text-2xl text-white">Sports Center</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
            <Menu as="div" className="relative ml-3">
                    <div className='space-x-4 flex'>
                      <div>{user && <UserPreferences/>}</div>
                      <Menu.Button className="rounded-full bg-gray-200 p-1 text-black hover:text-sky-600">
                      <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </Menu.Button>
            </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div>
            <div className="flex flex-row">
                <Matches/>
            </div>
            <div className="grid grid-cols-5 bg-green-100 ml-6 mr-6">
                <div className="col-start-1 col-span-3">
                    <Articles/>
                </div>
                <div className="ml-14 col-start-4 col-span-3 py-3 px-14 bg-gray-300">
                    <Favourites/>
                </div>
            </div>
        </div>

    </div>
  );
};

export default NavBar;
