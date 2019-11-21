import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  return (
    <Layout>
      <div>Hello, Phil!</div>

      <div>
        <h1>My Site's Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Post ID</th>
              <th>Excerpt</th>
            </tr>
          </thead>
          <tbody>
            {data.wpgraphql.posts.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.title}</td>
                <td>{node.slug}</td>
                <td>{node.postId}</td>
                <td dangerouslySetInnerHTML={{ __html: node.excerpt }} />>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    wpgraphql {
      posts {
        edges {
          node {
            title
            slug
            postId
            excerpt
            content
          }
        }
      }
    }
  }
`
