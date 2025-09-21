import React, { useState } from 'react';
import type { MenuItem } from '../../types';
import { toast } from 'sonner';
import { Menu } from 'iconsax-react';
import { Button } from '../ui/Button';
import { 
  Home2, 
  People, 
  Security, 
  Briefcase, 
  Profile2User, 
  ClipboardText, 
  MessageText1, 
  Heart, 
  SearchNormal1,
  ArrowDown2
} from 'iconsax-react';
import { Link } from 'react-router-dom';

// Icon Map
const ICONS: { [key: string]: React.ReactNode } = {
  Home: <Home2 size={24} color="#9ca3af" />,
  Users: <People size={24} color="#9ca3af" />,
  Shield: <Security size={24} color="#9ca3af" />,
  Briefcase: <Briefcase size={24} color="#9ca3af" />,
  User: <Profile2User size={24} color="#9ca3af" />,
  Clipboard: <ClipboardText size={24} color="#9ca3af" />,
  Mail: <MessageText1 size={24} color="#9ca3af" />,
  Heart: <Heart size={24} color="#9ca3af" />,
  Search: <SearchNormal1 size={24} color="#9ca3af" />,
};

interface SidebarMenuItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item, isCollapsed }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        if(item.children) {
            e.preventDefault();
            setIsOpen(!isOpen);
        } else if (item.href === '#') {
            e.preventDefault();
            toast.info('این بخش هنوز در دست توسعه است.');
        }
    };
    
    return (
        <li className="relative group">
            <Link
                to={item.href || '#'}
                onClick={handleClick}
                className={`flex items-center p-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}
            >
                {ICONS[item.icon || 'Home']}
                <span className={`me-3 flex-1 whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
                {item.children && !isCollapsed && (
                     <ArrowDown2 
                        size={16} 
                        color="#9ca3af"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                     />
                )}
            </Link>
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
            {/* Hide submenu completely when collapsed */}
            {isCollapsed && item.children && (
                <div className="hidden">
                    <ul>
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
        <aside className={`bg-gray-900 border-r border-gray-700 h-screen flex-shrink-0 flex flex-col transition-all duration-300 overflow-hidden ${isCollapsed ? 'w-20' : 'w-64'}`}>
             <div className="flex items-center justify-center h-[73px] border-b border-gray-700 flex-shrink-0 px-3">
                 <Button
                   onClick={toggleCollapse}
                   variant="ghost"
                   size="sm"
                   className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-all duration-200"
                 >
                   <Menu 
                     size={20} 
                     className={`transition-transform duration-300 ${isCollapsed ? 'rotate-90' : ''}`}
                   />
                 </Button>
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
