# shop-keeper

> A Vue.js game of managing your own shop.

Demo: https://vicky.sh/demos/shop-keeper/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

In the root director, add a `config.js` file with the following:
```js
export default {
  SERVER_ADDRESS: <URL to Firebase Realtime Database>
}
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
