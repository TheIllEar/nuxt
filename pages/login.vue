<template>
  <div>

    <Head>
      <Title>Login</Title>
    </Head>
    <h1>Login</h1>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
<style lang="scss">
</style>