import Image from "next/image";

export default function Header() {
    return (
        <header className='bg-white flex justify-center'>
            <div className='flex justify-between bg-white py-[8px] font-inter font-normal text-lg w-[1200px]'>
                <div>
                    <button className='rounded transition ease-in-out border-solid duration-200 text-primary bg-transparent w-[79px] h-10 border-solid border border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-1 focus:ring-primary mr-4'>Back</button>
                    <button className='cursor inline-flex justify-center items-center text-white bg-primary w-[200px] h-10 rounded focus:outline-none focus:ring-1 focus:ring-primary hover:bg-white hover:text-primary transition duration-200 hover:border hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary btn'>
                        <Image src='/pin_icon.svg' width={13.97} height={13.97} alt='pin'></Image>
                        <span className='ml-[8.72px]'>Pin the unit</span>
                    </button>
                </div>
                <div className='flex items-center'>
                    <button className='mr-5 header-button'><Image src='/add_member_icon.png' width={18.33} height={13.33} alt='add member'></Image></button>
                    <Image className='member' src='/member1.png' width={32} height={32} alt='member'></Image>
                    <Image className='member' src='/member2.png' width={32} height={32} alt='member'></Image>
                    <button className='ml-3 header-button '><Image src='/sign_out_icon.png' width={16.66} height={16.67} alt='sign out'></Image></button>
                </div>
            </div>
        </header>
    )
}