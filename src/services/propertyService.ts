import api from "./api";

interface Property {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  mainImage?: string;
  image?: string;
  imageUrl?: string;
  location?: string;
  Location?: string;
  price?: number;
  priceFrom?: string;
  beds?: number;
  bedrooms?: number;
  Beds?: number;
  baths?: number;
  bathrooms?: number;
  Baths?: number;
  area?: number;
  sqft?: number;
  size?: string;
  propertyType?: { name: string };
  type?: string;
  Type?: string;
  developer?: string;
  Developer?: string;
  status?: string;
  Status?: string;
  featured?: boolean;
  galleryImages?: any[];
  images?: any[];
}

interface ApiResponse {
  success: boolean;
  data: Property[];
}

interface SinglePropertyResponse {
  success: boolean;
  data: Property;
}

export async function fetchActiveProperties(): Promise<Property[]> {
  const res = await api.get<ApiResponse>('properties/active');
  return res.data.data;
}

export async function fetchPropertyById(id: string): Promise<Property> {
  const res = await api.get<SinglePropertyResponse>(`properties/${id}`);
  return res.data.data;
}

export async function fetchPropertiesByType(type: string): Promise<Property[]> {
  const res = await api.get<ApiResponse>(`properties/type/${type}`);
  return res.data.data;
}

// Helper function to transform backend data to frontend format
export function transformPropertyData(property: Property) {
  return {
    _id: property._id || property.id,
    name: property.name || property.title,
    mainImage: property.mainImage || property.image || property.imageUrl,
    location: property.location || property.Location,
    price: property.price || property.priceFrom,
    beds: property.beds || property.bedrooms || property.Beds,
    baths: property.baths || property.bathrooms || property.Baths,
    area: property.area || property.sqft || property.size,
    propertyType: property.propertyType || { name: property.type || property.Type },
    developer: property.developer || property.Developer,
    status: property.status || property.Status,
    featured: property.featured || false,
    galleryImages: property.galleryImages || property.images || [],
  };
}