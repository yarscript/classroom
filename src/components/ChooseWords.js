import React from "react"
import SelectWord from "./SelectMaterial"

export default function ChooseWords() {
    return (
        <div className="[&>div]:select font-inter font-normal text-lg text-textColor my-14">
            <div>A <span>< SelectWord /> </span>smell is strong, warm, and sweet.</div>
            <div>The rose has a <span>< SelectWord /> </span> Fragrance.</div>
            <div><span>< SelectWord /> </span> fragrances are characterized by aromatic or citrus heady notes.</div>
        </div>
    )
}