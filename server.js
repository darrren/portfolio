const express = require('express')
const path = require('path')
const next = require('next')
// const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: './src', dev })
const handle = app.getRequestHandler()
// const handler = routes.getRequestHandler(app)

const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')
const lang = ['en', 'de']

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: lang[0],
    preload: lang, // preload all langages
    ns: ['common', 'home'], // need to preload all the namespaces
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
    },
    detection: {
      order: ['path', 'querystring', 'session', 'cookie', 'header'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18n',
      lookupSession: 'lng',
      lookupPath: 'lng',
      lookupFromPathIndex: 0,
      caches: false
    }
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express()

        // server.get('/a', (req, res) => {
        //   return app.render(req, res, '/b', req.query)
        // })

        // server.get('/b', (req, res) => {
        //   return app.render(req, res, '/a', req.query)
        // })

        // server.get('/posts/:id', (req, res) => {
        //   return app.render(req, res, '/posts', { id: req.params.id })
        // })

        // server.use(handler)

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n))

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/locales')))

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        // Home Page
        i18nextMiddleware.addRoute(i18n, '/:lng', lang, server, 'get', (request, response) => {
          return app.render(request, response, '/', request.query)
        })

        // About Page
        i18nextMiddleware.addRoute(i18n, '/:lng/about', lang, server, 'get', (request, response) => {
          return app.render(request, response, '/about', request.query)
        })

        // use next.js
        server.get('*', (req, res) => handle(req, res))

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
  })
