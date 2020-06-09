<template lang="pug">
  section.not-found
    .container
      .not-found__wrap
        h1 404
        p page not found
        nuxt-link(to="/") Back to Main page
</template>

<style lang="scss">
  .not-found__wrap{
    flex-direction: column;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
      font-size: 40px;
    }
  }
</style>