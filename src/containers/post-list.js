import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { readAllPost, deletePost } from "../actions/index"
import PostListItem from "../components/post-list-item"
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayOnlyMePosts: false
        }
    }
    componentWillMount() {
        this.props.readAllPost();
    }

    renderPosts() {
        const { posts } = this.props
        let arrayPosts;
        if (posts) {
            if (this.state.displayOnlyMePosts) {
                arrayPosts = this.filterMyEletters(posts)
            } else {
                arrayPosts = posts;
            }
            return arrayPosts.map((post) => {
                return <PostListItem key={post.id} post={post} deletePostCallBack={(post) => this.deletePostCallBack(post)} />
            })
        }
    }
    deletePostCallBack(post) {
        //console.log("delete", post)
        this.props.deletePost(post.id)
    }
    filterMyEletters(PostList) {
        return PostList.filter((post) => {
            if (post.author == "Ludo") {
                return true;
            } else {
                false
            }
        })
    }
    render() {
        console.log(this.props.posts)
        return (
            <div id="page">
                <div className="header">
                    <h1>EPOST</h1>
                    <input type="checkbox" onChange={(e) => this.setState({ displayOnlyMePosts: e.target.checked })} /> your E.post
                      <Link to={'users-list'}>
                        <button className="btn btn-default user">USERS</button>
                    </Link>
                    <h4>POSTEZ VOS IDEES</h4>
                </div>
                <div className="button_add">
                    <Link to={'create-post'}>
                        <button className="btn btn-success btn-circle btn-lg">+</button>
                    </Link>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <ReactCSSTransitionGroup component="tbody"
                        transitionEnterTimeout={5000}
                        transitionLeaveTimeout={300}
                        transitionName="effect">
                        {this.renderPosts()}
                    </ReactCSSTransitionGroup>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ readAllPost, deletePost }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostList)