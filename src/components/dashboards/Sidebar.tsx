import React, { useState, useEffect } from 'react';
import type { MenuItem } from '../../types';
import { toast } from 'sonner';
import { Button } from '../ui/Button';
import { 
  Menu,
  Home, 
  Users, 
  Shield, 
  Briefcase, 
  User, 
  Clipboard, 
  MessageSquare, 
  Heart, 
  Search,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SIDEBAR_LINKS } from '../../constants';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

type UserRole = 'ADMIN' | 'AGENT' | 'CUSTOMER';

// Icon Map
const ICONS: { [key: string]: React.ReactNode } = {
  Home: <Home className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  Users: <Users className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  Shield: <Shield className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  Briefcase: <Briefcase className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  User: <User className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  Clipboard: <Clipboard className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  Mail: <MessageSquare className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  Heart: <Heart className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
  Search: <Search className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />,
};

interface SidebarMenuItemProps {
  item: MenuItem;
  isCollapsed: boolean;
  collapsibleState?: boolean;
  onCollapsibleChange?: (isOpen: boolean) => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ 
  item, 
  isCollapsed, 
  collapsibleState = false, 
  onCollapsibleChange 
}) => {
    const handleClick = (e: React.MouseEvent) => {
        if (item.href === '#') {
            e.preventDefault();
            toast.info('این بخش هنوز در دست توسعه است.');
        }
    };

    // If item has children, render as collapsible
    if (item.children) {
        return (
            <Collapsible open={collapsibleState} onOpenChange={onCollapsibleChange}>
                <li className="relative group">
                    <CollapsibleTrigger asChild>
                        <button
                            className={`w-full flex items-center gap-3 px-4 py-3 text-gray-300 rounded-xl hover:bg-gray-700/80 hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-700/20 ${isCollapsed ? 'justify-center px-2' : ''}`}
                            disabled={isCollapsed}
                        >
                            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                {ICONS[item.icon || 'Home']}
                            </div>
                            <span className={`flex-1 text-right font-medium transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                                {item.label}
                            </span>
                            {!isCollapsed && (
                                <ChevronDown 
                                    className="h-4 w-4 text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-hover:text-white"
                                />
                            )}
                        </button>
                    </CollapsibleTrigger>
                    {isCollapsed && (
                        <div className="absolute end-full top-1/2 -translate-y-1/2 me-3 hidden group-hover:block px-3 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg shadow-xl border border-gray-600 z-30 whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
                            <div className="absolute end-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                            {item.label}
                        </div>
                    )}
                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        <ul className="pe-4 space-y-1 mt-2">
                            {item.children.map(child => (
                                <SidebarMenuItem 
                                    key={child.label} 
                                    item={child} 
                                    isCollapsed={isCollapsed}
                                />
                            ))}
                        </ul>
                    </CollapsibleContent>
                </li>
            </Collapsible>
        );
    }

    // Regular menu item without children
    return (
        <li className="relative group">
            <Link
                to={item.href || '#'}
                onClick={handleClick}
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 rounded-xl hover:bg-gray-700/80 hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-700/20 ${isCollapsed ? 'justify-center px-2' : ''}`}
            >
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {ICONS[item.icon || 'Home']}
                </div>
                <span className={`flex-1 text-right font-medium transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                    {item.label}
                </span>
            </Link>
            {isCollapsed && (
                <div className="absolute end-full top-1/2 -translate-y-1/2 me-3 hidden group-hover:block px-3 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg shadow-xl border border-gray-600 z-30 whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="absolute end-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    {item.label}
                </div>
            )}
        </li>
    );
};

interface SidebarProps {
    role: UserRole;
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, isCollapsed, toggleCollapse }) => {
    const menuItems = SIDEBAR_LINKS[role];
    const [collapsibleStates, setCollapsibleStates] = useState<Record<string, boolean>>({});

    // Auto-close all submenus when sidebar collapses
    useEffect(() => {
        if (isCollapsed) {
            setCollapsibleStates({});
        }
    }, [isCollapsed]);

    // Function to handle collapsible state changes
    const handleCollapsibleChange = (itemId: string, isOpen: boolean) => {
        setCollapsibleStates(prev => ({
            ...prev,
            [itemId]: isOpen
        }));
    };
    
    return (
        <aside className={`bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700/50 h-screen flex-shrink-0 flex flex-col transition-all duration-500 ease-in-out overflow-hidden shadow-2xl ${isCollapsed ? 'w-20' : 'w-64'}`}>
             <div className="flex items-center justify-center h-[73px] border-b border-gray-700/50 flex-shrink-0 px-4 bg-gray-800/30 backdrop-blur-sm">
                 <Button
                   onClick={toggleCollapse}
                   variant="ghost"
                   size="sm"
                   className="p-3 text-gray-400 hover:text-white hover:bg-gray-700/80 transition-all duration-300 rounded-xl hover:shadow-lg hover:shadow-gray-700/20"
                 >
                   <Menu 
                     className={`h-5 w-5 transition-all duration-500 ${isCollapsed ? 'rotate-90' : 'rotate-0'}`}
                   />
                 </Button>
             </div>
             <div className="flex-1 px-3 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <ul className="space-y-3 font-medium">
                    {menuItems.map(item => (
                        <SidebarMenuItem 
                            key={item.label} 
                            item={item} 
                            isCollapsed={isCollapsed}
                            collapsibleState={collapsibleStates[item.id]}
                            onCollapsibleChange={(isOpen) => handleCollapsibleChange(item.id, isOpen)}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
