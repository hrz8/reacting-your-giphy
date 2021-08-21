# reacting-your-ghipy

## What's going on here?

- [Features Checklist ✅](#features-checklist-)
- [App Usage 👟](#app-usage-)
- [Build and Deployment 🚀](#build-and-deployment-)

## Features Checklist ✅

- [x] Using ReactJS as Front-end Library
- [x] Let user choose between `Iron Man Giphy` or `Search Your Giphy`
- [x] Showing maximum 9 GIFs in `Iron Man Giphy`
- [x] Let user input keyword of their favorite giphy in Search Box of `Search Your Giphy`
- [x] Showing maximum 9 result of GIFs in `Search Your Giphy`
- [x] Let user directly write their keyword in query parameters `/search?q=keyword` (Optional)
- [x] Mobile responsive 📱✅
- [x] At least split the App into 4 components (9 implemented)
- [x] Use https://developers.giphy.com/ for API
- [x] Publish into Netlify (https://reacting-your-giphy.netlify.app/)

## App Usage 👟

### Clone Repo 💾

Clone this repo using `Download` button or bash

```bash
$ git clone https://github.com/hrz8/reacting-your-giphy.git
```

### Environtment Variable Setup 🛠

The only Environtment Variable used here is `VITE_GIPHY_API_KEY`. You need to create your `./.env` file then

```bash
$ cd reacting-your-ghipy
$ touch .env
```

Insert your Giphy API Key in `./.env` file

```
VITE_GIPHY_API_KEY=YourAPIKey
```

### Run Locally 🏃

Run app locally using `yarn`. By default this app running using `vite`

```bash
$ yarn dev
```

### Debugging 🕵️‍♂️

Debug app using VsCode Debugger Tool

- Make sure that your development/local environtment already running
- Press `F5` to use default Debugger `Launch Chrome 🚀`
- Done!

## Build and Deployment 🚀

### Build the app 🔧

Build the app using `yarn` (again, it will using `vite` under the hood). This command below will serve you `./dist/` folder which you can deploy anywhere

```bash
$ yarn build
# using env variable
$ VITE_GIPHY_API_KEY=YourAPIKey yarn build
```
