const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto">
      <div className="py-16 px-28 bg-[#F4F3F0]">
        <h3
          style={{ textShadow: "0px 0px 15px rgba(144, 149, 156, 1)" }}
          className="text-center text-[#374151] text-5xl font-rancho"
        >
          Add New Coffee
        </h3>
        <form onSubmit={handleAddCoffee} className="mt-8">
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input placeholder:text-[#1b1a1a99] placeholder:font-raleway mb-6"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="input placeholder:text-[#1b1a1a99] placeholder:font-raleway mb-6"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input placeholder:text-[#1b1a1a99] placeholder:font-raleway mb-6"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input placeholder:text-[#1b1a1a99] placeholder:font-raleway mb-6"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input placeholder:text-[#1b1a1a99] placeholder:font-raleway mb-6"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input placeholder:text-[#1b1a1a99] placeholder:font-raleway mb-6"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input placeholder:text-[#1b1a1a99] placeholder:font-raleway mb-6"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn text-[#331A15] bg-[#D2B48C] border-2 border-[#331A15]"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
