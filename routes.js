const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('blog', '/blog/:slug')
routes.add('about', '/:lng/about')
