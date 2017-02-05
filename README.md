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

## Developing Components in Isolation

Usually, in an app, you have a lot of UI components, and each of them has many different states.
For an example, a simple button component could have following states:

* With a text label.
* With an emoji.
* In the disabled mode.

Usually, it’s hard to see these states without running a sample app or some examples.

Create React App doesn't include any tools for this by default, but you can easily add [React Storybook](https://github.com/kadirahq/react-storybook) to your project. **It is a third-party tool that lets you develop components and see all their states in isolation from your app**.

![React Storybook Demo](http://i.imgur.com/7CIAWpB.gif)

You can also deploy your Storybook as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app.

**Here’s how to setup your app with Storybook:**

First, install the following npm package globally:

```sh
npm install -g getstorybook
```

Then, run the following command inside your app’s directory:

```sh
getstorybook
```

After that, follow the instructions on the screen.

Learn more about React Storybook:

* Screencast: [Getting Started with React Storybook](https://egghead.io/lessons/react-getting-started-with-react-storybook)
* [GitHub Repo](https://github.com/kadirahq/react-storybook)
* [Documentation](https://getstorybook.io/docs)
* [Snapshot Testing](https://github.com/kadirahq/storyshots) with React Storybook
