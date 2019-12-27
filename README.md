# arule34.xxx API
A API wrapper that reads the HTML of the site and extracts info

This library supports fetching:
- Post, 
- List of Post

# Install
``` npm install --save api2-rule34-xxx ```

# API
```
const Rule34 = require('api2-rule34-xxx') 
const api = new Rule34();
api.post.id(3549003).then((post)=> console.log(JSON.stringify(post, null, 2)));
```
