import Tasks from "@/components/Tasks";
import SideBar from "@/components/SideBar";

export default function Content() {
    return (
        <div className='flex justify-between my-[34px] mx-[10.5%]'>
            <Tasks />
            <SideBar />
        </div>
    )
}