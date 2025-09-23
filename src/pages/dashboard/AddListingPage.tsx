import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { 
  ArrowRight, 
  ArrowLeft,
  Building, 
  MapPin, 
  Upload,
  Image,
  Plus,
  Trash,
  Save,
  Home,
  Building2,
  Key,
  Car,
  ArrowUpDown,
  Square,
  Package,
  CheckCircle,
  Info,
  Waves,
  TreePine
} from 'lucide-react';

// Validation Schema
const listingSchema = z.object({
  // Basic Information
  title: z.string().min(5, 'عنوان باید حداقل ۵ کاراکتر باشد'),
  description: z.string().min(10, 'توضیحات باید حداقل ۱۰ کاراکتر باشد'),
  propertyType: z.string().min(1, 'نوع ملک الزامی است'),
  type: z.string().min(1, 'نوع معامله الزامی است'),
  price: z.string().min(1, 'قیمت الزامی است'),
  area: z.string().min(1, 'متراژ الزامی است'),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  floor: z.string().optional(),
  totalFloors: z.string().optional(),
  yearBuilt: z.string().optional(),
  
  // Location
  location: z.string().min(3, 'موقعیت باید حداقل ۳ کاراکتر باشد'),
  address: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string().min(1, 'شهر الزامی است'),
  
  // Features
  parking: z.boolean(),
  elevator: z.boolean(),
  balcony: z.boolean(),
  storage: z.boolean(),
  pool: z.boolean(),
  garden: z.boolean(),
  
  // Additional
  features: z.array(z.string()).default(['']),
  images: z.array(z.string()).default([]),
  status: z.string().default('فعال')
});

type ListingFormData = z.infer<typeof listingSchema>;

const AddListingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const form = useForm<ListingFormData>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      // Basic Information
      title: '',
      description: '',
      propertyType: '',
      type: '',
      price: '',
      area: '',
      bedrooms: '',
      bathrooms: '',
      floor: '',
      totalFloors: '',
      yearBuilt: '',
      
      // Location
      location: '',
      address: '',
      neighborhood: '',
      city: '',
      
      // Features
      parking: false,
      elevator: false,
      balcony: false,
      storage: false,
      pool: false,
      garden: false,
      
      // Additional
      features: [''],
      images: [],
      status: 'فعال'
    }
  });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: 'features'
  });

  const steps = [
    { id: 1, title: 'اطلاعات پایه', icon: <Building className="h-5 w-5" /> },
    { id: 2, title: 'موقعیت مکانی', icon: <MapPin className="h-5 w-5" /> },
    { id: 3, title: 'ویژگی‌ها', icon: <CheckCircle className="h-5 w-5" /> },
    { id: 4, title: 'تصاویر', icon: <Image className="h-5 w-5" /> },
    { id: 5, title: 'تایید نهایی', icon: <Save className="h-5 w-5" /> }
  ];

  const propertyTypes = [
    { value: 'آپارتمان', label: 'آپارتمان', icon: <Building className="h-4 w-4" /> },
    { value: 'ویلا', label: 'ویلا', icon: <Home className="h-4 w-4" /> },
    { value: 'پنت‌هاوس', label: 'پنت‌هاوس', icon: <Building2 className="h-4 w-4" /> },
    { value: 'استودیو', label: 'استودیو', icon: <Key className="h-4 w-4" /> },
    { value: 'زمین', label: 'زمین', icon: <MapPin className="h-4 w-4" /> },
    { value: 'مغازه', label: 'مغازه', icon: <Building className="h-4 w-4" /> }
  ];

  const cities = ['تهران', 'اصفهان', 'مشهد', 'شیراز', 'تبریز', 'کرج', 'اهواز', 'قم'];

  const addFeature = () => {
    appendFeature('');
  };

  const nextStep = async () => {
    let isValid = true;
    
    // Validate current step fields
    if (currentStep === 1) {
      isValid = await form.trigger(['title', 'description', 'propertyType', 'type', 'price', 'area']);
    } else if (currentStep === 2) {
      isValid = await form.trigger(['city', 'location']);
    }
    
    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: ListingFormData) => {
    console.log('Listing data:', data);
    alert('آگهی با موفقیت ثبت شد!');
    navigate('/dashboard/listings');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">اطلاعات پایه ملک</h3>
              <p className="text-gray-400 mb-6">اطلاعات اصلی ملک خود را وارد کنید</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-300">عنوان آگهی *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="مثال: آپارتمان ۳ خوابه در چهارباغ بالا"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control} 
                name="description"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-300">توضیحات *</FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="توضیحات کامل ملک..."
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">نوع ملک *</FormLabel>
                    <FormControl>
                      <select
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
                        {...field}
                      >
                        <option value="">نوع ملک را انتخاب کنید</option>
                        {propertyTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">نوع معامله *</FormLabel>
                    <FormControl>
                      <select
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
                        {...field}
                      >
                        <option value="">نوع معامله را انتخاب کنید</option>
                        <option value="فروش">فروش</option>
                        <option value="اجاره">اجاره</option>
                      </select>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">قیمت (تومان) *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="15000000000"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">متراژ (متر مربع) *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="150"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">تعداد اتاق خواب</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="3"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">تعداد حمام</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="2"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="floor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">طبقه</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="8"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="totalFloors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">تعداد کل طبقات</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="12"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearBuilt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">سال ساخت</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="1395"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">موقعیت مکانی</h3>
              <p className="text-gray-400 mb-6">اطلاعات موقعیت و آدرس ملک را وارد کنید</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">شهر *</FormLabel>
                    <FormControl>
                      <select
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
                        {...field}
                      >
                        <option value="">شهر را انتخاب کنید</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">محله</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ونک"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-300">آدرس کامل</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="آدرس کامل ملک..."
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-300">موقعیت کلی *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ونک، اصفهان"
                        className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">ویژگی‌های ملک</h3>
              <p className="text-gray-400 mb-6">ویژگی‌ها و امکانات ملک را مشخص کنید</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Amenities Section */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-6">امکانات ملک</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="parking"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            onClick={() => field.onChange(!field.value)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                              field.value
                                ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className={`p-3 rounded-full transition-all duration-300 ${
                                field.value
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50'
                              }`}>
                                <Car className="h-6 w-6" />
                              </div>
                              <span className={`text-sm font-medium transition-colors ${
                                field.value ? 'text-cyan-300' : 'text-gray-300'
                              }`}>
                                پارکینگ
                              </span>
                              {field.value && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="elevator"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            onClick={() => field.onChange(!field.value)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                              field.value
                                ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className={`p-3 rounded-full transition-all duration-300 ${
                                field.value
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50'
                              }`}>
                                <ArrowUpDown className="h-6 w-6" />
                              </div>
                              <span className={`text-sm font-medium transition-colors ${
                                field.value ? 'text-cyan-300' : 'text-gray-300'
                              }`}>
                                آسانسور
                              </span>
                              {field.value && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="balcony"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            onClick={() => field.onChange(!field.value)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                              field.value
                                ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className={`p-3 rounded-full transition-all duration-300 ${
                                field.value
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50'
                              }`}>
                                <Square className="h-6 w-6" />
                              </div>
                              <span className={`text-sm font-medium transition-colors ${
                                field.value ? 'text-cyan-300' : 'text-gray-300'
                              }`}>
                                بالکن
                              </span>
                              {field.value && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="storage"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            onClick={() => field.onChange(!field.value)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                              field.value
                                ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className={`p-3 rounded-full transition-all duration-300 ${
                                field.value
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50'
                              }`}>
                                <Package className="h-6 w-6" />
                              </div>
                              <span className={`text-sm font-medium transition-colors ${
                                field.value ? 'text-cyan-300' : 'text-gray-300'
                              }`}>
                                انباری
                              </span>
                              {field.value && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pool"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            onClick={() => field.onChange(!field.value)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                              field.value
                                ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className={`p-3 rounded-full transition-all duration-300 ${
                                field.value
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50'
                              }`}>
                                <Waves className="h-6 w-6" />
                              </div>
                              <span className={`text-sm font-medium transition-colors ${
                                field.value ? 'text-blue-300' : 'text-gray-300'
                              }`}>
                                استخر
                              </span>
                              {field.value && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="garden"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            onClick={() => field.onChange(!field.value)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                              field.value
                                ? 'border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20'
                                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className={`p-3 rounded-full transition-all duration-300 ${
                                field.value
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50'
                              }`}>
                                <TreePine className="h-6 w-6" />
                              </div>
                              <span className={`text-sm font-medium transition-colors ${
                                field.value ? 'text-green-300' : 'text-gray-300'
                              }`}>
                                باغ
                              </span>
                              {field.value && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Additional Features Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-200">ویژگی‌های اضافی</h4>
                  <Button
                    type="button"
                    onClick={addFeature}
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 transition-all duration-300"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 ml-1" />
                    افزودن
                  </Button>
                </div>

                <div className="space-y-4">
                  {featureFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`features.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center gap-3">
                              <Input
                                placeholder="ویژگی اضافی..."
                                className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                                {...field}
                              />
                              {featureFields.length > 1 && (
                                <Button
                                  type="button"
                                  onClick={() => removeFeature(index)}
                                  className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30 transition-all duration-300"
                                  size="sm"
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">تصاویر ملک</h3>
              <p className="text-gray-400 mb-6">تصاویر ملک خود را آپلود کنید</p>
            </div>

            <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-200 mb-2">آپلود تصاویر</h4>
              <p className="text-gray-400 mb-4">تصاویر ملک خود را اینجا بکشید یا کلیک کنید</p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                انتخاب فایل‌ها
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image className="h-8 w-8 text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">تایید نهایی</h3>
              <p className="text-gray-400 mb-6">اطلاعات آگهی خود را بررسی و تایید کنید</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">خلاصه آگهی</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">عنوان:</span>
                    <span className="text-gray-200 font-medium">{form.watch('title') || 'تعریف نشده'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">نوع ملک:</span>
                    <span className="text-gray-200 font-medium">{form.watch('propertyType')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">نوع معامله:</span>
                    <span className="text-gray-200 font-medium">{form.watch('type')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">قیمت:</span>
                    <span className="text-gray-200 font-medium">{form.watch('price') ? `${parseInt(form.watch('price')).toLocaleString()} تومان` : 'تعریف نشده'}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">متراژ:</span>
                    <span className="text-gray-200 font-medium">{form.watch('area') ? `${form.watch('area')} متر` : 'تعریف نشده'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">اتاق خواب:</span>
                    <span className="text-gray-200 font-medium">{form.watch('bedrooms') || 'تعریف نشده'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">موقعیت:</span>
                    <span className="text-gray-200 font-medium">{form.watch('location') || 'تعریف نشده'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">وضعیت:</span>
                    <span className="text-gray-200 font-medium">{form.watch('status')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="text-blue-400 font-medium mb-1">توجه</h4>
                  <p className="text-gray-300 text-sm">
                    پس از ثبت آگهی، امکان ویرایش آن در بخش مدیریت آگهی‌ها وجود دارد. 
                    آگهی شما پس از تایید مدیران در سایت نمایش داده خواهد شد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">افزودن آگهی جدید</h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">آگهی جدید خود را در چند مرحله ساده ثبت کنید</p>
          </div>
          <Button 
            type="button"
            className="bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-300 w-full sm:w-auto"
            onClick={() => navigate('/dashboard/listings')}
          >
            بازگشت به آگهی‌ها
            <ArrowLeft className="h-4 w-4 ml-2" />
          </Button>
        </div>

      {/* Progress Steps */}
      <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
        <CardContent className="p-4 sm:p-8">
          <div className="flex items-center justify-between relative overflow-x-auto pb-4">
            {/* Progress Line Background */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700/50 transform -translate-y-1/2 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                {/* Step Circle */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                  currentStep >= step.id
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800/80 border-gray-600 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    step.icon
                  )}
                </div>
                
                {/* Step Title */}
                <div className={`mt-3 text-center transition-all duration-300 ${
                  currentStep >= step.id
                    ? 'text-cyan-300'
                    : 'text-gray-400'
                }`}>
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-xs opacity-75">مرحله {step.id}</p>
                </div>
                
                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute top-6 left-12 w-full h-0.5 transition-all duration-500 ${
                    currentStep > step.id ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-700/50'
                  }`} style={{ width: 'calc(100% - 3rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card className="bg-gray-800/50 border-gray-700/50">
        <CardContent className="p-4 sm:p-8">
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed order-2 sm:order-1"
        >
          <ArrowRight className="h-4 w-4 ml-2" />
          مرحله قبلی
        </Button>

        <div className="flex items-center gap-3 order-1 sm:order-2">
          <Button
            onClick={() => navigate('/dashboard/listings')}
            className="bg-gray-700 text-gray-300 hover:bg-gray-600 flex-1 sm:flex-none"
          >
            انصراف
          </Button>
          
          {currentStep === steps.length ? (
            <Button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex-1 sm:flex-none"
            >
              <Save className="h-4 w-4 ml-2" />
              ثبت آگهی
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex-1 sm:flex-none"
            >
              مرحله بعدی
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Button>
          )}
        </div>
      </div>
      </form>
    </Form>
  );
};

export default AddListingPage;
