export default function WordList() {
    const words = ['word', 'another word', 'long wooord', 'really looooong wordddd', 'word', 'hard word']
    return (
        <div>
            {words.map(word => {
                return <div className='inline-block bg-[#CDEDFA] px-3 py-[3px] mr-2 mb-2 rounded
                                       font-inter font-normal text-lg text-[#203B54]'>{word}</div>
            })}
        </div>
    )
}