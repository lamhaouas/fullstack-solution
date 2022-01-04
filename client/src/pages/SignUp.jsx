function SignUp() {
    return (
      
    <div className=" card bg-base-200 m-2 p-4">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label> 
          <input type="text" placeholder="email" class="input w-72 input-bordered"/>
      </div> 
      <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label> 
          <input type="text" placeholder="username" class="input w-72 input-bordered"/>
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label> 
          <input type="text" placeholder="password" class="input w-72 input-bordered"/>
      </div>
      <button class="btn btn-secondary mt-6 w-72">Submit</button> 
  </div>
    )
}

export default SignUp
