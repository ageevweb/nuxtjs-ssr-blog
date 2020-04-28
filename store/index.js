import axios from 'axios';

export const state = () => ({
  postLoaded : []
})

export const mutations = {
  addPost(state, post){
    state.postLoaded.push(post)
    console.log(post)
  }
}

export const actions = {
  addPost({commit}, post){
    return axios.post('https://nuxt-blog-68898.firebaseio.com/posts.json', post)
      .then(res=> {
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  
}