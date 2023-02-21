import Image from "next/image";
import {useState} from "react";
export default function PreviewModeMessage() {

    const [isShown, setShown] = useState(true)

    return (
        <>
            { isShown && <div className='bg-primary w-full h-9 flex justify-center items-center'>
                <p className='text-base text-white'>Preview mode</p>
                <button className='absolute right-[10.5%]' onClick={() => {setShown(!isShown)}}>
                    <Image src='/close_icon.svg' width={12} height={12} alt='close'></Image>
                </button>
            </div>}
        </>
    )
}