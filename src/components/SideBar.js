import Image from "next/image";
import Sections from "@/components/Sections";

export default function SideBar({sections}) {
    return (
        <div className="border border-border h-max w-[290px] bg-white ml-[40px] px-[12px] pt-[12px] pb-[4px] rounded-[20px]">
            <div className='bg-[#203854] mb-4 rounded-[8px]  text-center flex flex-col items-center py-[24px] px-[10px] mb-[31px]'>
                <p className="border-2 border-solid rounded-xl  mb-[16px] w-[58px] text-white text-[14px]  leading-6">Beta</p>
                <p className="mb-[16px] leading-6 text-base text-white">Call yor students when the lesson starts</p>
                <div className="bg-primary flex items-center justify-center w-[152px] h-[34px] rounded-md border-none"><Image src='/call_icon.svg' width={12} height={12} alt='call' /><p className="text-white font-medium text-[14px] ml-[10px]">Start a call</p></div>
            </div>

            <Sections sections={sections}/>
            <hr />
            <div className="my-[18px] flex inline">
                <Image src='/homework_icon.svg' width={20} height={20} alt='homework'></Image>
                <p className="inline ml-[8px]">Exercises for homework</p>
            </div>
            <hr />
            <div className="my-[18px]  flex inline">
                <Image src='/additional_icon.svg' width={24} height={24} alt='additional'></Image>
                <p className="inline ml-[8px]">Additional</p>
            </div>
        </div>
    )
}