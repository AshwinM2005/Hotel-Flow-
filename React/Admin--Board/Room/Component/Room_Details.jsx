import React from 'react'

const room = {
  id: 1,
  name: "Deluxe Room",
  status: "Available",
  image: "Images/user_interface/pexels-thorsten-technoman-109353-338504.jpg",
  size: "35 m²",
  bed: "King Bed",
  guests: 2,
  floor: "2nd Floor",
  description:
    "Upgrade to our Deluxe Room for added space and luxury. Ideal for couples or business travelers.",
  features: [
    "Private balcony",
    "Work desk",
    "City view",
    "Soundproof walls",
  ],
  amenities: [
    "Wi-Fi",
    "Air conditioning",
    "Mini fridge",
    "Coffee maker",
    "Hair dryer",
    "Room service",
  ],
};


function Room_Details() {
  return (
    <div className="flex  h-full flex-col gap-6 rounded-xl bg-[#d1ccd3] p-8 shadow-sm ">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {room.name}
          </h2>
          <span
            className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${
              room.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {room.status}
          </span>
        </div>

        <button className="rounded-lg bg-lime-400 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-lime-500">
          Edit
        </button>
      </div>

      {/* Image */}
      <div className="h-56 w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
        <span>{room.size}</span>
        <span>{room.bed}</span>
        <span>{room.guests} Guests</span>
        <span>{room.floor}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {room.description}
      </p>

      {/* Features */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-800">
          Features
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          {room.features?.map((feature, index) => (
            <span key={index} className="flex items-center gap-2">
              ✅ {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-800">
          Amenities
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          {room.amenities?.map((amenity, index) => (
            <span key={index} className="flex items-center gap-2">
              • {amenity}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Room_Details