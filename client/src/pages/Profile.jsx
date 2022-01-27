import axios from "axios"

function Profile() {
  axios.get("http://localhost:3001/users").then((response)=>{
    console.log(response)
  })
    return (
        <div>
            <div className="card">
              <img src="https://picsum.photos/id/1005/200/200" alt="" class="mask mask-squircle"/>
              <div className="card-title">@{localStorage.getItem('username')}</div>
              <div>
                <span className="btn m-2 btn-error">Delete account</span>
              </div>
            </div>
        </div>
    )
}

export default Profile
