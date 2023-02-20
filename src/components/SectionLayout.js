export default function SectionLayout({ children, isOpen }) {
    return (
        <div className='mt-8' style={isOpen ? {display: "block"} : {display: "none"}}>{children}</div>
    )
}