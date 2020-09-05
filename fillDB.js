var casual = require('casual')


module.exports = () => {
    const data = { posts: [] }
    // Create 500 users
    for (let i = 0; i < 50; i++) {
      data.posts.push({ id: i,title:casual.title,author:casual.name,
        month:casual.month_name,year:casual.year,content:casual.sentences(n=50),
        country:casual.country,city:casual.city,email:casual.email
     })
      
    }
    return data
  }