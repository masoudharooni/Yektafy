import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Share2,
  Bookmark,
  MapPin,
  Clock,
  Users,
  AlertTriangle,
  Phone,
  Flag,
  Copy,
  MessageCircle,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import ImageGallery from "../components/custom/ImageGallery";
import MapComponent from "../components/MapComponent";
import ModalComponent from "../components/custom/ModalComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sampleProperties } from "../data/properties";

const ListingDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<(typeof sampleProperties)[0] | null>(
    null
  );
  const [isSaved, setIsSaved] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProperty = sampleProperties.find((p) => p.id === id);
      if (foundProperty) {
        setProperty(foundProperty);
      }
    }
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">آگهی یافت نشد</div>
      </div>
    );
  }

  // Generate multiple images for the property
  const generatePropertyImages = () => {
    const baseImages = [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    ];
    return baseImages;
  };

  const propertyImages = generatePropertyImages();
  const randomHours = Math.floor(Math.random() * 24) + 1;
  const randomCity = ["اصفهان", "تهران", "شیراز", "مشهد", "تبریز"][
    Math.floor(Math.random() * 5)
  ];
  const randomNeighborhood = [
    "نصرآباد",
    "ملاصدرا",
    "چهارباغ",
    "خواجو",
    "فردوسی",
  ][Math.floor(Math.random() * 5)];

  const formatPrice = (price: number): string => {
    return price.toLocaleString("fa-IR");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: property.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Here you would typically save to localStorage or send to backend
  };

  const handleCopyPhone = async () => {
    const phoneNumber = "09123456789";
    try {
      await navigator.clipboard.writeText(phoneNumber);
      // You could show a toast notification here
      console.log("Phone number copied to clipboard");
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-800 border-b border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-300">
            <button
              onClick={() => navigate("/")}
              className="hover:text-white transition-colors duration-200"
            >
              املاک
            </button>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <button
              onClick={() => navigate("/listings")}
              className="hover:text-white transition-colors duration-200"
            >
              اجاره کوتاه مدت
            </button>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <span className="text-white">اجاره کوتاه مدت ویلا و باغ</span>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <span className="text-white truncate max-w-xs">
              {property.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Right Side - Property Details */}
          <div className="space-y-6">
            {/* Title and Time */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-2 leading-relaxed">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>
                  {randomHours} ساعت پیش در {randomCity}، {randomNeighborhood}
                </span>
              </div>
            </div>

            {/* Warning Section */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-yellow-500 font-medium mb-1">
                    زنگ خطرهای قبل از معامله
                  </h3>
                  <p className="text-gray-300 text-sm">
                    قبل از هرگونه پرداخت، حتماً ملک را از نزدیک مشاهده کنید و
                    مدارک مالکیت را بررسی نمایید.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={() => setShowContactInfo(true)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3"
              >
                اطلاعات تماس
                <Phone className="w-4 h-4 mr-2" />
              </Button>

              <Button
                onClick={handleSave}
                className={`px-4 py-3 transition-all duration-200 ${isSaved
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  }`}
              >
                <Bookmark
                  className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`}
                />
              </Button>

              <Button
                onClick={handleShare}
                className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 transition-all duration-200"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 text-sm mb-1">متراژ</div>
                <div className="text-white font-bold text-lg">۱۰۰۰</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 text-sm mb-1">اتاق</div>
                <div className="text-white font-bold text-lg">
                  {property.rooms}
                </div>
              </div>
            </div>

            {/* Image Verification */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">
                  تصویرها برای همین ملک است؟
                </span>
                <span className="text-green-500 font-medium">بله</span>
              </div>
            </div>

            {/* Capacity */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-white font-medium">ظرفیت</span>
              </div>
              <div className="text-gray-300">
                تا {property.maxOccupancy} نفر ({property.maxOccupancy - 1} + ۱
                نفر اضافه)
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4">اجاره</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">روزهای عادی</span>
                  <span className="text-white font-bold">
                    {formatPrice(property.price)} تومان / شب
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">آخر هفته</span>
                  <span className="text-white font-bold">
                    {formatPrice(property.price * 1.5)} تومان / شب
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">تعطیلات و مناسبت ها</span>
                  <span className="text-white font-bold">
                    {formatPrice(property.price * 2)} تومان / شب
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">هزینه هر نفر اضافه</span>
                  <span className="text-white font-bold">
                    {formatPrice(property.price * 0.2)} تومان / شب
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">بررسی و کارشناسی</span>
                  <span className="text-white font-bold">
                    {formatPrice(property.price * 0.1)} تومان / شب
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4">توضیحات</h3>
              <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                <p>فاصله تا سی و سه پل ۲۰ دقیقه</p>
                <p>
                  حداکثر تعداد پذیرش {property.maxOccupancy} نفر - بیشتر از{" "}
                  {property.maxOccupancy} نفر نداریم تماس نگیرید
                </p>
                <p>ویلا لاکچری با وسایل کاملاً نو مخصوص افراد سخت‌پسند</p>
                <p>مستقیم از مالک می‌گیرید</p>
                <p>تحویل ۱۴ تخلیه ۱۲ ظهر</p>
                <p>
                  باغ هزار متری ساختمان ۴۰۰ متر استخر آبگرم سرپوشیده مجهز به
                  تسویه فیلتراسیون قوی و کلر زن اتوماتیک استخر واقعاً بی‌نظیره
                  از تمیزی تعویض آب هفتگی
                </p>
                <p>واقع در {randomNeighborhood}</p>
                <p>همه چی تموم از هر لحاظ</p>
                <p>بر خیابان اصلی امنیت فوق‌العاده</p>
                <p>مجهز به سیستم صوتی و رقص نور</p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <button className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
                اجاره کوتاه مدت ویلا و باغ
              </button>
              <button className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
                اجاره کوتاه مدت ویلا و باغ در {randomNeighborhood}
              </button>
            </div>
          </div>

          {/* Left Side - Images and Map */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <ImageGallery images={propertyImages} title={property.title} />

            {/* Map Section */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                موقعیت مکانی
              </h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <MapComponent
                  center={[32.6546, 51.668]} // Isfahan coordinates
                  zoom={13}
                  markers={[
                    {
                      position: [32.6546, 51.668],
                      title: property.title,
                      description: `${randomCity}، ${randomNeighborhood}`,
                    },
                  ]}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Report Ad Button */}
            <Button className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 transition-all duration-200">
              گزارش آگهی
              <Flag className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Modal */}
      <ModalComponent
        open={showContactInfo}
        onClose={() => setShowContactInfo(false)}
        header="اطلاعات تماس مالک"
        maxWidth="lg"
      >
        <div className="space-y-6">
          {/* Property Info */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-2">اطلاعات ملک</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">عنوان:</span>
                <p className="text-white font-medium">{property.title}</p>
              </div>
              <div>
                <span className="text-gray-400">محله:</span>
                <p className="text-white font-medium">{property.neighborhood}</p>
              </div>
              <div>
                <span className="text-gray-400">دسته‌بندی:</span>
                <p className="text-white font-medium">{property.category}</p>
              </div>
              <div>
                <span className="text-gray-400">قیمت:</span>
                <p className="text-white font-medium">{formatPrice(property.price)} تومان</p>
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-2xl">م</span>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-xl">مالک ملک</h4>
              <p className="text-gray-300 text-sm mt-1">مستقیم از مالک - بدون واسطه</p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-white font-mono text-xl bg-gray-800 px-3 py-2 rounded-lg">۰۹۱۲۳۴۵۶۷۸۹</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyPhone}
                  className="text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-2"
                >
                  <Copy className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white py-4 text-lg">
              <Phone className="w-6 h-6 mr-3" />
              تماس تلفنی
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 py-4 text-lg">
              <MessageCircle className="w-6 h-6 mr-3" />
              ارسال پیام
            </Button>
          </div>

          {/* Safety Tips */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="text-yellow-500 font-bold mb-2 text-lg">نکات امنیتی مهم</h5>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>قبل از تماس، حتماً ملک را از نزدیک مشاهده کنید</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>مدارک مالکیت و هویت مالک را بررسی نمایید</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>از پرداخت پیش‌پرداخت قبل از معامله خودداری کنید</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>در صورت مشکوک بودن، با پشتیبانی یکتافی تماس بگیرید</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Hours */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h5 className="text-white font-medium mb-2">ساعات تماس</h5>
            <div className="text-gray-300 text-sm space-y-1">
              <p>شنبه تا پنج‌شنبه: ۹ صبح تا ۶ عصر</p>
              <p>جمعه: ۱۰ صبح تا ۲ عصر</p>
              <p className="text-gray-400 text-xs mt-2">در ساعات غیر اداری پیام بگذارید</p>
            </div>
          </div>
        </div>
      </ModalComponent>

      <Footer />
    </div>
  );
};

export default ListingDetailsPage;
