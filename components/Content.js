import Tasks from "./Tasks";
import SideBar from "./SideBar";
import WordList from "./WordList";

export default function Content({sections, type}) {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between my-[34px] w-[1200px]'>
                {type === 'tasks' ? <Tasks/> : type === 'wordlist' ? <WordList/> : null}
                <SideBar sections={sections}/>
            </div>
        </div>
    )
}