# interview

## Exercise
### Framework
Vue & Vuetify

### API
university-domains-list - https://github.com/Hipo/university-domains-list

### Goal
In the file App.vue a basic [Vuetify component (autocomplete)](https://vuetifyjs.com/en/components/autocompletes/).
was implemented. 
It allows you to search for a University with [this free API](https://github.com/Hipo/university-domains-list).

A fetch request is implemented in the /store/modules/universities.js with this hardcoded endpoint: `/search?name=middle`.

Vuex is used to manage the states and perform the API requests.

TODO
- The user's input in the autocomplete should be considered in the request.
- Prevent the GET request to be fired after each keyboard input.
- Allow the page to select a country which will be added to the search.

Extra: javascript initials method: https://jsfiddle.net/framoroso/1evqh7tu/353/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
