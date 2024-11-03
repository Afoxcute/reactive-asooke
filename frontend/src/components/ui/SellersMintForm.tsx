import { useState } from "react";

interface FabricFormProps {
  fabricName: string;
  quantity: string;
  pricePerYard: string;
  description: string;
  fabricImage: File | null;
}

const FabricForm = () => {
  const [fabricData, setFabricData] = useState<FabricFormProps>({
    fabricName: "",
    quantity: "",
    pricePerYard: "",
    description: "",
    fabricImage: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFabricData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFabricData((prev) => ({
      ...prev,
      fabricImage: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fabricData);
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-md max-w-4xl mx-auto mt-10 shadow-lg">
      <h1 className="text-2xl font-bold mb-8">Add Item</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Name of Fabric</label>
              <input
                type="text"
                name="fabricName"
                value={fabricData.fabricName}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                placeholder="Ethereum Native Currency"
              />
            </div>
            <div>
              <label className="block mb-2">Price of Fabric (Per yard)</label>
              <input
                type="text"
                name="pricePerYard"
                value={fabricData.pricePerYard}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                placeholder="Ethereum Native Currency"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block mb-2">Quantity of Fabric</label>
              <input
                type="text"
                name="quantity"
                value={fabricData.quantity}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                placeholder="Ethereum Native Currency"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <label className="block mb-2">Description of Fabric</label>
          <textarea
            name="description"
            value={fabricData.description}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
            rows={4}
            placeholder="Ethereum Native Currency"
          ></textarea>
        </div>

        <div className="mt-8">
          <label className="block mb-2">Upload Picture of Fabric</label>
          <div className="w-full p-4 bg-gray-800 border border-dashed border-gray-700 rounded-lg text-center">
            <input type="file" onChange={handleFileChange} />
            <p className="text-sm mt-2">
              Click to upload or drag and drop. SVG, PNG, JPG or GIF (max,
              800x400px)
            </p>
          </div>
        </div>

        <div className="flex mt-8">
          <button
            type="submit"
            className="bg-green-600 w-full text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add Fabric
          </button>
        </div>
      </form>
    </div>
  );
};

export default FabricForm;
