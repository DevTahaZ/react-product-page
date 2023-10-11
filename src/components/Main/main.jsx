import React from 'react'
import flipkart from "../../assets/flipkart.svg"
import amazon from "../../assets/amazon.svg"
import shoe from "../../assets/shoe.png"

function Main() {
    const mainStyle = {
        sm: 'mt-14 mb-10',
        lg: 'lg:mt-20 lg:flex lg:justify-center lg:items-center lg:px-5',
        twoXL: '2xl:px-0',
    }

    const leftSectionStyle = {
        sm: 'px-10 font-bold font-[Poppins]',
        lg: 'lg:w-[595px] lg:h-[613px] lg:grid lg:place-items-start',
        twoXL: '2xl:px-0 2xl:w-[795px] 2xl:h-[813]',
    }

    const headTextStyle = {
        sm: 'text-8xl mb-7 whitespace-nowrap leading-[102px] font-[800] duration-300',
        lg: 'lg:grid lg:place-items-start lg:mb-9 lg:text-8xl',
        twoXL: '2xl:text-9xl 2xl:mb-14'
    }
    
    const paraTextStyle = {
        sm: 'w-[80%] mb-10 text-[#5A5959] text-lg font-[600] duration-300',
        lg: 'lg:mb-9 lg:text-base',
        twoXL: '2xl:text-2xl 2xl:mb-14'
    }

    const buttonOneStyle = {
        sm: 'w-36 h-12 bg-[#D01C28] text-white text-2xl hover:bg-white hover:text-[#D01C28] hover:border hover:border-[#D01C28] duration-300',
    }

    const buttonTwoStyle = {
        sm: 'w-36 h-12 text-[#5A5959] text-2xl border-[1px] border-solid border-[#5A5959] hover:bg-[#5A5959] hover:text-white hover:border-none duration-300',
    }

    const buttonCommonStyle = {
        lg: 'lg:w-28 lg:h-8 lg:text-xl',
        twoXL: '2xl:w-44 2xl:h-16 2xl:text-2xl'
    }

    const pTextStyle = {
        p: 'text-[#5A5959] text-base font-[400] mb-5 lg:text-base 2xl:text-2xl'
    }

    const logoStyle = {
        logo: 'w-8 h-8 2xl:w-10 2xl:h-10 duration-300'
    }


  return (
    <div className={`${mainStyle.sm} ${mainStyle.lg} ${mainStyle.twoXL}`}>
        <div className={`${leftSectionStyle.sm} ${leftSectionStyle.lg} ${leftSectionStyle.twoXL}`}>
            <div className={`${headTextStyle.sm} ${headTextStyle.lg} ${headTextStyle.twoXL}`}>
                <h1 className='-mb-2 lg:-mb-0'>YOUR FEET</h1>
                <h1 className='-mb-2 lg:-mb-0'>DESERVE</h1>
                <h1>THE BEST</h1>
            </div>

            <div className={`${paraTextStyle.sm} ${paraTextStyle.lg} ${paraTextStyle.twoXL}`}>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>

            <div className='flex gap-10 mb-10 lg:mb-9 lg:gap-6 2xl:gap-12'>
                <button className={`${buttonOneStyle.sm} ${buttonCommonStyle.lg} ${buttonCommonStyle.twoXL}`}>Shop Now</button>
                <button className={`${buttonTwoStyle.sm} ${buttonCommonStyle.lg} ${buttonCommonStyle.twoXL}`}>Category</button>
            </div>

            <p className={pTextStyle.p}>Also Available On</p>
            <div className="flex items-center gap-4 2xl:gap-6">
                <img className={logoStyle.logo} src={flipkart} alt="" />
                <img className={logoStyle.logo} src={amazon} alt="" />
            </div>
        </div>
        
        <div>
            <img className='hidden lg:block lg:w-[530px]' src={shoe} alt="" />
        </div>
    </div>
  )
}

export default Main