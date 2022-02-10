import axios from "axios"
import {useNavigate} from 'react-router-dom';

function Profile() {
  let navigate = useNavigate()
const deleteProfile =()=>{if (!window.confirm(`Are you sure you want to delete your account ?`)) 
return
  const username = localStorage.getItem('username')
  axios.delete(`http://localhost:3001/user/delete/${username}`,{ data: { username: username } })
  localStorage.clear();
  navigate('/')
}
return (
        <div>
            <div className="card">
              <img src="https://picsum.photos/id/1005/200/200" alt="profile image" className="mask mask-squircle"/>
              <div className="card-title">@{localStorage.getItem('username')}</div>
              <div>
                <span className="btn m-2 btn-error" onClick={()=>{deleteProfile()}}>Delete account</span>
              </div>
            </div>
        </div>
    )
}

export default Profile
