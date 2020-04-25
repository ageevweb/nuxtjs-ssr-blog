<template lang="pug">
  .wrapper-content.wrapper-content--fixed
    section.post
      .container
        .post-header
          img(:src="post.img" :alt="post.title")
          h1.title {{post.title}}
          p {{post.descr}}
        .post-body
          p {{post.content}}
</template>

<script>
export default {
  data(){
    return {
      post: 
        {
          id: 1,
          title: 'title 1',
          descr: 'Lorem ipsum dolor sit amet ',
          img: 'https://www.myplanet-ua.com/wp-content/uploads/2016/03/11_cr.png',
          content: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    }
  }
}
</script>