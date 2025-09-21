export interface Location {
  id: string;
  name: string;
  district: string;
  coordinates: [number, number];
  type: 'city' | 'district' | 'neighborhood';
}

export const LOCATIONS: Location[] = [
  // Cities
  { id: 'tehran', name: 'تهران', district: 'تهران', coordinates: [35.6892, 51.3890], type: 'city' },
  { id: 'isfahan', name: 'اصفهان', district: 'اصفهان', coordinates: [32.6539, 51.6660], type: 'city' },
  { id: 'shiraz', name: 'شیراز', district: 'فارس', coordinates: [29.5918, 52.5837], type: 'city' },
  { id: 'mashhad', name: 'مشهد', district: 'خراسان رضوی', coordinates: [36.2605, 59.6168], type: 'city' },
  { id: 'tabriz', name: 'تبریز', district: 'آذربایجان شرقی', coordinates: [38.0804, 46.2919], type: 'city' },
  
  // Tehran Districts
  { id: 'vanak', name: 'ونک', district: 'تهران', coordinates: [35.7448, 51.3753], type: 'district' },
  { id: 'tajrish', name: 'تجریش', district: 'تهران', coordinates: [35.8044, 51.4256], type: 'district' },
  { id: 'saadatabad', name: 'سعادت‌آباد', district: 'تهران', coordinates: [35.7544, 51.3744], type: 'district' },
  { id: 'pasdaran', name: 'پاسداران', district: 'تهران', coordinates: [35.7444, 51.4244], type: 'district' },
  { id: 'farmanieh', name: 'فرمانیه', district: 'تهران', coordinates: [35.7744, 51.4344], type: 'district' },
  { id: 'jordan', name: 'جردن', district: 'تهران', coordinates: [35.7344, 51.4044], type: 'district' },
  { id: 'sheikhbahaie', name: 'شیخ‌بهایی', district: 'اصفهان', coordinates: [32.6639, 51.6760], type: 'district' },
  { id: 'chaharbagh', name: 'چهارباغ', district: 'اصفهان', coordinates: [32.6439, 51.6560], type: 'district' },
  
  // Neighborhoods
  { id: 'vanak-park', name: 'پارک ونک', district: 'ونک، تهران', coordinates: [35.7448, 51.3753], type: 'neighborhood' },
  { id: 'tajrish-bazaar', name: 'بازار تجریش', district: 'تجریش، تهران', coordinates: [35.8044, 51.4256], type: 'neighborhood' },
  { id: 'saadatabad-park', name: 'پارک سعادت‌آباد', district: 'سعادت‌آباد، تهران', coordinates: [35.7544, 51.3744], type: 'neighborhood' },
];

export const searchLocations = (query: string): Location[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return LOCATIONS.filter(location => 
    location.name.includes(query) || 
    location.district.includes(query) ||
    location.name.toLowerCase().includes(lowercaseQuery) ||
    location.district.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 8); // Limit to 8 results
};
