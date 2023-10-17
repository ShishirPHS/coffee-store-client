import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // new user has been created
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt };
        fetch(
          `https://coffee-store-server-oqw052of9-shishir-ahmeds-projects.vercel.app/user`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user added to the database");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto my-20">
      <div className="w-3/4 mx-auto">
        <h2 className="text-center mb-8 text-4xl font-rancho font-bold">
          Please SignUp
        </h2>
        <form onSubmit={handleSignUp} className="font-raleway">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral normal-case">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
