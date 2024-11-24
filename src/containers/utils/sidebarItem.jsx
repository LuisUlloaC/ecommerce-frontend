export default function SidebarItem({icon, href, label, show }) {
    return (
        <li>
            <a href={href} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               {icon}
                {show && <span className="ms-3">{label}</span>}
            </a>
        </li>
    )
}