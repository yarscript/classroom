import Image from "next/image";
import React, { useState } from 'react'
export default function TaskSummary({taskInfo, isOpen, setOpen}) {

    return (
        <>
            <div className='flex justify-between items-center font-inter font-semibold text-[20px] leading-[140%] text-textColor'>
                <div className='flex items-center'>
                    <button className='p-[11px] rounded-full bg-primaryLight text-primary w-[50px] h-[50px] mr-2.5'>{taskInfo.number}</button>
                    <h2>{taskInfo.explanation}</h2>
                </div>
                <div className='flex'>
                    <button onClick={() => setOpen(isOpen => !isOpen)}
                            className='taskSummaryButton'
                            style={!isOpen ? { display: "none"} : {display: "inline-flex"}}>
                        <Image src='/close_section_icon.svg' width={12} height={6} alt='close'></Image>
                    </button>
                    <button onClick={() => setOpen(isOpen => !isOpen)}
                            className='taskSummaryButton'
                            style={isOpen ? { display: "none"} : {display: "inline-flex"}}>
                        <Image src='/open_section_icon.svg' width={12} height={6} alt='open'></Image>
                    </button>
                    <button className='taskSummaryButton'><Image src='/dots_icon.svg' width={4} height={18} alt='more'></Image></button>
                </div>
            </div>
        </>
    )
}