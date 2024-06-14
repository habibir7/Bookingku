



export const Filter = () => {

  function handleFilter(){
    window.location.reload();
  }
    return(
    <div className="w-1/4 p-4 border-r">
          <h2 className="text-xl font-semibold mb-12">Filter</h2>
          <div className="space-y-2 bg-white p-2 rounded-t-lg">
            <h3 className="text-base font-semibold mb-2">Transit</h3>
            <label className="flex items-center bg-white rounded-md px-4">
              Direct
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              Transit
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              Transit 2+
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <hr className="w-3/4 border-b-2 border-gray-300 mx-auto" />
          </div>
          <div className="space-y-2 bg-white p-2">
            <h3 className="text-base font-semibold mb-2">Facilities</h3>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              Luggage
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              In-Flight Meal
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              Wi-fi
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <hr className="w-3/4 border-b-2 border-gray-300 mx-auto" />
          </div>
          <div className="space-y-2 bg-white p-2">
            <h3 className="text-base font-semibold mb-2">Departure Time</h3>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              00:00 - 06:00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              06:00 - 12-00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              12:00 - 18:00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-2 ">
              18:00 - 24:00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <hr className="w-3/4 border-b-2 border-gray-300 mx-auto" />
          </div>
          <div className="space-y-2 bg-white p-2">
            <h3 className="text-base font-semibold mb-2">Time Arrived</h3>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              00:00 - 06:00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              06:00 - 12-00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              12:00 - 18:00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              18:00 - 24:00
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <hr className="w-3/4 border-b-2 border-gray-300 mx-auto" />
          </div>
          <div className="space-y-2 bg-white p-2 rounded-b-lg">
            <h3 className="text-base font-semibold mb-2">Airlines</h3>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              Garuda Indonesia
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              Air Asia
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <label className="flex items-center bg-white rounded-md px-4 py-1 ">
              Lion Air
              <input
                type="checkbox"
                className="form-checkbox ml-auto cursor-pointer"
              />
            </label>
            <hr className="w-3/4 border-b-2 border-gray-300 mx-auto" />
          </div>
        </div>
    )
}