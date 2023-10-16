import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter((coff) => coff._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] py-8 pl-8 pr-12 rounded-xl">
      <div className="grid grid-cols-4 gap-4 h-full">
        <div className="col-span-1">
          <img
            className="rounded-lg h-full object-cover"
            src={photo}
            alt="Movie"
          />
        </div>
        <div className="col-span-3 flex justify-between items-center">
          <div>
            <p>
              <span className="text-[#1B1A1A] text-xl font-semibold font-raleway">
                Name:
              </span>{" "}
              {name}
            </p>
            <p>
              <span className="text-[#1B1A1A] text-xl font-semibold font-raleway">
                Chef:
              </span>{" "}
              {chef}
            </p>
            <p>
              <span className="text-[#1B1A1A] text-xl font-semibold font-raleway">
                Taste:
              </span>{" "}
              {taste}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="btn btn-neutral btn-sm">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-accent btn-sm w-full">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm bg-red-600 text-white hover:text-black"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  coffees: PropTypes.array.isRequired,
  setCoffees: PropTypes.func.isRequired,
};

export default CoffeeCard;
