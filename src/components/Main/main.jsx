import React from 'react'
import flipkart from "../../assets/flipkart.svg"
import amazon from "../../assets/amazon.svg"
import shoe from "../../assets/shoe.png"

function Main() {
    const mainStyle = {
        sm: 'min-[375px]:mt-14 mb-10',
        md: 'md:mt-20 md:flex md:justify-center md:items-center md:px-5',
    }

    const leftSectionStyle = {
        sm: 'px-10 font-bold font-[Poppins]',
        md: 'md:w-[595px] md:h-[613px] md:grid md:place-items-start',
    }

    const headTextStyle = {
        sm: 'min-[375px]:text-5xl min-[375px]:mb-7 whitespace-nowrap leading-[102px] font-[800] duration-300',
        md: 'md:text-8xl md:grid md:place-items-start md:mb-9',
    }
    
    const paraTextStyle = {
        sm: 'w-[80%] min-[375px]:text-sm min-[375px]:mb-10 text-[#5A5959] font-[600] duration-300',
        md: 'md:mb-9 md:text-base',
    }

    const buttonOneStyle = {
        sm: 'w-28 h-10 bg-[#D01C28] text-white text-xl hover:bg-white hover:text-[#D01C28] hover:border hover:border-[#D01C28] duration-300',
    }

    const buttonTwoStyle = {
        sm: 'w-28 h-10 text-[#5A5959] text-xl border-[1px] border-solid border-[#5A5959] hover:bg-[#5A5959] hover:text-white hover:border-none duration-300',
    }

    const buttonCommonStyle = {
        md: 'md:w-28 md:h-8 md:text-xl',
    }

    const pTextStyle = {
        p: 'text-[#5A5959] text-base font-[400] mb-5'
    }

    const logoStyle = {
        logo: 'w-8 h-8 duration-300'
    }


  return (
    <div className={`${mainStyle.sm} ${mainStyle.md}`}>
        <div className={`${leftSectionStyle.sm} ${leftSectionStyle.md}`}>
            <div className={`${headTextStyle.sm} ${headTextStyle.md}`}>
                <h1 className='min-[375px]:mb-3 md:-mb-0'>YOUR FEET</h1>
                <h1 className='min-[375px]:mb-3 md:-mb-0'>DESERVE</h1>
                <h1>THE BEST</h1>
            </div>

            <div className={`${paraTextStyle.sm} ${paraTextStyle.md}`}>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>

            <div className='flex min-[375px]:gap-5 min-[375px]:mb-10 md:mb-9 md:gap-6'>
                <button className={`${buttonOneStyle.sm} ${buttonCommonStyle.md}`}>Shop Now</button>
                <button className={`${buttonTwoStyle.sm} ${buttonCommonStyle.md}`}>Category</button>
            </div>

            <p className={pTextStyle.p}>Also Available On</p>
            <div className="flex items-center gap-4">
                <img className={logoStyle.logo} src={flipkart} alt="" />
                <img className={logoStyle.logo} src={amazon} alt="" />
            </div>
        </div>
        
        <div>
            <img className='hidden md:block md:w-[530px]' src={shoe} alt="" />
        </div>
    </div>
  )
}

export default Main