import React from "react";
import Image from "next/image";
import SelectWord from "./SelectMaterial";

export default function Card() {
    return (
        <div className='inline-block mr-[18.67px] mt-7'>
            <Image src='/card_image.svg' width={182} height={182} alt='card'></Image>
            <SelectWord />
        </div>
    )
}