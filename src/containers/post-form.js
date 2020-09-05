import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {reduxForm} from "redux-form"
import {createPost} from "../actions/index"
import {browserHistory} from "react-router"

const formConfig ={
    form:"creatPostForm",
    fields : ['title','content','author','month','year','country','city','email'],
    validate : validate,
    initialValues : {author:"Ludo",country:"France",city:"Montpellier",email:"ludom82@gmail.com"}
}

 class PostForm extends Component {
     render () {
         const {fields :{title,content,author,month,year,country,city,email},handleSubmit,errors} = this.props
         console.log("errors",errors);
         return (
             <div className="new_epost">
                <h1>Ecrire un Nouveau ePost</h1>
                <Link to={"/"}className="space">
                <button className="btn btn-secondary">Retour</button>
                </Link>
                <form onSubmit={handleSubmit(this.createPost.bind(this))}>
                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
                        <label>Titre</label>
                        <input {...title} className="form-control" type="text"placeholder="titre du post" />
                        <div className="errors">{title.touched && errors.title}</div>
                    </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
                        <label>Description</label>
                        <textarea {...content} className="form-control" type="textarea"rows="12"cols="15"/>
                        <div className="errors">{content.touched && errors.content}</div>
                    </div>
                    <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : '' }`}>
                        <label>Author</label>
                        <input {...author} className="form-control" type="text"/>
                        <div className="errors">{author.touched && errors.author}</div>
                    </div>
                    <div className={`form-group ${month.touched && month.invalid ? 'has-danger' : '' }`}>
                        <label>Mois</label>
                        <input {...month} className="form-control" type="text"/>
                        <div className="errors">{month.touched && errors.month}</div>
                    </div>
                    <div className={`form-group ${year.touched && year.invalid ? 'has-danger' : '' }`}>
                        <label>Année</label>
                        <input {...year} className="form-control" type="text"/>
                        <div className="errors">{year.touched && errors.year}</div>
                    </div>
                    <div className={`form-group ${country.touched && country.invalid ? 'has-danger' : '' }`}>
                        <label>Pays</label>
                        <input {...country} className="form-control" type="text"/>
                        <div className="errors">{country.touched && errors.country}</div>
                    </div>
                    <div className={`form-group ${city.touched && city.invalid ? 'has-danger' : '' }`}>
                        <label>Ville</label>
                        <input {...city} className="form-control" type="text"/>
                        <div className="errors">{city.touched && errors.city}</div>
                    </div>
                    <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : '' }`}>
                        <label>Email</label>
                        <input {...email} className="form-control" type="text"/>
                        <div className="errors">{email.touched && errors.email}</div>
                    </div>
                    <button type="submit" className="btn btn-primary create"disabled={this.props.invalid}>Créer</button>
                </form> 
             </div>
         )
     }
     createPost(post){
         this.props.createPost(post);
         browserHistory.push("/");
     }
 }
 function validate(values){
    const errors = {};
     if(!values.title){
         errors.title = "SVP ce champ est requis !"
     }
     if(!values.content){
        errors.content = "SVP ce champ est requis !"
    }
    if(!values.author){
        errors.author = "Ce champ est requis !"
    }
    if(!values.month){
        errors.month = "Ce champ est requis !"
    }
    if(!values.year){
        errors.year = "Ce champ est requis !"
    }
    if(!values.country){
        errors.country = "Ce champ est requis !"
    }
    if(!values.city){
        errors.city = "Ce champ est requis !"
    }
    if(!values.email){
        errors.email = "SVP un email avec @"
    }
    return errors;
 }
 const mapDispatchToProps = (dispatch) => ({
     ...bindActionCreators({createPost}, dispatch)
 });
 export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm))