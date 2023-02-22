import Image from "next/image";

export default function Word({word, last}) {
    return (
        <>
            <div className='flex space-x-[15px] items-center mb-[13px] ml-[11px]'>
                <Image src='/add_word_icon.svg' width={19} height={14} alt='add word'></Image>
                <div className='w-px h-10 bg-border'></div>
                <Image src='/volume_icon.svg' width={18.04} height={15.87} alt='volume'></Image>
                <div>
                    <p className='font-bold '>{word.name}</p>
                    <p>{word.explanation}</p>
                </div>
            </div>
            { word.id !== last - 1 && <hr className='mb-3'/>}
        </>
    )
}