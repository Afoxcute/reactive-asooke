const MinItemForm = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-md max-w-4xl mx-auto mt-10 shadow-lg">
      <h1 className="text-2xl font-bold mb-8">Add Item</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Name of Ready-to-wear</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
              placeholder="Name of Ready-to-wear"
            />
          </div>
          <div>
            <label className="block mb-2">Price of Ready-to-wear</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
              placeholder="Price of Ready-to-wear"
            />
          </div>
          <div>
            <label className="block mb-2">Description of Fabric</label>
            <textarea
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none resize-none"
              rows={4}
              placeholder="Description of Fabric"
            ></textarea>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">Quantity of Ready-to-wear</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
              placeholder="Quantity of Ready-to-wear"
            />
          </div>
          <div>
            <label className="block mb-2">Measurement Ready-to-wear</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
              placeholder="Measurement Ready-to-wear"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <label className="block mb-2">Upload Picture of Ready-to-Wear</label>
        <div className="w-full p-4 bg-gray-800 border border-dashed border-gray-700 rounded-lg text-center">
          <input type="file" className="w-full" />
        </div>
      </div>

      <div className="flex mt-8">
        <button className="bg-green-600 text-white px-6 py-2 rounded w-full">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default MinItemForm;
