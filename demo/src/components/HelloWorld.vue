<template>
  <div class="hello">
    <blog-menu :menu="menu"></blog-menu>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
