import { MoveRight } from 'lucide-react';
import React from 'react'

const Similar_Apartment = () => {
    const similarListings = [
  {
    title: "Minimal looking apartment",
    price: "$1,23,200",
    beds: 2,
    baths: 2,
    area: "1420 sqft",
    image: "/gallery/img2.jpg",
  },
  {
    title: "Minimal looking apartment",
    price: "$1,23,200",
    beds: 2,
    baths: 2,
    area: "1420 sqft",
    image: "/gallery/img3.jpg",
  },
  {
    title: "Minimal looking apartment",
    price: "$1,23,200",
    beds: 2,
    baths: 2,
    area: "1420 sqft",
    image: "/gallery/img4.jpg",
  },
  {
    title: "Minimal looking apartment",
    price: "$1,23,200",
    beds: 2,
    baths: 2,
    area: "1420 sqft",
    image: "/gallery/img5.jpg",
  },
];
  return (
    <>
     <section className="bg-white mt-10 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold  text-2xl sub-heading-font ">Similar Apartments</h3>
          <button className="text-blue-600 text-sm font-medium flex items-center text-center"><span>Explore More</span> <MoveRight size={16}/> </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {similarListings.map((item, i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={item.image} alt={item.title} className="h-32 w-full object-cover" />
              <div className="p-3 space-y-1 text-sm text-gray-700">
                <p className="font-semibold">{item.title}</p>
                <p className="secondary-color font-bold">{item.price}</p>
                <p>{item.beds} Bd | {item.baths} Ba | {item.area}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Similar_Apartment