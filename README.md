
- Twitter API
- Elastic Search (new)
=======
MERN is a scaffolding tool which makes it easy to build isomorphic apps using Mongo, Express, React and NodeJS. It minimizes the setup time and gets you up to speed using proven technologies.
>>>>>>> dev

- [Website](http://mern.io)
- [Documentation](http://mern.io/documentation.html)
- [Discussions](https://hashnode.com/n/mern)

## Quickstart

- Download [ElasticSearch](https://www.elastic.co/downloads/elasticsearch) [1]

- Install [Marvel](https://www.elastic.co/downloads/marvel) (optional)

- Start elasticsearch
```bash
$ bin/elasticsearch
```

- start marvel (optional)
```bash
$ bin/kibana
```

- Start server
```bash
$ npm start
```

- Test Searching Query with url `localhost:3000/TwitterAPI/search`

- Test ElasticSearch with `http://localhost:3000/documents/suggest/hit` ('hit' is the keyword you want to search)


## Reference:
1. [ElasticSearchDemo](https://blog.raananweber.com/2015/11/24/simple-autocomplete-with-elasticsearch-and-node-js/)
=======
  npm install -g mern-cli
  mern your_new_app
  cd your_new_app
  npm install
  npm start
```

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/).

## File Structure

### Webpack Configs

MERN uses Webpack for bundling modules. There are two types of Webpack configs provided `webpack.config.dev.js` (for development) and `webpack.config.prod.js` (for production).

The Webpack configuration is minimal and beginner-friendly. You can customize and add more features to it for production build.

### Server

MERN uses express web framework. Our app sits in server.js where we check for NODE_ENV.

If NODE_ENV is development we apply Webpack middlewares for bundling and Hot Module Replacement.

#### Server Side Rendering

We use React Router's match function for handling all page requests so that browser history works.

All the routes are defined in `shared/routes.js`. React Router renders components according to route requested.

```js
// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
    match({
        routes,
        location: req.url
    }, (err, redirectLocation, renderProps) => {
        if (err) {
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found!');
        }

        const initialState = {
            posts: [],
            post: {}
        };

        const store = configureStore(initialState);

        fetchComponentData(store.dispatch, renderProps.components, renderProps.params).then(() => {
            const initialView = renderToString(
                <Provider store = {store} >
                  <RouterContext {...renderProps}/>
                </Provider>
            );

            const finalState = store.getState();

            res.status(200).end(renderFullPage(initialView, finalState));
        }).catch(() => {
            res.end(renderFullPage('Error', {}));
        });
    });
});


`match` takes two parameters, first is an object that contains routes, location and history and second is a callback function which is called when routes have been matched to a location.

If there's an error in matching we return 500 status code, if no matches are found we return 404 status code. If a match is found then we need to create a new Redux Store instance.

**Note:** A new Redux Store is populated afresh on every request.

`fetchComponentData` is the key function. It takes three params : first is a dispatch function of Redux store, second is an array of components that should be rendered in current route and third is the route params. `fetchComponentData` collects all the needs (need is an array of actions that are required to be dispatched before rendering the component) of components in the current route. It returns a promise when all the required actions are dispatched. We render the page and send data to client for client-side rendering in `window.__INITIAL_STATE__`.

### Shared

Shared directory contains all the components, routes, actions and reducers.

### Client

Index.js simply does client side rendering using the data provided from `window.__INITIAL_STATE__`.

## Roadmap
####MERN Starter
- [ ] Add GraphQL to mern-starter
- [ ] Add SCSS support
- [ ] Improve file structure (needs discussion)

## License
MERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).
>>>>>>> dev
