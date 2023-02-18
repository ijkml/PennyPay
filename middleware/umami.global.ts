export default defineNuxtRouteMiddleware((to) => {
  const { $umami } = useNuxtApp();
  $umami.trackView(to.fullPath);
});
