import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import Post from "../post/Post";

class AllPost extends Component {

    state = {posts:[],chosenPost: []};
    postService = new PostService();

     async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    render() {
         let {posts} = this.state;
        return (

            <div>
                {posts.map(value => <Post key={value.id} item={value}/>)}
                <Switch>
                    <Route path={'/posts/:id'} render={(props) => {
                        let {chosenPost} = this.state;
                        this.postService.getPostById(props.match.params.id)
                            .then(value => this.setState({chosenPost:value}))
                        console.log(chosenPost);
                        return `TITLE:  ${chosenPost.title}`

                    }} />

                </Switch>

            </div>

        );
    }
}

export default AllPost;