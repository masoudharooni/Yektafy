import React, { useState } from 'react';
import type { MenuItem } from '../../types';
import { useShowToast } from '../../contexts/ToastContext';
import { 
  MdHome, 
  MdPeople, 
  MdSecurity, 
  MdWork, 
  MdPerson, 
  MdAssignment, 
  MdMail, 
  MdFavorite, 
  MdSearch,
  MdArrowBack,
  MdKeyboardArrowDown
} from 'react-icons/md';

// Icon Map
const ICONS: { [key: string]: React.ReactNode } = {
  Home: <MdHome size={24} />,
  Users: <MdPeople size={24} />,
  Shield: <MdSecurity size={24} />,
  Briefcase: <MdWork size={24} />,
  User: <MdPerson size={24} />,
  Clipboard: <MdAssignment size={24} />,
  Mail: <MdMail size={24} />,
  Heart: <MdFavorite size={24} />,
  Search: <MdSearch size={24} />,
};

interface SidebarMenuItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item, isCollapsed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const showToast = useShowToast();

    const handleClick = (e: React.MouseEvent) => {
        if(item.children) {
            e.preventDefault();
            setIsOpen(!isOpen);
        } else if (item.href === '#') {
            e.preventDefault();
            showToast('این بخش هنوز توسعه داده نشده است.');
        }
    };
    
    return (
        <li className="relative group">
            <a
                href={item.href || '#'}
                onClick={handleClick}
                className={`flex items-center p-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}
            >
                {ICONS[item.icon || 'Home']}
                <span className={`me-3 flex-1 whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>{item.label}</span>
                {item.children && !isCollapsed && (
                     <MdKeyboardArrowDown 
                        size={16} 
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                     />
                )}
            </a>
            {isCollapsed && (
                <div className="absolute end-full top-1/2 -translate-y-1/2 me-2 hidden group-hover:block px-2 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg z-20 whitespace-nowrap">
                    {item.label}
                </div>
            )}
            {!isCollapsed && item.children && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className="pe-6 space-y-1 mt-1">
                        {item.children.map(child => <SidebarMenuItem key={child.label} item={child} isCollapsed={isCollapsed} />)}
                    </ul>
                </div>
            )}
        </li>
    )
}

interface SidebarProps {
    menuItems: MenuItem[];
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, isCollapsed, toggleCollapse }) => {
    return (
        <aside className={`bg-gray-900 border-r border-gray-700 h-screen flex-shrink-0 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
             <div className="flex items-center justify-center h-[73px] border-b border-gray-700 flex-shrink-0 px-3">
                 <button onClick={toggleCollapse} className="p-2 rounded-lg text-gray-400 hover:bg-gray-700 transition-colors duration-200">
                    <MdArrowBack 
                        size={24} 
                        className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                 </button>
             </div>
             <div className="flex-1 px-3 py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    {menuItems.map(item => <SidebarMenuItem key={item.label} item={item} isCollapsed={isCollapsed} />)}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
