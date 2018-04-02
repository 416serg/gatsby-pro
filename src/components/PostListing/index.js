import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => {
  return (
    <article>
      <Link to={post.slug}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.createdAt}</p>
      <p>{post.body.childMarkdownRemark.excerpt}</p>
    </article>
  )
}

export default PostListing
