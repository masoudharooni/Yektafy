import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "../ui/dialog";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { X } from "lucide-react";

// تعریف پراپ‌های کامپوننت جدید
interface ModalComponentProps {
    open: boolean;
    onClose: () => void;
    header?: React.ReactNode;
    children: React.ReactNode;
    actionButton?: React.ReactNode;
    // این پراپ مشخص می‌کند که آیا مودال در موبایل تمام صفحه شود یا نه
    // autoFullScreen?: boolean;
    // این پراپ برای کنترل عرض مودال در دسکتاپ است
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
}

const ModalComponent: React.FC<ModalComponentProps> = ({
    open,
    onClose,
    header,
    children,
    actionButton,
    // autoFullScreen = true,
    maxWidth = "sm",
}) => {
    // Handle browser back button
    React.useEffect(() => {
        if (!open) return;

        const handlePopState = () => {
            onClose();
            console.log("Modal closed via back button");
        };

        // Push a new state when modal opens
        window.history.pushState({ modalOpen: true }, "");
        // window.history.pushState({ notificationOpen: true }, '');
        console.log("Modal opened");
        // Listen for popstate (back button)
        window.addEventListener("popstate", handlePopState);

        return () => {
            window.history.pushState({ modalOpen: false }, "");
            console.log("Modal closed");
            window.removeEventListener("popstate", handlePopState);
        };
    }, [open, onClose]);

    // یک تابع برای تبدیل پراپ maxWidth به کلاس‌های Tailwind
    const getMaxWidthClass = React.useCallback(() => {
        switch (maxWidth) {
            case "md":
                return "sm:max-w-md";
            case "lg":
                return "sm:max-w-lg";
            case "xl":
                return "sm:max-w-xl";
            case "2xl":
                return "sm:max-w-2xl";
            case "3xl":
                return "sm:max-w-3xl";
            case "4xl":
                return "sm:max-w-4xl";
            case "5xl":
                return "sm:max-w-5xl";
            case "6xl":
                return "sm:max-w-6xl";
            case "7xl":
                return "sm:max-w-7xl";
            default:
                return "sm:max-w-sm";
        }
    }, [maxWidth]);

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent
                className={cn(
                    "p-0 gap-0 flex flex-col h-full sm:h-fit sm:max-h-[90vh] bg-gray-900 border-gray-700",
                    // اگر autoFullScreen فعال باشد، در موبایل تمام صفحه می‌شود
                    // autoFullScreen && "h-full sm:h-fit",
                    getMaxWidthClass()
                )}
                onInteractOutside={(e) => {
                    // جلوگیری از بسته شدن مودال با کلیک روی پس‌زمینه
                    e.preventDefault();
                }}
            >
                {/* بخش هدر مودال */}
                {header && (
                    <DialogHeader className="flex-row items-center justify-between border-b border-gray-700 p-4 flex-shrink-0">
                        <DialogTitle className="text-lg font-bold text-gray-100">{header}</DialogTitle>
                        <DialogClose asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-gray-200 hover:bg-gray-700">
                                <X className="h-5 w-5" />
                            </Button>
                        </DialogClose>
                    </DialogHeader>
                )}

                {/* بخش محتوای اصلی مودال */}
                <div className="p-6 overflow-y-scroll flex-1">
                    {children}
                </div>

                {/* بخش دکمه‌ها (فوتر) */}
                {actionButton && (
                    <DialogFooter className="border-t border-gray-700 p-4 flex-shrink-0">
                        {actionButton}
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ModalComponent;
