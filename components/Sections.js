import Link from "next/link";
export default function Sections({sections}) {
    return (
        <>
            <h2>Sections</h2>
            <ul className="marker:content-[''] p-0 font-normal text-[18px] leading-7 text-[#63798D] font-inter my-[19px]">
                {sections.map(section =>
                    <Link key={section.id} href={{pathname: `/${section.title}`}}>
                        <li className={`list-item${section.id === 3 ? '-active' : ''}`}>{section.name}</li>
                    </Link>)}
            </ul>
        </>
    )
}