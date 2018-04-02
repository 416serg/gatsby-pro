import React, { Component } from 'react'

class PostPage extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <div>
        <span>{markdownRemark.frontmatter.date}</span>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    )
  }
}

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
