<template>
  <div>
    <Head>
      <Title>About</Title>
    </Head>
    <ul>
      <li
        v-for="post of data"
        :key='post.id'
      >{{post.title}}
      </li>
    </ul>
  </div>
</template>
<script setup>
const url = "https://jsonplaceholder.typicode.com/posts";
const { data } = await useFetch(url);
// const { data } = await useAsyncData("posts", () => $fetch(url));
// useHead({
//   titleTemplater: "Nuxt | %s",
// });
definePageMeta({
  layout: "thin",
});

</script>
<style lang="scss">
</style>