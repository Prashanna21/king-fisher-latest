const data = [
  {
    images: ["./gallery/img1.jpg", "./gallery/img2.jpg", "./gallery/img3.jpg", "./gallery/img4.jpg"],
    Name: "Fudly Apartment",
    priceFrom: "AED 2,000",
    Location: "Dubai",
    Developer: "Arada Properties",
    Type: "Apartment",
    Beds: "Studio",
    Status: "Sold Out"
  },
  {
    images: ["./gallery/img5.jpg", "./gallery/img6.jpg", "./gallery/img7.jpg", "./gallery/img8.jpg","./gallery/img1.jpg", "./gallery/img2.jpg"],
    Name: "Skyview Apartment",
    priceFrom: "AED 3,200",
    Location: "Abu Dhabi",
    Developer: "Emaar Properties",
    Type: "Apartment",
    Beds: "1 Bedroom",
    Status: "Available"

  },
  {
    images: ["./gallery/img9.jpg", "./gallery/img10.jpg", "./gallery/img11.jpg", "./gallery/img12.jpg"],
    Name: "Palm Residences",
    priceFrom: "AED 4,100",
    Location: "Palm Jumeirah",
    Developer: "Nakheel",
    Type: "Apartment",
    Beds: "2 Bedrooms",
    Status: "Sold Out"
    
  },
  {
    images: ["./gallery/img1.jpg", "./gallery/img2.jpg", "./gallery/img3.jpg", "./gallery/img4.jpg"],
    Name: "Downtown Heights",
    priceFrom: "AED 5,500",
    Location: "Downtown Dubai",
    Developer: "DAMAC",
    Type: "Apartment",
    Beds: "1 Bedroom",
    Status: "Sold Out"

  },
  {
    images: ["./gallery/img5.jpg", "./gallery/img6.jpg", "./gallery/img7.jpg", "./gallery/img8.jpg"],
    Name: "Creek Harbour View",
    priceFrom: "AED 3,750",
    Location: "Dubai Creek Harbour",
    Developer: "Emaar",
    Type: "Apartment",
    Beds: "2 Bedrooms",
    Status: "Available"

  },
  {
    images: ["./gallery/img9.jpg", "./gallery/img10.jpg", "./gallery/img11.jpg", "./gallery/img12.jpg"],
    Name: "Bluewaters Elite",
    priceFrom: "AED 6,200",
    Location: "Bluewaters Island",
    Developer: "Meraas",
    Type: "Apartment",
    Beds: "3 Bedrooms",
    Status: "Available"

  },
  {
    images: ["./gallery/img1.jpg", "./gallery/img2.jpg", "./gallery/img3.jpg", "./gallery/img4.jpg"],
    Name: "Marina Pearl",
    priceFrom: "AED 4,800",
    Location: "Dubai Marina",
    Developer: "Select Group",
    Type: "Apartment",
    Beds: "2 Bedrooms",
    Status: "Sold Out"

  },
  {
    images: ["./gallery/img5.jpg", "./gallery/img6.jpg", "./gallery/img7.jpg", "./gallery/img8.jpg"],
    Name: "The Lakes Villa",
    priceFrom: "AED 9,500",
    Location: "The Lakes",
    Developer: "Emaar",
    Type: "Villa",
    Beds: "4 Bedrooms",
    Status: "Available"

  },
  {
    images: ["./gallery/img9.jpg", "./gallery/img10.jpg", "./gallery/img11.jpg", "./gallery/img12.jpg"],
    Name: "JVC Serenity",
    priceFrom: "AED 2,900",
    Location: "Jumeirah Village Circle",
    Developer: "Binghatti",
    Type: "Apartment",
    Beds: "Studio",
    Status: "Available"

  },
  {
    images: ["./gallery/img1.jpg", "./gallery/img2.jpg", "./gallery/img3.jpg", "./gallery/img4.jpg"],
    Name: "Al Barari Green Home",
    priceFrom: "AED 12,000",
    Location: "Al Barari",
    Developer: "Zaya",
    Type: "Villa",
    Beds: "5 Bedrooms",
    Status: "Available"

  },
  {
    images: ["./gallery/img5.jpg", "./gallery/img6.jpg", "./gallery/img7.jpg", "./gallery/img8.jpg"],
    Name: "City Walk Residences",
    priceFrom: "AED 4,400",
    Location: "City Walk",
    Developer: "Meraas",
    Type: "Apartment",
    Beds: "1 Bedroom",
    Status: "Sold Out"

  },
  {
    images: ["./gallery/img9.jpg", "./gallery/img10.jpg", "./gallery/img11.jpg", "./gallery/img12.jpg"],
    Name: "Dubai Hills Estate",
    priceFrom: "AED 5,000",
    Location: "Dubai Hills",
    Developer: "Emaar",
    Type: "Apartment",
    Beds: "3 Bedrooms",
    Status: "Available"

  },
  {
    images: ["./gallery/img1.jpg", "./gallery/img2.jpg", "./gallery/img3.jpg", "./gallery/img4.jpg"],
    Name: "Meadows Retreat",
    priceFrom: "AED 7,500",
    Location: "The Meadows",
    Developer: "Emaar",
    Type: "Villa",
    Beds: "4 Bedrooms",
    Status: "Sold Out"

  },
  {
    images: ["./gallery/img5.jpg", "./gallery/img6.jpg", "./gallery/img7.jpg", "./gallery/img8.jpg"],
    Name: "Arabian Ranches Villa",
    priceFrom: "AED 8,200",
    Location: "Arabian Ranches",
    Developer: "Emaar",
    Type: "Villa",
    Beds: "3 Bedrooms",
    Status: "Available"

  },
  {
    images: ["./gallery/img9.jpg", "./gallery/img10.jpg", "./gallery/img11.jpg", "./gallery/img12.jpg"],
    Name: "JLT Studio Tower",
    priceFrom: "AED 2,500",
    Location: "Jumeirah Lake Towers",
    Developer: "Tiger Group",
    Type: "Apartment",
    Beds: "Studio",
    Status: "Sold Out"

  },
  {
    images: ["./gallery/img1.jpg", "./gallery/img2.jpg", "./gallery/img3.jpg", "./gallery/img4.jpg"],
    Name: "Business Bay Bayview",
    priceFrom: "AED 3,800",
    Location: "Business Bay",
    Developer: "Omniyat",
    Type: "Apartment",
    Beds: "1 Bedroom",
    Status: "Available"

  },
  {
    images: ["./gallery/img5.jpg", "./gallery/img6.jpg", "./gallery/img7.jpg", "./gallery/img8.jpg"],
    Name: "Dubai Silicon Oasis Nest",
    priceFrom: "AED 2,200",
    Location: "Dubai Silicon Oasis",
    Developer: "GGICO",
    Type: "Apartment",
    Beds: "Studio",
    Status: "Sold Out"

  },
  {
    images: ["./gallery/img9.jpg", "./gallery/img10.jpg", "./gallery/img11.jpg", "./gallery/img12.jpg"],
    Name: "The Greens Residence",
    priceFrom: "AED 3,300",
    Location: "The Greens",
    Developer: "Emaar",
    Type: "Apartment",
    Beds: "1 Bedroom",
    Status: "Sold Out"

  },
  {
    images: ["./gallery/img1.jpg", "./gallery/img2.jpg", "./gallery/img3.jpg", "./gallery/img4.jpg"],
    Name: "Mirdif Hills Flat",
    priceFrom: "AED 2,800",
    Location: "Mirdif",
    Developer: "Dubai Investments",
    Type: "Apartment",
    Beds: "2 Bedrooms",
    Status: "Available"

  },
  {
    images: ["./gallery/img5.jpg", "./gallery/img6.jpg", "./gallery/img7.jpg", "./gallery/img8.jpg"],
    Name: "Motor City Suite",
    priceFrom: "AED 3,100",
    Location: "Motor City",
    Developer: "Union Properties",
    Type: "Apartment",
    Beds: "1 Bedroom",
    Status: "Sold Out"

  },
];

export default data;