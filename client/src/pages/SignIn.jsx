function SignIn() {
    return (
    <div className=" card bg-base-200 m-2 p-4">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label> 
            <input type="text" placeholder="email" class="input input-bordered w-72"/>
        </div> 
        <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label> 
            <input type="text" placeholder="username" class="input input-bordered w-72"/>
        </div>
        <button class="btn btn-secondary mt-6 w-72">Submit</button> 
     </div>
       
     
        
    )
}

export default SignIn
