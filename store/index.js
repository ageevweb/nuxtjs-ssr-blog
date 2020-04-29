import axios from 'axios';

export const state = () => ({
  postLoaded : [],
  token : null
})

export const mutations = {
  addPost(state, post){
    state.postLoaded.push(post)
    console.log(post)
  },

  setPosts(state, posts){
    state.postLoaded = posts;
  },

  editPost(state, postEdit){
    const postIndex = state.postLoaded.findIndex(post => post.id === postEdit.id)
    state.postLoaded[postIndex] = postEdit;
  },

  setToken(state, token) {
    state.token = token
  },

  destroyToken(state){
    state.token = null
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

  authUser({commit}, data){
    let keyStr = 'AIzaSyBz7Cjiee95bbTXRj7Hs-BMvW-ocDDio8E';

    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${keyStr}`, {

      // https://firebase.google.com/docs/reference/rest/auth/#section-create-email-password
      
      email: data.email,
      password: data.password,
      returnSecureToken: true
    })
    .then(res => { commit('setToken', res.data.idToken) })
    .catch(e => console.log(e))
  },

  addPost({commit}, post){
    return axios.post('https://nuxt-blog-68898.firebaseio.com/posts.json', post)
      .then(res=> {
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  },

  editPost({commit}, post) {
    return axios.put(`https://nuxt-blog-68898.firebaseio.com/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },

  addComment({commit}, comment) {
    return axios.post(`https://nuxt-blog-68898.firebaseio.com/comments.json`, comment)
  },

  logOutUser({commit}){
    commit('destroyToken')
  }

}


export const getters = {
  getPostsLoaded(state){
    return state.postLoaded
  },
  checkToken(state){
    return state.token != null
  },
}