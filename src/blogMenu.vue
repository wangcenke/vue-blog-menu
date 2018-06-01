<template>
  <div class="menu">
      <!--menu-entry-->
      <router-link class="menu--entry" to="/">
        <span class="entry--text">导航</span>
        <span class="entry--home">首页</span>
      </router-link>
      <!--menu-item-->
      <ul class="menu--list">
          <li class="list--item" v-for="item in menu">
            <router-link class="list--item__circle" :to="item.link">{{ item.title }}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: "blogMenu",
    props: {
      menu: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  ul,li,a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }

  $s1: 0s;
  $s2: .2s;
  $s3: .3s;
  $s4: .4s;
  $s5: .5s;
  $s6: .6s;
  $s7: .7s;

  $sList: $s1 $s2 $s3 $s4 $s5 $s6 $s7;

  .menu {
    margin-bottom: 15px;
  }
  .menu {
    position: relative;
    width: 60px;
    height: 40px;
    background: transparent;
    &:hover {
      width: 200px;
      .menu--list {
        display: block;
      }
      .list--item__circle {
        animation-duration: .8s;
        animation-fill-mode: both;
      }
      @for $i from 1 to length($sList)+1 {
        li:nth-child(#{$i}) a {
          animation-name: fadeIn;
          animation-delay: nth($sList, $i);
        }
      }
    }
  }
  .menu--entry {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f0f0f0;
    font-size: 13px;
    color: #555;
    border-radius: 50%;
    .entry--text {
      display: inline-block;
    }
    .entry--home {
      display: none;
    }
    &:hover {
      background-color: #dfdfdf ;
      .entry--text {
        display: none;
      }
      .entry--home {
        display: inline-block;
      }
    }
  }
  .menu--list {
    display: none;
    position: absolute;
    top: 0;
    left: 46px;
    width: 500px;
    height: 40px;
    text-align: left;
  }
  .list--item {
    display: inline-block;
  }
  .list--item__circle {
    width: 40px;
    height: 40px;
    margin-right: 6px;
    font-size: 13px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    color: #555;
    background-color: #f0f0f0;
    border-radius: 20px;
    &:hover {
      background-color: #dfdfdf;
    }
  }

  @keyframes fadeIn
  {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
