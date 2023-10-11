import React from 'react'
import logo from "../../assets/logo.svg"

function Header() {
  const navStyle = {
    nav: 'w-full h-[72px] flex justify-between items-center text-[#2E2E2E] font-bold'
  }

  const ulStyle = {
    ul: 'hidden lg:inline-flex lg:items-start lg:gap-9 lg:text-base 2xl:text-2xl'
  }

  const liStyle = {
    li: 'hover:text-[#D01C28] duration-200',
  }

  const buttonStyle = {
    sm: 'w-16 h-8 bg-[#D01C28] text-sm hover:bg-white hover:text-[#D01C28] hover:border hover:border-[#D01C28] duration-300',
    lg: 'lg:w-20 lg:h-9',
    twoXL: '2xl:w-24 2xl:h-10'
  }

  return (
    <nav className={navStyle.nav}>
      <div className='w-20 h-11 flex-grow-0 ml-5'>
        <img
          src={logo}
        />
      </div>

      <ul className={ulStyle.ul}>
        <li className={liStyle.li}><a href="/react-product-page/">Menu</a></li>
        <li className={liStyle.li}><a href="/react-product-page/">Location</a></li>
        <li className={liStyle.li}><a href="/react-product-page/">About</a></li>
        <li className={liStyle.li}><a href="/react-product-page/">Contact</a></li>
      </ul>

      <div className='text-white mr-3 lg:mr-5'>
        <button className={`${buttonStyle.sm} ${buttonStyle.lg} ${buttonStyle.twoXL}`}>Login</button>
        <button className={`${buttonStyle.sm} ${buttonStyle.lg} ${buttonStyle.twoXL} ml-2 2xl:ml-4`}>Sign Up</button>
      </div>
    </nav>
  )
}

export default Header