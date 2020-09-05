import React  from 'react'
import { Link } from 'react-router'

 const PostContent = ({post}) => {
return (
    <div>
        <Link to={"/"}><button className="btn btn-secondary space">Retour</button></Link>
        <h1>{post.title}</h1>
        <h4>Auteur : {post.author}</h4>
        <p>{post.month}</p>
        <p>{post.year}</p>
        <h5>{post.content}</h5>
        <h4>Pays : {post.country}</h4>
        <h4>Ville : {post.city}</h4>
        <h4>email : {post.email}</h4>
        
    </div>
)
 }
    
 export default PostContent


 