import axios from 'axios';

export const state = () => ({
  postLoaded : []
})

export const mutations = {
  addPost(state, post){
    state.postLoaded.push(post)
    console.log(post)
  },
  setPosts(state, posts){
    state.postLoaded = posts;
  }
}

export const actions = {

  nuxtServerInit({commit}, contex){
    return axios.get('https://nuxt-blog-68898.firebaseio.com/posts.json')
      .then(res=> {

        const postsArray = [];

        for(let key in res.data){
          postsArray.push({...res.data[key], id: key});
        }

        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },

  addPost({commit}, post){
    return axios.post('https://nuxt-blog-68898.firebaseio.com/posts.json', post)
      .then(res=> {
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state){
    return state.postLoaded
  }
}