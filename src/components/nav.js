import React, { useState, useContext } from 'react';

// import styles from '../App.css'
import BurgerMenuIcon from '../assets/icons/BurgerMenuIcon';
import XIcon from '../assets/icons/XIcon';


function Navbar(props) {

    const [menuOpen, setMenuOpen] = useState(false);
  
    const SlideInMenu = ({ open, setClose }) => {
        return (
          <div
            className={`fixed top-0 right-0 h-screen w-52 p-7 z-20 transition-transform duration-300 flex flex-col ${
              open ? 'transform-none' : 'translate-x-full'} bg-[#2B2A64] md:w-[280px]`}
          >
            <button
              onClick={setClose}
              className="flex text-white justify-end items-center text-right mb-8 focus:outline-none focus:ring focus:ring-offset-2"
            >
              Close <XIcon />
            </button>
    
            {/* Add your menu items */}
            <ul className='justify-center md:text-xl'>
                    {/* <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/" onClick={setClose}>HOME</a></li> */}
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/"  onClick={setClose}>About Me</a></li>
                  
    <>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/portfolio">Portfolio</a></li>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href='/contact'>Contact</a></li>

                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href='/login'>Resume</a></li>
                    </>
                </ul>
          </div>
        );
      };

      const Scrim = ({ open, setClose }) => (
        <div
          className={`${
            open ? 'block' : 'hidden'
          } fixed inset-0 bg-black opacity-50 z-10`}
          onClick={setClose}
        ></div>
      );

    return (
      <nav className={`hero-image items-center px-3 pt-3  xl:px-[8%] bg-center bg-no-repeat bg-cover min-h-[300px] md:min-h-[600px] lg:min-h-[728px] ${props.styl}`}>
        <ul className=" max-w-full max-h-full flex justify-between xl:mx-4 lg:justify-center"> 
            
            <div className='pt-3 text-white lg:hidden'>
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`focus:outline-none focus:ring focus:ring-offset-2`}>
                <BurgerMenuIcon className="h-auto md:w-10"/>
            </button>
            <Scrim open={menuOpen} setClose={() => setMenuOpen(false)} />
            <SlideInMenu open={menuOpen} setClose={() => setMenuOpen(false)} />
            </div>
            <div className='hidden lg:flex lg:justify-center lg:w-full'>
                <ul className='lg:w-[85%] text-white'>
                    {/*  */}
                </ul>
            </div>    
        </ul>
      </nav>
    );
  }

  export default Navbar