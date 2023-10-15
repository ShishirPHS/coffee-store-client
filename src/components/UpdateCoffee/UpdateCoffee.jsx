import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // send data to the server for update
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            icon: "success",
            text: "Coffee Updated successfully",
          });
        }
      });
  };

  return (
    <div className="container mx-auto">
      <div className="py-16 px-28 bg-[#F4F3F0]">
        <h3
          style={{ textShadow: "0px 0px 15px rgba(144, 149, 156, 1)" }}
          className="text-center text-[#374151] text-5xl font-rancho"
        >
          Update Coffee
        </h3>
        <form onSubmit={handleUpdateCoffee} className="mt-8">
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="text-xl font-semibold font-raleway mb-4">
                <span className="rgba(27, 26, 26, 0.80)">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={chef}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
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
              value="Update Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
