require('dotenv').config();
var GithubGraphQLApi = require('node-github-graphql')
var github = new GithubGraphQLApi({
  token: process.env.GITHUB_API_TOKEN
})
github.query(`
{
    viewer {
      login
    }
}
`, null, (res, err) => {
  console.log(JSON.stringify(res, null, 2))
})