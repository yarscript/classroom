export default function Words() {
    const words = ['word', 'another word', 'long wooord', 'really looooong wordddd', 'words', 'hard word']
    return (
        <div>
            {words.map(word => {
                // CHANGE KEY
                return <div key={word.length} className='cursor-pointer transition duration-300 inline-block bg-lightBlue hover:bg-lightBlue/70 px-3 py-[3px] mr-2 mb-2 rounded
                                       font-inter font-normal text-lg text-textColor'>{word}</div>
            })}
        </div>
    )
}