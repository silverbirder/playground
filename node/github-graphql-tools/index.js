require('dotenv').config();
var GithubGraphQLApi = require('node-github-graphql')
var github = new GithubGraphQLApi({
  token: process.env.GITHUB_API_TOKEN
})
github.query(`
{
  user(login: "Silver-birder") {
    repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}, isFork: false) {
      nodes {
        object(expression: "main:") {
          id
          ... on Tree {
            entries {
              name
              path
              extension
              mode
              type
            }
          }
        }
      }
    }
  }
}
`, null, (res, err) => {
  console.log(JSON.stringify(res, null, 2))
})