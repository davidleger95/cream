# CREAM (Cash Rules Everything Around Me)

CREAM is a banking app that displays online banking information from CIBC accounts in a beautifyl, user-friendly UI. I sarted this project because I was tired of using CIBC's clunky app.

This is very much a work in progress at the moment, but enjoy! :)

## [View Demo](#a)

***

## Dev

Install dependencies via npm.

  ```sh
  npm install
  ```

Run Netlify locally. (This is needed for the serverless functions.)

  ```sh
  netlify dev
  ```

Go to `localhost:3000` in your browser.

## Demo vs. Live Data

> NOTE: Live data will not work in production for liabilitiy reasons. Use live data at your own risk and on your own computer.

This app is sert up to use demo data by default. To use live data, add a valid CIBC auth token to the app. To set a valid auth token:

1. Log into a CIBC account.
2. Got to the network tab in DevTools.
3. Copy the header `x-auth-token` from any network request.

Then in the CREAM app:

1. Open the console.
2. Run this code with your valid auth token: `localStorage.setItem('authToken', '<YOUR_AUTH_TOKEN>')`.

Your auth token should now be set. Refresh the page to see your live account data.

*NOTE: in the `functions/graphql.js` file you must set `const DEMO = false;` for live data to be used.

## FAQ

**Why are you using Gatsby for this and not Next.js?**

I used Gatsby just for the ease of adding plugins and greater familiarity with the setup process. It's not ideal for SSR though because Gatsby can only server render data at build time which is not ideal for an app that is mostly dynamic. If I were building a production-ready version of this I'd be using Next.js for sure.

**What's next for this?**

I want to build out some charts using [React Vis](https://uber.github.io/react-vis/). I think it's a great library for data vis in React and I want to get more practice with it.

**Ugh... why TypeScript?**

TypeScript is great! I've quickly become one of those annoying TS people who won't shut up about it.

**...But you're using JavaScript for the serverless funtions.**

Yeah... Netlify serverless functions required a bit more effort than I was willing to spend to get TypeScript working. It is possible, but I was lazy and seemed like a hassle.
