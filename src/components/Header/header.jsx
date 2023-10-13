import React from 'react'
import logo from "../../assets/logo.svg"

function Header() {
  const navStyle = {
    nav: 'h-[72px] flex justify-between items-center text-[#2E2E2E] font-bold'
  }

  const ulStyle = {
    ul: 'hidden md:inline-flex md:items-start md:gap-9 md:text-base'
  }

  const liStyle = {
    li: 'hover:text-[#D01C28] duration-200',
  }

  const buttonStyle = {
    sm: 'min-[375px]:w-16 min-[375px]:h-8 bg-[#D01C28] text-sm hover:bg-white hover:text-[#D01C28] hover:border hover:border-[#D01C28] duration-300',
    md: 'md:w-20 md:h-9',
  }

  return (
    <nav className={navStyle.nav}>
      <div className='w-20 h-11 flex-grow-0 ml-5'>
        <img
          src={logo}
        />
      </div>

      <ul className={ulStyle.ul}>
        <li className={liStyle.li}><a href="https://devtahaz.github.io/react-product-page/">Menu</a></li>
        <li className={liStyle.li}><a href="https://devtahaz.github.io/react-product-page/">Location</a></li>
        <li className={liStyle.li}><a href="https://devtahaz.github.io/react-product-page/">About</a></li>
        <li className={liStyle.li}><a href="https://devtahaz.github.io/react-product-page/">Contact</a></li>
      </ul>

      <div className='text-white min-[375px]:mr-3 md:mr-5'>
        <button className={`${buttonStyle.sm} ${buttonStyle.md}`}>Login</button>
        <button className={`${buttonStyle.sm} ${buttonStyle.md} min-[375px]:ml-2`}>Sign Up</button>
      </div>
    </nav>
  )
}

export default Header