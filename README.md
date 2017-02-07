# React Quickstart
Extended [create-react-app](https://github.com/facebookincubator/create-react-app) starter template.  
It contains demos and sample code to quickly get started with **react-router**, app layout, composition of components, etc.

## Deployment
Built project assumes the app is hosted at the server root, unless `homepage` field in `package.json` is specified.

**GitHub pages:**

1. Change `homepage` field in `package.json`
2. Run `yarn run deploy`
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
