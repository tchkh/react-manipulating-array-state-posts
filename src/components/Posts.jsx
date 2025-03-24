import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [postList,setPostList] = useState(postData)

  const addLike = (postId) => {
    const newPost = postList.map((post) => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1}
      }
      return post
    })
    setPostList(newPost)
  }

  const dislike = (postId) => {
    const newPost = postList.map((post) => {
      if (post.id === postId && post.likes > 0) {
        return {...post, likes: post.likes - 1}
      }
      return post
    })
    setPostList(newPost)
  }
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
      {postList.map((post) => {
        return (
          <div class="post-item" key={post.id}>
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">
              {post.content}
            </p>
            <div class="post-actions">
              <button class="like-button" onClick={() => addLike(post.id)}>Like</button>
              <button class="dislike-button" onClick={() => dislike(post.id)}>Dislike</button>
            </div>
          </div>
        )
    })}
      </div>
    </div>
  );
}

export default Posts;
