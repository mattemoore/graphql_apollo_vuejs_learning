# testapp

Let's learn the fundamentals of Vue, GraphQL and Apollo in a simple app.

## Project setup
```
In one terminal start the client:
`cd client && npm install && npm run serve`

In another terminal start the server:
`cd server && npm install && npm run start`
```

## Notes
-The API app will crash after a few queries likely due to the weak connect/close logic on the sqlite database
-The `ApolloVue` docs for Typescript projects is lacking.  Cant' figure out how to make `$apollo.xxx` be usable (https://github.com/vuejs/vue-apollo/issues/503) which means using `<ApolloQuery>` elements which are limited so I just passed hardcoded query parameter instead of doing something dynamic.  Enough time has been spent on this.