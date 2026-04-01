function Room_Type_Card({
  image,
  type,
  size,
  bed,
  guests,
  description,
  availabile_room,
  total_room,
  price,
  status = "Available",
}) {
     
  return (
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow-sm hover:bg-gray-50 cursor-pointer my-2">
      
      {/* Image */}
      <div className="h-24 w-32 shrink-0 overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={type}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        
        {/* Title + Status */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800">
            {type}
          </h3>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span>{size} m²</span>
          <span>{bed}</span>
          <span>{guests} guests</span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-700 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-gray-500">
            <span className="text-[13px]">Availability : </span>
            <span className="text-xm text-black">{availabile_room}/{total_room} -Rooms</span>
          </span>
          <span className="text-sm font-semibold text-gray-800">
            ₹ {price}-
            <span className="text-xs font-normal text-gray-500"> / night</span>
          </span>
        </div>

      </div>
    </div>
  );
}

export default Room_Type_Card;
