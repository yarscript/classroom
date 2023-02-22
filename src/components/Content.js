import Tasks from "@/components/Tasks";
import SideBar from "@/components/SideBar";
import WordList from "@/components/WordList";

export default function Content({sections, type}) {
    return (
        <div className='flex justify-between my-[34px] mx-[10.5%]'>
            {type === 'tasks' ? <Tasks/> : type === 'wordlist' ? <WordList/> : null}
            <SideBar sections={sections}/>
        </div>
    )
}