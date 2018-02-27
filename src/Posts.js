import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {posts} from './postsStore';
import Post from './Post';

const Posts = observer(class Posts extends Component {

  render(){

    return (
      <div>
        {posts.docs.map((post) =>
          <Post key={post.id}
            post={post}
          />
        )}
      </div>
    );
  }
});

export default Posts;
