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
  Home: <Home className="h-6 w-6 text-gray-400" />,
  Users: <Users className="h-6 w-6 text-gray-400" />,
  Shield: <Shield className="h-6 w-6 text-gray-400" />,
  Briefcase: <Briefcase className="h-6 w-6 text-gray-400" />,
  User: <User className="h-6 w-6 text-gray-400" />,
  Clipboard: <Clipboard className="h-6 w-6 text-gray-400" />,
  Mail: <MessageSquare className="h-6 w-6 text-gray-400" />,
  Heart: <Heart className="h-6 w-6 text-gray-400" />,
  Search: <Search className="h-6 w-6 text-gray-400" />,
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
                            className={`w-full flex items-center p-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}
                            disabled={isCollapsed}
                        >
                            {ICONS[item.icon || 'Home']}
                            <span className={`me-3 flex-1 whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
                            {!isCollapsed && (
                                <ChevronDown 
                                    className="h-4 w-4 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                                />
                            )}
                        </button>
                    </CollapsibleTrigger>
                    {isCollapsed && (
                        <div className="absolute end-full top-1/2 -translate-y-1/2 me-2 hidden group-hover:block px-2 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg z-20 whitespace-nowrap">
                            {item.label}
                        </div>
                    )}
                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        <ul className="pe-6 space-y-1 mt-1">
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
                className={`flex items-center p-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}
            >
                {ICONS[item.icon || 'Home']}
                <span className={`me-3 flex-1 whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
            </Link>
            {isCollapsed && (
                <div className="absolute end-full top-1/2 -translate-y-1/2 me-2 hidden group-hover:block px-2 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg z-20 whitespace-nowrap">
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
        <aside className={`bg-gray-900 border-r border-gray-700 h-screen flex-shrink-0 flex flex-col transition-all duration-300 overflow-hidden ${isCollapsed ? 'w-20' : 'w-64'}`}>
             <div className="flex items-center justify-center h-[73px] border-b border-gray-700 flex-shrink-0 px-3">
                 <Button
                   onClick={toggleCollapse}
                   variant="ghost"
                   size="sm"
                   className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-all duration-200"
                 >
                   <Menu 
                     className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isCollapsed ? 'rotate-90' : ''}`}
                   />
                 </Button>
             </div>
             <div className="flex-1 px-3 py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
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
