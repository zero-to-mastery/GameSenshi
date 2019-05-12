# DEV

## Techs

Most that work on this project is new to web dev, so this page give you idea about the techs and possibly fast guide to it.

Here is list of techs we use to build the project.

Frontend:

| Tech                                                                  |       Usage       |  Priority  | Difficulty |
| :-------------------------------------------------------------------- | :---------------: | :--------: | :--------: |
| [React](https://reactjs.org/)                                         |     Rendering     | ⭐️⭐️⭐️⭐️⭐️ | 🌟🌟🌟🌟🌟 |
| [Unstated-Next](https://github.com/jamiebuilds/unstated-next)         | State Management  |  ⭐️⭐️⭐️⭐️  |   🌟🌟🌟   |
| [BLK](https://github.com/creativetimofficial/blk-design-system-react) |     Bootstrap     |  ⭐️⭐️⭐️⭐️  |    🌟🌟    |
| [JSS](https://cssinjs.org/)                                           |     CSS in JS     |   ⭐️⭐️⭐️   |   🌟🌟🌟   |
| [WorkBox](https://developers.google.com/web/tools/workbox/)           |  Service Worker   |   ⭐️⭐️⭐️   |  🌟🌟🌟🌟  |
| [LocalForage](https://github.com/localForage/localForage)             | IndexedDB Wrapper |    ⭐️⭐️    |     🌟     |
| [ky](https://github.com/sindresorhus/ky)                              |   Fetch Wrapper   |    ⭐️⭐️    |    🌟🌟    |
| [Material-UI](https://material-ui.com/)                               |    Components     |     ⭐️     |    🌟🌟    |

Backend:

| Tech                                                  |       Usage       |  Priority  | Difficulty |
| :---------------------------------------------------- | :---------------: | :--------: | :--------: |
| [Firebase](https://firebase.google.com/)              |      Backend      | ⭐️⭐️⭐️⭐️⭐️ |  🌟🌟🌟🌟  |
| [Web Push](https://github.com/web-push-libs/web-push) | Push Notification |   ⭐️⭐️⭐️   |   🌟🌟🌟   |
| [CORS](https://github.com/expressjs/cors)             |       CORS        |    ⭐️⭐️    |     🌟     |
| [Got](https://github.com/sindresorhus/got)            |     HTTP call     |    ⭐️⭐️    |    🌟🌟    |
| [Busboy](https://github.com/mscdex/busboy)            |    Form Parser    |    ⭐️⭐️    |    🌟🌟    |
| [UUID-v4](https://github.com/kelektiv/node-uuid)      |       UUID        |    ⭐️⭐️    |     🌟     |

⭐️⭐️⭐️⭐️⭐️: You need this to literally do anything.  
⭐️⭐️⭐️⭐️: Possible to contribute but extremely limited.  
⭐️⭐️⭐️ : Unable to work on certain module but still possible to contribute significantly.  
⭐️⭐️: Highly recommend, but use native API if you don't want to use it.  
⭐️: You are free to use your favorite equivalent library.  

🌟🌟🌟🌟🌟: Ground up guidance is not possible, you must have basic in this.  
🌟🌟🌟🌟: Possible to introduce it to you, but you still need to feed yourself the documentation.  
🌟🌟🌟: Possible to explain with self made documentation.  
🌟🌟: Can be easily explained.  
🌟: Cake.

We prioritize developing experience, so we choose techs that are easy to use and rich in resources, if you have better suggestion you are free to voice it out.

### Rendering

It is extremely unlikely we shift to Vue or Angular, we will implement React till the end.

You are free to use Class and Hook, but all cross component state must use Unstated-Next.

May use isomorphic rendering like Nextjs in future but seem like bar is too high for most people to contribute.

### Bootstrap

BLK currently is the best in the market now(as for 2019), this is not something that we should change easily however please let the team know if you found better, we can use it in other projects.

### WorkBox

Seem like there is no alternative to WorkBox, so we gonna stick with this one.

### CSS

We shall stick with CSS in JS tech, most likely JSS and Styled Component. We encourage you to write all your CSS in JS. As for components library, you are free to use any resources you want, as long as it doesn't bloated the app and it look nice.

### Backend

We decided to use firebase as it greatly reduces the workload, it is also a ground up solution with nice SDK plus it come with free plan (with is very rare for backend service).

Other libraries are just standard libraries that we use, if you have better in mind, just let the team know.

## Resources

### Icons

1. https://icons8.com/
2. https://www.amcharts.com/free-animated-svg-weather-icons/
3. https://www.iconfinder.com/iconsets/google-material-design-icons
4. https://www.iconshock.com/material-design-icons/
5. https://nucleoapp.com/