# GAME [SENSHI(戦士)](https://en.wikipedia.org/wiki/Senshi)

<p align="center">
  <img src='./public/android-chrome-512x512.png'>
</p>

A platform for gamers/streamers to provide their casual service and link up with others in the community.

[**Demo Page**](https://www.gamesenshi.com/index)

route: index
![index.png](./src/assets/img/readme/index.png)

route: profile/2QvJMnyN73SnBXaLuRR0REQpY8X2
![profile.png](./src/assets/img/readme/profile.png)

route: signup
note: each sign up method can be linked to each other, example:

1. sign up with password account then link with Google account
2. sign up with Google account then link with password account.
3. sign up with Twitch account then link with Facebook account.

![signUp.png](./src/assets/img/readme/signUp.png)

route: signin
![signIn.png](./src/assets/img/readme/signIn.png)

route: reset
![reset.png](./src/assets/img/readme/reset.png)

route: settings
![settings.png](./src/assets/img/readme/settings.png)

route: policy
![policy.png](./src/assets/img/readme/policy.png)

route: `none of above`
![error.png](./src/assets/img/readme/error.png)

## Introduction

This is a project that is designed to allow the user the ability to temporarily hire other gamers to play with them. Similar to hiring someone to work with you, this allows you the opportunity to hire another gamer to game with you. It is all about gaming companionship.

From the consumer perspective:

1. You are a big fan of a professional gamer/famous streamer, and you want to play a game with with your beloved star., either as a sparring partner(opponent), or teammate.
2. You are looking for someone to help you improve as a gamer, and want a gaming "coach" that can help you along in that process.
3. You want to rank up in a specific game, but need help. You need a strong and capable teammate who has lots of experience with that game!
4. You have a nice but less known multiplayer game, hire your fighter here!
5. You're merely looking to hang out and socialize with streamers/gamers in a relaxed environment!

From provider perspective:  

While some gamers/streamers do make a lot of money, the large majority of gamers and/or streamers do not. This platform provides the opportunity for many gamers and streamers to expand their viewer base, reach new potential viewers and people to game with, and make new friends along the way! It also helps to link casual gamers up with more competitive and successful gamers/streamers, and in return helping everyone in the community grow. With this platform, we can create a new work force of gamers who are doing what they love, and making money along the way!

## Application Features

Core Features:

1. Marketplace
2. Payment
3. Chat

Optional Features:

1. Gaming Contents
2. Event Organizer

## Getting Started  

Andrei's [React Course](https://www.udemy.com/complete-react-developer-zero-to-mastery/?couponCode=ZTMREACTLAUNCH) has almost all knowledge you need to get started.  

PS: this is not advertising, this is coincidence, this project already existed for 3 months before the course was released.

## Installation

A step by step series of examples that tell you how to get the development env running.

After git clone

request the `.config` folder(s) from `tylim#9831` in `Discord`

```bash
node install.js
```

```bash
npm run dev
// run with dev env var, this may not work as dev is connect to dev server (experiment server)  

npm run prod
// run with prod env var, recommended since this will work as experted most of the time
```

Now you can start hacking on front end!

## Deployment

🛑 Ignore this deployment section if you don't want to work with back end (firebase).

Direct message `tylim#9831` in `Discord` your email to become user of this firebase project.

If you skip this step you have to setup your own firebase project.

```bash
npm i -g firebase-tools
```

```bash
firebase login
```

above command is one time setup, anytime you want to run deploy, simply

```bash
npm run d-deploy // deploy to dev server  
npm run p-deploy // deploy to prod server
```

It will automatically inject production environment variable, build and deploy front end or back end (if you run the command in functions folder).

after deployment, you can view it at

1. [prod](https://gamesenshi.com/)
2. [dev](https://game-senshi.firebaseapp.com/)

## Built With

- [Create-React-App](http://www.dropwizard.io/1.0.2/docs/) - React Project Generator
- [Blk• Design System React](https://github.com/creativetimofficial/blk-design-system-react/) - Bootstrap
- [Styled Component](https://www.styled-components.com/) - CSS
- [Firebase](https://firebase.google.com/) - Authentication, Storage, Database, Chat and Endpoint
- [Stripe](https://stripe.com/) - Payment

Please read [wiki](https://github.com/tylim88/GameSenshi/wiki) for details of our code, techs, guides and resources.

## Contributing

Join our [Trello](https://trello.com/invite/b/tAyH3oig/a5374e9eaa1bbe644f3e7367d1e23300/game-senshi).

Join our Discord Channel
![joinChannel.png](./src/assets/img/readme/joinChannel.png)

Please read [CONTRIBUTING.md](https://github.com/tylim88/GameSenshi/blob/master/CONTRIBUTING.md) for details on how to contribute.
