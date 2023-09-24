export default defineNuxtRouteMiddleware((from, to) => {
    if (to.path === '/login') {
        return abortNavigation()
    }
    return navigateTo(to.path)
})