require('dotenv').config()
const express = require('express')


const app = express()
const port = 3000

const githubData={
    
        "login": "anuraggupta",
        "id": 1597877,
        "node_id": "MDQ6VXNlcjE1OTc4Nzc=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1597877?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/anuraggupta",
        "html_url": "https://github.com/anuraggupta",
        "followers_url": "https://api.github.com/users/anuraggupta/followers",
        "following_url": "https://api.github.com/users/anuraggupta/following{/other_user}",
        "gists_url": "https://api.github.com/users/anuraggupta/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/anuraggupta/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/anuraggupta/subscriptions",
        "organizations_url": "https://api.github.com/users/anuraggupta/orgs",
        "repos_url": "https://api.github.com/users/anuraggupta/repos",
        "events_url": "https://api.github.com/users/anuraggupta/events{/privacy}",
        "received_events_url": "https://api.github.com/users/anuraggupta/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Anurag Gupta",
        "company": "Adobe",
        "blog": "",
        "location": "Noida",
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 11,
        "public_gists": 1,
        "followers": 1,
        "following": 2,
        "created_at": "2012-04-02T10:59:20Z",
        "updated_at": "2024-10-05T12:39:50Z"
      
}

app.get('/', (req, res) => {
      res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("AnuragGupta")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
 
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code </h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${port}`)
})