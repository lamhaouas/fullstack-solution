import axios from "axios"

function Profile() {
const deleteAccount = async () =>{
  if (!window.confirm(`Are you sure you want to delete your account ?`)) return;
    const username ={
      username : localStorage.getItem('username')
    };
  try{ const res = await axios.delete('http://localhost:3001/user/delete',username);
  console.log(username)

  }catch{

  }
}
    return (
        <div>
            <div className="card">
              <img src="https://picsum.photos/id/1005/200/200" alt="profile image" className="mask mask-squircle"/>
              <div className="card-title">@{localStorage.getItem('username')}</div>
              <div>
                <span className="btn m-2 btn-error" onClick={deleteAccount}>Delete account</span>
              </div>
            </div>
        </div>
    )
}

export default Profile
