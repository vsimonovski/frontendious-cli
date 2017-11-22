# ⚡ frontendious-cli ⚡

[🚧 UNDER CONSTRUCTION]

CLI tool that generates boilerplate for starting modern web[apps|sites]. Powered
by webpack and npm scripts.

## What's in the 📦 ?

* 🔥 webpack, webpack-dev-server (config splitted into webpack.dev and
  webpack.prod)
* 💪 babel (env presset, object-rest-spread plugin)
* 🦄 scss support, postcss autoprefix, normalize.css included
* 🖼️ image support (png|jpg|gif|svg)
* 💅
  [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  configured
* ⚡ connected with express(node.js) [optional]
* ⚛️ react support [optional]

## Project structure

```bash
server/
|-- api/ # place api files here
|-- index.js # express server
|-- package.json # server dependencies
|-- yarn.lock # lock file for server libs
src/
|-- assets/ # place images here
|-- js/ # place javascript here
|-- scss/ # place scss here
|-- index.html # root index.html page
.babelrc # babel config
.gitignore
package.json # client dependencies
postcss.config.js # postcss config
README.md
webpack.common.js # webpack common config
webpack.dev.js # webpack development config
webpack.prod.js # webpack production config
yarn.lock # lock file for client libs
```

## Tips & Tricks

ℹ️ There is a proxy configured inside webpack.dev.js, i.e. all
localhost:3000/api/<something> requests will be proxied to
loclhost:3001/api/<something> where express server is listening.

☝️ If you want to use `background: url()` inside `*.scss` file, always create
path relative to scss folder, even if the current .scss file is, for example,
inside `modules/` folder.

```scss
/* current location: scss/modules/_somefile.scss */
background: url('../assets/mypicture.png'); 👍
background: url('../../assets/mypicture.png'); 👎
```

---

css-loader will
[ignore path starting with /](https://github.com/webpack-contrib/css-loader#root),
to prevent that behaviour add option "root: '.'"

## Build Setup

```bash
# generate project
frontendious <dir_name> [...options]

# install server-side depenedcies
cd <dir_name>/server
yarn install

# start server at localhost:3001, configurable at server/index.js
yarn start

# go back to <dir_name>
# install client-side dependencies
yarn install

# serve with hot reload at localhost:3000, configurable at webpack.dev.js
yarn dev

# build for production @ dist/ folder
yarn build
```
