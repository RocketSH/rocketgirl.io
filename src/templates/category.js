import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

// This template only applies to blog pages
// i.e. the pages declared in src/markdown-pages

export default function Template({pageContext}) {
  let {posts, categoryName} = pageContext

  return (
    <Layout>
      <div className="container">
        <h1>{categoryName}</h1>
        <div className="category__grid">
          {posts.map(post => (
            <Link to={post.path} className="category__post" key={post.path}>
              <p className="category__post__date">{post.date}</p>
              <p className="category__post__title">{post.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// [
//   {
//     "path": "/rails/how-to-switch-database-adapter",
//     "categories": [
//       "Rails",
//       "Databases"
//     ],
//     "title": "切換專案資料庫 How to switch Database adapter",
//     "date": "2020-04-15"
//   },
//   {
//     "path": "/rails/symbols-in-ruby",
//     "categories": [
//       "Rails"
//     ],
//     "title": "符號 Symbols in Ruby ",
//     "date": "2020-03-16"
//   }
// ]
