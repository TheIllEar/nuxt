export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (string) => `Hello ${string}`,
    },
  };
});
