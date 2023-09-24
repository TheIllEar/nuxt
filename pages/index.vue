<template>
  <div>
    <Head>
      <Title>Main</Title>
    </Head>
    <b>{{user.name}}</b>
    <span>{{user.age}}</span>
    <TheFooter />
  </div>
</template>
<script setup>
const { data: user } = await useAsyncData("user", () => $fetch("/api/user"));
</script>
<style lang="scss">
</style>