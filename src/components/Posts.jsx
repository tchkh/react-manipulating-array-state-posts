import { useState } from "react"
import { postData } from "../raw-data/post-data"

function Posts() {
  const [posts, setPost] = useState(postData)

  const handleLikeBtn = (index) => {
    const newPost = [...posts]
    newPost[index].likes++
    setPost(newPost)
  }

  const handleDislikeBtn = (index) => {
    const newPost = [...posts]
    newPost[index].likes > 0 ? newPost[index].likes-- : 0
    setPost(newPost)
  }

  return (
    <div className='app-wrapper'>
      <h1 className='app-title'>Posts</h1>
      <div className='post-list'>
        {posts.map((post, index) => {
          return (
            <div className='post-item' key={`${post.id} - ${post.title}`}>
              <div className='post-header'>
                <h2>{post.title}</h2>
                <div className='post-social-media-stats'>
                  <span className='stats-topic'>Likes: </span>
                  <span className='post-likes'>{post.likes}</span>
                </div>
              </div>
              <p className='post-content'>{post.content}</p>
              <div className='post-actions'>
                <button
                  className='like-button'
                  onClick={() => handleLikeBtn(index)}
                >
                  Like
                </button>
                <button
                  className='dislike-button'
                  onClick={() => handleDislikeBtn(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
