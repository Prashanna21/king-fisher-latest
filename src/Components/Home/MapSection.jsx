import { useState } from "react";
import {
  TrainFront,
  Plane,
  Briefcase,
  ShoppingBag,
  MapPin,
} from "lucide-react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// === ICONS ===
const redIcon = new L.Icon({
  iconUrl: "/marker/location-marker-red.png",
  iconSize: [32, 32],
});
const blueIcon = new L.Icon({
  iconUrl: "/marker/location-marker-blue.png",
  iconSize: [32, 32],
});

// === CATEGORY BUTTONS ===
const locationCategories = [
  { id: "transportation", name: "Transport", icon: <TrainFront size={18} /> },
  { id: "business", name: "Business", icon: <Briefcase size={18} /> },
  { id: "shopping", name: "Shopping", icon: <ShoppingBag size={18} /> },
  { id: "airports", name: "Airports", icon: <Plane size={18} /> },
  { id: "locations", name: "Locations", icon: <MapPin size={18} /> },
];

// === DUMMY DATA ===
const locations = [
  // Locations
  {
    name: "Burj Khalifa",
    lat: 25.1972,
    lng: 55.2744,
    label: "Burj Khalifa",
    category: "locations",
    images: ["/gallery/img1.jpg"],
  },
  {
    name: "Palm Jumeirah",
    lat: 25.1122,
    lng: 55.1386,
    label: "Palm Jumeirah",
    category: "locations",
    images: ["/gallery/img1.jpg"],
  },

  // Transportation
  {
    name: "Dubai Metro Station",
    lat: 25.2512,
    lng: 55.323,
    label: "Metro",
    category: "transportation",
    images: ["/gallery/img1.jpg"],
  },

  // Business
  {
    name: "Business Bay",
    lat: 25.1845,
    lng: 55.2727,
    label: "Business Bay",
    category: "business",
    images: ["/gallery/img1.jpg"],
  },

  // Shopping
  {
    name: "Dubai Mall",
    lat: 25.1985,
    lng: 55.2795,
    label: "Dubai Mall",
    category: "shopping",
    images: ["/gallery/img1.jpg"],
  },

  // Airports
  {
    name: "Dubai International Airport",
    lat: 25.2532,
    lng: 55.3657,
    label: "DXB Airport",
    category: "airports",
    images: ["/gallery/img1.jpg"],
  },
];

// === Map center controller ===
const MapController = ({ center }) => {
  const map = useMap();
  map.setView(center, 12);
  return null;
};

// === Tooltip Image Viewer ===
const TooltipSlider = ({ images, name, distance, selectedLabel }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-[220px] h-[260px] text-center rounded-xl bg-white p-2.5 shadow-lg z-10 relative">
      <h3 className="font-semibold text-sm text-blue-800 mb-1.5">{name}</h3>
      <div className="relative w-full h-[180px] overflow-hidden rounded-lg">
        <img
          src={images[index]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-xs mt-2 text-blue-800">
        Distance from {selectedLabel}: {distance} km
      </div>
    </div>
  );
};

// === MAIN MAP WITH TABS ===
const DubaiMapWithTabs = ({
  selectedLocation,
  selectedCategory,
  setSelectedCategory,
  setSelectedLocation,
}) => {
  const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);
  const filteredLocations = locations.filter(
    (loc) => loc.category === selectedCategory
  );

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-row justify-center items-center gap-2 flex-wrap mb-4">
        {locationCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              const first = locations.find(
                (loc) => loc.category === category.id
              );
              if (first) setSelectedLocation(first);
            }}
            className={`flex items-center gap-1 px-4 py-3 rounded-xl transition-all ${
              selectedCategory === category.id
                ? "bg-[#ff9500] text-white shadow-md"
                : "bg-[#0E1C41] text-[#F6BC6D] hover:bg-[#1e2e5e]"
            }`}
          >
            {category.icon}
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Map */}
      <MapContainer
        center={[selectedLocation.lat, selectedLocation.lng]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-[520px] w-full rounded-2xl"
        maxBounds={[
          [24.9, 54.8],
          [25.5, 55.7],
        ]}
        maxBoundsViscosity={1.0}
      >
        <MapController center={[selectedLocation.lat, selectedLocation.lng]} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {filteredLocations.map((location, idx) => {
          const distance =
            L.latLng(selectedLocation.lat, selectedLocation.lng).distanceTo(
              L.latLng(location.lat, location.lng)
            ) / 1000;
          return (
            <Marker
              key={idx}
              position={[location.lat, location.lng]}
              icon={redIcon}
              eventHandlers={{
                mouseover: () => setActiveTooltipIndex(idx),
                mouseout: () => setActiveTooltipIndex(null),
              }}
            >
              {activeTooltipIndex === idx && (
                <Tooltip
                  direction="top"
                  offset={[0, -10]}
                  opacity={1}
                  interactive
                >
                  <TooltipSlider
                    images={location.images}
                    name={location.name}
                    distance={distance.toFixed(2)}
                    selectedLabel={selectedLocation.label}
                  />
                </Tooltip>
              )}
            </Marker>
          );
        })}

        {/* Blue marker for selected location */}
        <Marker
          position={[selectedLocation.lat, selectedLocation.lng]}
          icon={blueIcon}
        >
          <Tooltip permanent>{selectedLocation.label}</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

// === PARENT COMPONENT ===
const LocationSelector = () => {
  const defaultLocation =
    locations.find((loc) => loc.category === "locations") || locations[0];
  const [selectedCategory, setSelectedCategory] = useState("locations");
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  return (
    <section className="w-full px-6 md:px-20 py-16" id="location">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest text-[#F6BC6D] heading-font">
          LOCATION
        </h2>
      </div>
      <DubaiMapWithTabs
        selectedLocation={selectedLocation}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSelectedLocation={setSelectedLocation}
      />
    </section>
  );
};

export default LocationSelector;
