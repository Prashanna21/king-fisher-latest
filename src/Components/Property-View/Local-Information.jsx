import React from 'react'

const Local_Information = () => {
    const localInfo = [
  { icon: <FaSchool />, title: "School", desc: "1 Elementary School nearby" },
  { icon: <FaShieldAlt />, title: "Crime", desc: "Low crime rate in the area" },
  { icon: <MdVolumeUp />, title: "Noise Level", desc: "Low – suitable for families" },
  { icon: <FaLeaf />, title: "Environment", desc: "Near park and river" },
];
  return (
    <>
     <section className="bg-white p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Local Information</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
          {localInfo.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="text-blue-600 text-xl">{item.icon}</div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Local_Information