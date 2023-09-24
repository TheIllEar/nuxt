<template>
  <div>
    <Head>
      <Title>Posts</Title>
    </Head>
    <ul>
      <li
        v-for="post of posts"
        :key='post.id'
      >
        <NuxtLink :to='post.href'>{{post.title}}</NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </div>
</template>
<script setup>
const posts = reactive([
  { id: 1, title: "post 1", href: "/post/1" },
  { id: 2, title: "post 2", href: "/post/2" },
  { id: 3, title: "post 3", href: "/post/3" },
  { id: 4, title: "post 4", href: "/post/4" },
]);
definePageMeta({
  layout: "thin",
});
</script>
<style lang="scss">
</style>