<template lang="pug">
  PostsList(:posts="posts")
</template>


<script>
export default {
  layout: 'admin',
  
  data(){
    return {
      posts: [
        {
          id: 1,
          title: 'title 1',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: 'https://www.myplanet-ua.com/wp-content/uploads/2016/03/11_cr.png'
        },
        {
          id: 2,
          title: 'title 2',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: 'https://55341418bc55394fbe0f-65d6d0e87ce8126fb80e16752287ad6c.ssl.cf1.rackcdn.com/a9e53392-67ea-11e8-9c8c-08606e697fd7/large.jpeg'
        },
        {
          id: 3,
          title: 'title 3',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: 'https://s.hi-news.ru/wp-content/uploads/2018/09/happy-dog-750x438.jpg'
        }
      ]
    }
  }
}
</script>