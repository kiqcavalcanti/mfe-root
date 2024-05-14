import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements as navElement } from 'kiq-web-comp/loader'
import { defineCustomElements as projectElement  } from 'kiq-web-comp-projects/loader'
import { defineCustomElements as teamsElement  } from 'kiq-web-comp-teams/loader'
import router from "./router";
navElement(window)
projectElement(window)
teamsElement(window)

const app = createApp(App);

app.use(router)

app.mount('#app')


