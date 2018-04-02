import React, { Component } from 'react'

class PostPage extends Component {
  render() {
    const { contentfulBlogPost } = this.props.data
    return (
      <div>
        <span>{contentfulBlogPost.date}</span>
        <h1>{contentfulBlogPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
      </div>
    )
  }
}

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      id
      slug
    }
  }
`
