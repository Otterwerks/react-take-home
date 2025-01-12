# JetFuel React Assignment

View demo: https://otterwerks.github.io/react-take-home/

Assignment to create a functioning page from a provided sketch and resource endpoint, targeted for
mobile devices. Full task can be viewed below or at https://github.com/reallabs/react-take-home.

## Commands

This project was bundled using WebPack and Babel. Development was performed using the WebPack
Dev Server, 
`yarn run dev-server`, 
and production code bundled with 
`yarn run build`.

The original `public` folder was renamed to `docs` for GitHub Pages hosting
compatibility, bundler config files were updated to reflect this change.

## Design Choices

I chose not to use the provided create-react-app starting point and instead opted to begin the project
with my own React/Redux boilerplate. I wanted to include Redux in this project in order to provide a
way of organizing the app that would allow for modularity and future expansion.

With the introduction of Hooks in React 16.8, the community appears to be trending toward using functional components over class based components when possible. React Hooks allowed me to incorporate localized state and React lifecycle methods without utitlizing class based components in this project.

Certain details were inferred from the sketch such as a sticky navbar/header and some form of UI
indication for copying links to the clipboard. Two resource related problems I encountered were
campaign names being too long to display correctly and a media cover photo that was in the landscape
orientation. I made the choice to truncate campaign names to fit correctly in the page and solved the cover photo issue by stretching the photo into a portrait orientation. 

# --------------------------------------------

# JetFuel Take Home Exercise

This is a frontend exercise that will give you the chance to see what kind of things we build at JetFuel!

You will be building a simplified version of our main app, the Plug (www.plugco.in). This is the app through which our influencer access our offers, track their earnings, and manage their account. In particular, you will be recreating our main 'offer' feed:

We've spun up an endpoint on our server to return a sample feed of offers as a JSON blob. You can access that here:
http://www.plugco.in/public/take_home_sample_feed

Your job is set up a react project that calls the sample endpoint and renders feed based on the JSON data returned. I've provided the design and an explanation of each component in a Sketch file - 'feed_template_react_01.sketch'. This file is included in the repository:

![starter-screenshot](https://i.imgur.com/ynkHNTC.png)

Note - We're only providing mobile designs. For the sake of this exercise, there's no need to build this for desktop!

We have a starter app provided in the `./app` directory, please complete your project here.

Ideally, this should take around a day to finish, but let us know how much time you spent so we can calibrate our expectations!


## Getting started

Run the following commands:

```
cd app
npm start
```

After that, your browser should open up a skeleton React app. You can edit any file in `./src/` and in _most_ cases the website will hot-reload.

For more info, you can check out https://github.com/facebook/create-react-app

## Bonus


- Can you handle failed API requests gracefully? Maybe redirect to a 'failed' UI state with a rety option? 
- Can you get the videos to play inline when the 'play' icon is tapped?
- What steps can you take to optimize the load time of cover photos? How about the scroll performance? 
- Can you add pull-to-refresh? 

## Questions?

Feel free to reach out if you have any questions!
