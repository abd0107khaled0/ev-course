import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Navbar from "../components/Arabic/Navbar/NavBar.vue";
import HomeV from "../views/Arabic/Home.vue";
import Alhadth from "../views/Arabic/Alhadth.vue";
import Alhagz from "../views/Arabic/Alhagz.vue";
import Andam from "../views/Arabic/Andam.vue";
import Atasl from "../views/Arabic/Atasl.vue";
import Dawarat from "../views/Arabic/Dawarat.vue";
import Login from "../views/Arabic/Login.vue";
import SignUp from "../views/Arabic/SignUp.vue";
import Tzaker from "../views/Arabic/Tzaker.vue";
import Dawra from "../views/Arabic/Dawra.vue";
import Opinion from "../views/Arabic/Opinion.vue";
import AlExpire from "../views/Arabic/AlExpire.vue";
import Partners from "../views/Arabic/Partners.vue";
import Wee from "../views/Arabic/WEE.vue";
import New from "../views/Arabic/New.vue";
import Team from "../views/Arabic/Team.vue";
import ContactUs from "../views/Arabic/ContactUs.vue";
import Govern from "../views/Arabic/Govern.vue";
import Helpers from "../views/Arabic/Helpers.vue";
import Rules from "../views/Arabic/Rules.vue";
import Question from "../views/Arabic/Question.vue";
import Paying from "../views/Arabic/Paying.vue";
import Problem from "../views/Arabic/Problem.vue";
import Expert from "../views/Arabic/Expert.vue";
import JoinPart from "../views/Arabic/JoinPart.vue";
import QuestionD from "../views/Arabic/QuestionD.vue";
import QuestionF from "../views/Arabic/QuestionF.vue";
import QuestionS from "../views/Arabic/QuestionS.vue";
import Success from "../views/Arabic/Success.vue";
import Video from "../views/Arabic/Video.vue";
import UserPage from "../views/Arabic/UserPage.vue";
import Page from "../views/Arabic/Page.vue";
import ErorrPage from "../views/Arabic/ErorrPage.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar,
  },
  {
    path: "/",
    name: "Home",
    component: HomeV,
  },
  {
    path: "/Alhadth",
    name: "Alhadth",
    component: Alhadth,
  },
  {
    path: "/Alhagz/:hagz",
    name: "Alhagz",
    component: Alhagz,
  },
  {
    path: "/Dawra/:dawra",
    name: "Dawra",
    component: Dawra,
  },
  {
    path: "/Andam",
    name: "Andam",
    component: Andam,
  },
  {
    path: "/Atasl",
    name: "Atasl",
    component: Atasl,
  },
  {
    path: "/Dawarat",
    name: "Dawarat",
    component: Dawarat,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/Tzaker",
    name: "Tzaker",
    component: Tzaker,
  },
  {
    path: "/opinion",
    name: "opinion",
    component: Opinion,
  },
  {
    path: "/AlExpire",
    name: "AlExpire",
    component: AlExpire,
  },
  {
    path: "/Partners",
    name: "Partners",
    component: Partners,
  },
  {
    path: "/Wee",
    name: "Wee",
    component: Wee,
  },
  {
    path: "/New",
    name: "New",
    component: New,
  },
  {
    path: "/Team",
    name: "Team",
    component: Team,
  },
  {
    path: "/Govern",
    name: "Govern",
    component: Govern,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/Rules",
    name: "Rules",
    component: Rules,
  },
  {
    path: "/Helpers",
    name: "Helpers",
    component: Helpers,
  },
  {
    path: "/Question",
    name: "Question",
    component: Question,
  },
  {
    path: "/Paying",
    name: "Paying",
    component: Paying,
  },
  {
    path: "/Problem",
    name: "Problem",
    component: Problem,
  },
  {
    path: "/Expert",
    name: "Expert",
    component: Expert,
  },
  {
    path: "/JoinPart",
    name: "JoinPart",
    component: JoinPart,
  },
  {
    path: "/QuestionD",
    name: "QuestionD",
    component: QuestionD,
  },
  {
    path: "/QuestionF",
    name: "QuestionF",
    component: QuestionF,
  },
  {
    path: "/QuestionS",
    name: "QuestionS",
    component: QuestionS,
  },
  {
    path: "/SignOut/Success",
    name: "Success",
    component: Success,
  },
  {
    path: "/Video/:id",
    name: "Video",
    component: Video,
  },
  {
    path: "/UserPage",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/Page",
    name: "Page",
    component: Page,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErorrPage",
    component: ErorrPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log(to); // جاى من
  // console.log(from); // رايح من
  if (to.name != null) {
    if (to.params.pageTitle == undefined) to.params.pageTitle = from.name;
    document.title = process.env.VUE_APP_TITLE + " |" + " " + to.name;
    // (to.params.pageTitle ? to.params.pageTitle + " |" : "");
    // " " +
  }
  next(); //function
});

export default router;
