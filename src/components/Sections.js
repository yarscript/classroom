
export default function Sections() {
    return (
        <>
            <h2>Sections</h2>
            <ul className="marker:content-[''] p-0 font-normal text-[18px] leading-7 text-[#63798D] font-['Inter'] ">
                <li className="list-item ">Lesson information</li>
                <li className="list-item">Warm up</li>
                <li className="list-item">Vocabulary clothes</li>
                <li className="marker:content-[''] bg-[url('/active_list_icon.svg')] bg-no-repeat pl-[20px] bg-[left_top_-7px] mb-[14px] text-[#203B54]">Video listening</li>
                <li className="list-item">After watching</li>
                <li className="list-item">Wrap up</li>
                <li className="list-item">Extra practice</li>
                <li className="list-item">Finish this unit</li>
            </ul>
        </>
    )
}