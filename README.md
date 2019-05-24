# GAME [SENSHI(戦士)](https://en.wikipedia.org/wiki/Senshi)

A platform for gamers/streamers to provide their casual service.

## Introduction

This is project that temporary hire people to play game with you. You can imagine this as you hire someone to work for you for few hours, but unlike conventional task, this is about game companion.

From consumer perspectives:

1. You are a big fans of a professional/famous gamer, you want to play a game with him, either as sparring partner(opponent) or team mate.
2. You are a fans of good looking or fun streamer, you want to play with her/him.
3. You are looking for game coach, gamer that systemized his knowledge and make you a better gamer.
4. You are looking for booster, gamer that help you rank up by either playing your account or as your team mate.

From provider perspective:
While some gamers/streamers do make big buck, but large majority of gamers or streamers make little or to none money out of gaming, so this platform can play a part in gaming economy as it can turn gamers into new work force.

## Getting Started

It is very easy to get started, this project is beginner friendly (everything is in ES6+ !) and a lot of process is highly automated (comprehensive scripts, you can trust someone who made [this](https://github.com/tylim88/Create-Prisma-App/blob/master/template/package.json)).

Ease of developing is always our top priority, easier and better developing tool is always welcomed and adopted, but that doesn't mean we sacrifice quality, in fact it is the reverse, we make developing easier because we want more time spend on tinkering how to create better web app experience(such as [this](https://github.com/zero-to-mastery/GameSenshi/wiki/Form-State-Management)).

In this project, you can expect to be able to write nicer code, apply better implementation, enhance workflow and being critical when picking libraries.

## Installation

A step by step series of examples that tell you how to get the development env running.

After git clone

```bash
node install.js
```

request the `.config` folder(s) from `tylim#9831` in `Discord`

```bash
npm run dev
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
npm run deploy
```

It will automatically inject production environment variable, build and deploy front end or back end (depend on which terminal you in)

There is also command to deploy both end:

```bash
firebase deploy
```

after deployment, you can view it [here](https://gamesenshi.com/).

## Built With

- [Create-React-App](http://www.dropwizard.io/1.0.2/docs/) - React Project Generator
- [Blk• Design System React](https://github.com/creativetimofficial/blk-design-system-react/) - Bootstrap
- [Firebase](https://firebase.google.com/) - Backend

Please read [wiki](https://github.com/tylim88/GameSenshi/wiki) for details of our code, techs, guides and resources.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/tylim88/GameSenshi/blob/master/CONTRIBUTING.md) for details on how to contribute.
