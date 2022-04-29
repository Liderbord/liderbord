# Liderbord

Liderbord lets you search and rank resources linked to a topic of interest.


## 👩‍💻 Installation

In order for the app to run you now need the `moralis-keys.json` file. This file contains secrets and you should never put them on this repository. You can find the `moralis-keys.json` in our notion, and you should place in the `src` folder.

If in the future you want to add secrets in the app, do not put them in the code, put them in the `moralis-keys.json` file, then update the notion file and let others know in the PR and by message.

Make sure you have node 16 or more installed. Make sure you have `yarn` installed. To install yarn run `npm install -G yarn`

### 🟢 Starting the app
Every time you change branch you must check for, and install potential new packages, you can do this by running `yarn`.

Then to start the app, use `yarn start`.

Do not use `npm run` or `npm install`, as this will introduce another package manager in the project and will lead to messy, unwanted conflicts.

