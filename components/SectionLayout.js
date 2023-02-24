export default function SectionLayout({ children, isOpen }) {
    return (
        <div className={`section-layout accordion-content${isOpen ? '' : '-hidden'}`}>{children}</div>
    )
}