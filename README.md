# Upshifters chart

**Note:** I have found that every brand had only one price, as it was found only once in the retrieved data from the endpoint, so to draw tha chart i have filled the array with random data, after comming from the endpoint with just only one number.

## Run Locally

Clone the project (ssh)

```bash
  git clone git@github.com:mohammed-hossam/upshifters-chart.git
```

Go to the project directory

```bash
  cd (project-name)
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```

Run tests

```bash
  npm run cypress:test
```

## Used Tools

- [chart.js](https://nextjs.org/docs/getting-started): To draw charts.
- [Redux-toolkit](https://redux-toolkit.js.org/): To manage the state.
- [Redux-persist](https://redux-toolkit.js.org/): To save in webstorage with Redux.
- [i18next](https://redux-toolkit.js.org/): To manage translations.
- [MaterialUi](https://mui.com/): Used for styling.
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress): To make some tests.
