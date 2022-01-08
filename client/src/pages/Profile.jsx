function Profile() {
    return (
        <div>
            <div className="card">
              <img src="https://picsum.photos/id/1005/200/200" class="mask mask-squircle"/>
              <div className="card-title">@Username</div>
              <div>
                <span className="btn m-2 btn-secondary">Update profile</span>
                <span className="btn m-2 btn-error">Delete account</span>
              </div>
            </div>
            <div className="">
              <div class="form-control">
               <label class="label">
                  <span class="label-text badge badge-secondary badge-outline">My bio</span>
               </label> 
               <textarea class="textarea h-24 textarea-bordered" placeholder="Bio"></textarea>
              </div>
            </div>
            

        </div>
    )
}

export default Profile
