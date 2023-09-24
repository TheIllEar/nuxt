<template>
  <nav>
    <h1>{{$hello('Nuxt')}}</h1>
    <ul>
      <li>
        <NuxtLink to='/'>Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to='/about'>About</NuxtLink>
      </li>
      <li>
        <NuxtLink to='/login'>Login</NuxtLink>
      </li>
      <li>
        <NuxtLink to='/posts'>Posts</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
}
ul {
  display: flex;
  width: fit-content;
  li {
    list-style: none;
    margin-left: 10px;
  }
}

a {
  text-decoration: none;
}
</style>