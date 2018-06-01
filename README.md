# vue-blog-menu

# Install
```
npm install --save vue-blog-menu
```

```
import Vue from 'vue'
import { BlogMenu } from 'vue-blog-menu'

Vue.use(BlogMenu)
```
# Usage

```
data () {
    return {
      menu: [
        {title: '111', link: '/111'},
        {title: '222', link: '/222'},
        {title: '333', link: '/333'},
        {title: '444', link: '/444'},
        {title: '555', link: '/555'}
      ]
    }
```

```
<blog-menu :menu="menu"></blog-menu>
```
