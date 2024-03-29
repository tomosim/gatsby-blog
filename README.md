# 🏕 Out and Out Adventure

_For Sophie. Don't forget me when you make it as an influencer. With love, Tom_

An outdoor adventure blog. Built using Gatsby, React, and Node.js. More specifically, gatsby-transformer-remark allows the author of the blog to simply write blog posts in markdown format and the project will generate HTML pages for them.

**Now with Netlify CMS!** - Integrated with Netlify's content management system, you no longer have to add blogs manually! 

## 🖼 Deployed example

[Tom's JAM stack blog](https://tomsjamstackblog.netlify.com/)

## 🤖 Dependencies

```js
"dependencies": {
    "gatsby": "^2.19.1",
    "gatsby-image": "^2.2.8",
    "gatsby-plugin-manifest": "^2.2.4",
    "gatsby-plugin-netlify-cms": "^4.1.37",
    "gatsby-plugin-offline": "^2.2.4",
    "gatsby-plugin-react-helmet": "^3.1.3",
    "gatsby-plugin-sharp": "^2.2.9",
    "gatsby-remark-images": "^3.1.8",
    "gatsby-source-filesystem": "^2.1.8",
    "gatsby-transformer-remark": "^2.6.11",
    "gatsby-transformer-sharp": "^2.2.5",
    "ink": "^2.6.0",
    "netlify-cms-app": "^2.11.6",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-helmet": "^5.2.1",
    "react-onclickoutside": "^6.9.0"
},
"devDependencies": {
    "prettier": "^1.18.2"
}
```

## 🏁 Quick Start

1. Install gatsby-cli

```
npm install -g gatsby-cli
```

2. Install dependencies:

```
npm install
```

3. Start the development server

```
gatsby develop
```

## 📚 Adding blogs

### 🤲 Manually 

1. Create your blog post in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). All formatting will be kept on development.

2. Each blog should have the following syntax at the beginning. the "frontmatter" provides meta data about the blog that the project is reliant on to build the new post.

```
---
title: "My Trip to Harris"
date: "2019-08-18"
author: "Tom Simmons"
---
```

3. Add the markdown file to a new directory in in `src/blogs`. Your directory tree should look like this:

```
my-blog
  |--src
      |--blogs
          |--my-trip-to-harris
             |--my-trip-to-harris.md
             |--lobster-shack.png
             |--cute-dog-on-beach_1.jpg.jpg
```

4. If you want to include images in your blog use either of the syntaxes shown below. Make sure any images you reference in the markdown are stored in the same directory as the post and have the same names

```md
![Barney enjoying the beach <3](cute-dog-on-beach_1.jpg)

<fig>
  <img src="cute-dog-on-beach.jpg" alt="Barney enjoying the beach <3"/>
</fig>
```

5. Run `gatsby develop` again and the blog will be available on your site.

### 📠 Netlify CMS

1. Get the application up and running by either hosting it or locally by running `gatsby develop`.

2. Head over to **https://<YOUR-BLOG-URL>.com/admin** or **https://localhost:8080/admin**.
    
3. Log in to Netlify Identity.

4. Click "New Blog" and fill out the widgets.

5. Once happy with it, you can preview the blog and post it. 
