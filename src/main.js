import "~/stylesheets/main.css"

import { createPinia } from "pinia"
import { createApp } from "vue"

import router from "~/router"

import Application from "~/components/Application.vue"

const pinia = createPinia()

const app = createApp(Application)

app.use(pinia)
app.use(router)

app.mount("#app")
