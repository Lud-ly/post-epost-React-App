import React from 'react'
import { Link } from 'react-router'

const Users = ({ users }) => {
  console.log("users", users)
  return (
    <div className="user-card">
      <Link to={"/"}><button className="btn btn-secondary space">Retour</button></Link>
      <center><h1>USERS LIST</h1></center>
      {users.map((user) => (
        <div className="card" key={user.id.value}>
          <div className="card-header">
            <h1 className="profil-user">{user.name.title} {user.name.first} {user.name.last}</h1>
            <img src={user.picture.large} alt="yoyo" />
          </div>
            <div className="card-body">
            <h3 className="text-muted">Age Cérébral : {user.dob.age} ans</h3>
            <div className="divider"></div>
            <p>tel : {user.phone}</p>
            <div className="divider"></div>
            <p>phone : {user.cell}</p>
            <div className="divider"></div>
            <p>email : {user.email}</p>
            <div className="divider"></div>
            <p >genre Humain : {user.gender}</p>
            <div className="divider"></div>
            <p className="card-text">User : {user.login.username}</p>
            <div className="divider"></div>
            <p className="card-text">N° : {user.location.street.number}</p>
            <div className="divider"></div>
            <p className="card-text">Rue : {user.location.street.name}</p>
            <div className="divider"></div>
            <p className="card-text">MDP : {user.login.password}</p>
            <div className="divider"></div>
            <p className="card-text">Pays : {user.location.country}</p>
            <div className="divider"></div>
            <p className="card-text">Etat : {user.location.state}</p>
            <div className="divider"></div>
            <p className="card-text">Ville : {user.location.city}</p>
            <div className="divider"></div>
            <img src={user.picture.thumbnail} alt="yiyi" />
            <p className="card-text">Membre du LudoClub depuis : {user.registered.age} ans</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Users










