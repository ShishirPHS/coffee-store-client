import PropTypes from "prop-types";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, taste, photo } = coffee;
  return (
    <div className="bg-[#F5F4F1] py-8 pl-8 pr-12 rounded-xl">
      <div className="grid grid-cols-4 gap-4">
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
            <button className="btn btn-neutral">View</button>
            <button className="btn btn-neutral">Edit</button>
            <button className="btn btn-neutral">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default CoffeeCard;
