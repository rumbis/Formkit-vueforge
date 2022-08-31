import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import "./style.css";
// import Maska from "maska/src/maska.js";

createApp(App)
  // slightly hacky way of using Maska with Formkit
  // this makes it so that I can add data-mask to the FormKit components
  // .use((app) => {
  //   app.mixin({
  //     mounted() {
  //       new Maska("[data-mask]");
  //     }
  //   });
  // })
  .use(
    plugin,
    defaultConfig({
      theme: "genesis",
    })
  )
  .mount("#app");
