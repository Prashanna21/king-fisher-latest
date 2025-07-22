import React from 'react'
import Highlight from './Highlight'
import MapSection from './MapSection'
import Agent_card from './Agent_card'
import { AreaChart, Bath, BedDouble } from 'lucide-react'

const Overview = ({data}) => {
  return (
    <>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <p className="text-xl font-bold heading-font ">{data.price}</p>
            {/* <p className="text-sm text-gray-500">Down payment {data.downPayment}</p> */}
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
              <span className='flex gap-1 items-center'><BedDouble size={16} /> {data.beds} Bed</span>
              <span className='flex gap-1 items-center'><Bath size={16}/> {data.baths} Bath</span>
              <span className='flex gap-1 items-center'><AreaChart size={16}/>{data.area}</span>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold tracking-[3px] sub-heading-font">Overview</h2>
              <p className="text-md text-gray-700 mt-1 whitespace-pre-line paragraph-font">{data.overview}</p>
            </div>
             <Highlight/>
             <MapSection/>
          </div>         
             <Agent_card/>
      
        </div>
        
    </>
  )
}

export default  Overview










 {/* <div className="bg-gray-100 p-4 rounded-lg border">
            <h3 className="text-lg font-semibold">Request a tour</h3>
            <p className="text-sm text-gray-600 mb-2">Get a tour of the house as per your time.</p>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded mb-2 text-sm"
              defaultValue={data.tour.defaultDate}
            />
            <input
              type="time"
              className="w-full border px-3 py-2 rounded mb-4 text-sm"
              defaultValue={data.tour.defaultTime}
            />
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Schedule a Tour
            </button>
            <button className="w-full mt-2 border border-gray-300 py-2 rounded hover:bg-gray-200">
              Request Info
            </button>
          </div> */}
          {/* Right: Agent Info */}