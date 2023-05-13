import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./assets/scss/main.scss";
// import GAuth from "vue3-google-oauth2";

const myGlobal = {
  data() {
    return {
      NameProject: "BEE",
    };
  },
  methods: {
    scrollT() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
// import GAuth from "vue-google-oauth2";

// const gauthOption = {
//   clientId:
//     "66505421814-e8li1aufeijkkcilspe49om9g7u9f8u5.apps.googleusercontent.com",
//   scope: "profile email",
//   prompt: "select_account",
//   fetch_basic_profile: true,
// };
// app.use(GAuth, {
//   clientId:
//     "66505421814-8he5m2jvcf3acbmuu742cl34c1r6af86.apps.googleusercontent.com",
//   scope: "email",
//   prompt: "consent",
//   fetch_basic_profile: true,
// });
// Vue.use(GAuth, gauthOption);
const app = createApp(App);
app.mixin(myGlobal);
app.use(store).use(router).mount("#app");
