import router from "@/router";
import { createStore } from "vuex";
import axios from "axios";

const state = {
  dataM: [],
  status: true,
  numberOfC: 5,
  Clock: 5,
  discount: "20%",
  data: "2/2/2002",
  nameC: "Hello world",
  statusOF: "جديد",
  lang: "",
  inform: "تعلم لتحترف",
  user_name: "خبير ",
  user_exp: "خبير ",
  training: ["مقدمه 1"],
  imgs: "https://placehold.co/600x400",
  id: "",
  wordPass: "",
  wordPhone: "",
};
const getters = {
  d(state) {
    return state.dataM;
  },
};

const mutations = {
  async Vid(state, payload) {
    let result = await axios(`http://localhost:3000/videos?id=${payload.n}`);
    if (result.status == 200) {
      console.log(result.data[0]);
      state.dataM = result.data;
      state.numberOfC = result.data[0].numberOfC;
      state.Clock = result.data[0].Clock;
      state.discount = result.data[0].discount;
      state.data = result.data[0].data;
      state.nameC = result.data[0].nameC;
      state.statusOF = result.data[0].statusOF;
      state.lang = result.data[0].lang;
      state.inform = result.data[0].inform;
      state.user_name = result.data[0].user_name;
      state.user_exp = result.data[0].user_exp;
      state.training = result.data[0].training;
      state.imgs = result.data[0].imgs;
      state.id = result.data[0].id;
    }
  },
  async userInfo(state, payload) {
    let user = await axios.get(
      `http://localhost:3000/users?email=${payload.email}`
    );
    if (user.status == 200 && user.data.length > 0) {
      state.wordPass = user.data[0].email;
      state.wordPhone = user.data[0].phone;
    }
  },
  redirectTo(state, payload) {
    router.push({ name: payload });
  },
};
const actions = {
  redirectTo({ commit }, payload) {
    commit("redirectTo", payload.val);
  },
};
export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
