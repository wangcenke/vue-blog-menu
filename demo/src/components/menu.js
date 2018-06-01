import BlogMenu from './blogMenu.vue'

BlogMenu.install = function (Vue) {
  Vue.component(BlogMenu.name, BlogMenu)
}

export { BlogMenu }
