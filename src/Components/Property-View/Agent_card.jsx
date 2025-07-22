import React from 'react'

const Agent_card = () => {
  return (
    <>
    <aside className="bg-white border border-dashed  rounded-xl p-6 h-fit space-y-4 sticky top-10">
        <h3 className="text-lg font-semibold">Agent Information</h3>
        <p className="text-sm text-gray-600">Get an insight of the house from agent</p>
        <div className="flex items-center gap-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Agent"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-800">Daniel Doe</h4>
            <p className="text-sm text-gray-600">Exquisite Properties, LLC | Alabama</p>
            <div className="flex gap-2 mt-1">
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">Top Rated</span>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">Pro Agent</span>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-700 flex flex-col gap-3">
          <p className='flex justify-between max-w-screen items-center'><strong>License:</strong> #580573</p>
          <p className='flex justify-between max-w-screen items-center'><strong>Contact:</strong> +000 1234 123 123</p>
        </div>
        <button className="w-full bg-secondary-color cursor-pointer text-white py-2 rounded-lg text-sm">
        Contact Now
        </button>
      </aside>
    </>
  )
}

export default Agent_card