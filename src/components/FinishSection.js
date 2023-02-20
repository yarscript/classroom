import Image from "next/image";

export default function FinishSection() {
    return (
        <div className='flex justify-between items-center font-inter font-normal text-lg'>
            <div className='flex'>
                <button className='navButton'><Image src='/back_icon.svg' width={6} height={12} alt='back'></Image></button>
                <p className='mx-3'>3 of 8</p>
                <button className='navButton'><Image src='/forward_icon.svg' width={6} height={12} alt='forward'></Image></button>
            </div>
            <div>
                <button className='bg-primary rounded py-1.5 px-[25px] text-white'>Finish the section</button>
            </div>

        </div>
    )
}