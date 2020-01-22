import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <h1>Hello, Phil! Sup</h1>

    <div>
      <h2>My Site's Posts</h2>
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
              <td><Link to="/pages/{node.slug}">GO</Link></td>
              <td>{node.postId}</td>
              <td dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
)

export default IndexPage

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
