# React Quickstart
Extended [create-react-app](https://github.com/facebookincubator/create-react-app) starter template.  
It contains demos and sample code to quickly get started with **react-router**, app layout, composition of components, etc.

## Deployment
Built project assumes the app is hosted at the server root, unless `homepage` field in `package.json` is specified. To create relative paths (when not using client-side routing) use `"homepage": "."`.

**Firebase hosting (with `browserHistory`):**

```sh
npm install -g firebase-tools
firebase login
firebase init
# now select 'hosting' -> publicDir: build -> config single-page app: yes
firebase deploy
```

**GitHub pages (only `hashHistory` works):**

1. Change `homepage` field in `package.json`
2. Run `yarn run deploy:github`
3. GitHub repo settings should use `gh-pages`


**Heroku:**
```sh
# $HEROKU_APP_NAME can be left out
heroku create $HEROKU_APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master
heroku open
```

## Development
When copying HTML snippets, use: http://magic.reactjs.net/htmltojsx.htm
