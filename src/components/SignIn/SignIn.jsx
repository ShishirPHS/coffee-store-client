const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="w-3/4 mx-auto">
        <h2 className="text-center mb-8 text-4xl font-rancho font-bold">
          Please SignIn
        </h2>
        <form onSubmit={handleSignIn} className="font-raleway">
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
            <button className="btn btn-neutral normal-case">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
