import Image from "next/image";
import styles from "../styles/Header.module.scss"
export default function Header() {
    return (
        <header className='flex justify-between bg-white px-[10.5%] py-[8px] font-inter font-normal text-lg'>
            <div>
                <button className='rounded text-primary bg-transparent w-[79px] h-10 border-solid border border-primary mr-4'>Back</button>
                <div className='inline-flex justify-center items-center text-white bg-primary w-[200px] h-10 rounded'>
                    <Image src='/pin_icon.svg' width={13.97} height={13.97} alt='pin'></Image>
                    <span className='ml-[8.72px]'>Pin the unit</span></div>
            </div>
            <div className='flex'>
                <button className='mr-5 header-button'><Image src='/add_member_icon.png' width={18.33} height={13.33} alt='add member'></Image></button>
                <Image className='member' src='/member1.png' width={32} height={32} alt='member'></Image>
                <Image className='member' src='/member2.png' width={32} height={32} alt='member'></Image>
                <button className='ml-3 header-button '><Image src='/sign_out_icon.png' width={16.66} height={16.67} alt='sign out'></Image></button>
            </div>
        </header>
    )
}