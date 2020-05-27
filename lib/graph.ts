import gql from "graphql-tag";

const QUERY_BLOGS = gql`
  query blogList($offset: Int, $limit: Int){
    blogList(offset: $offset, limit: $limit){
      id
      title
      summery
      description
      image
    }
  }`

const QUERY_CATEGORY = gql`
  query categoryList($offset: Int = 0, $limit: Int = 0){
    categoryList(offset: $offset, limit: $limit){
      id
      category_name
    }
  }
`

const QUERY_BLOG_DETAIL = gql`
  query blog($id: Int!){
    blog(id: $id){
      id
      title
      summery
      image
      description
      category{
        id
        category_name
      }
    }
  }
`

export const graph = {
  QUERY_BLOGS,
  QUERY_CATEGORY,
  QUERY_BLOG_DETAIL
}