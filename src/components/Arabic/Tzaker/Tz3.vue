<template>
  <div class="tzc3">
    <div class="container">
      <h3 class="h1">المتحدثون</h3>
      <div class="home_body text-center">
        <div class="min_body">
          <div class="min_box">
            <div
              class="box_cont_min"
              v-for="member in membersMin"
              :key="member.id"
            >
              <img :src="require(`@/assets/img/${member.img}`)" alt="" />
              <h5>{{ member.user }}</h5>
              <p class="p">{{ member.name }}</p>
            </div>
          </div>
          <button class="button" @click="ShowMore()">اعرض المزيد</button>
        </div>
        <div class="max_body">
          <div class="max_box">
            <div
              class="box_cont_max"
              v-for="member in membersMax"
              :key="member.id"
            >
              <img :src="require(`@/assets/img/${member.img}`)" alt="" />
              <h5>{{ member.user }}</h5>
              <p class="p">{{ member.name }}</p>
            </div>
          </div>
          <button class="button" @click="ShowMore()">اعرض القليل</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DB from "@/DB/db.json";
export default {
  name: "TzC3",
  data() {
    return {
      membersMin: [],
      membersMax: [],
      show: true,
    };
  },
  mounted() {
    this.membersF();
  },
  methods: {
    ShowMore() {
      let max = document.querySelector(".tzc3 .max_body");
      let button1 = document.querySelector(".tzc3 button:first-of-type");
      if (this.show) {
        max.style.cssText =
          " display: block ;transition : all 0.5s ease-in-out";
        button1.style.display = "none";
      } else {
        max.style.cssText = " display: none ;transition : all 0.5s ease-in-out";
        button1.style.display = "block";
      }
      this.show = !this.show;
    },
    async membersF() {
      let result = await DB["Alhadthe"];
      let i;
      if (result.length >= 1) {
        for (i = 0; i < 5; i++) {
          if (result.length == i) {
            document.querySelector(".tzc3 button:first-of-type").style.display =
              "none";
            break;
          } else {
            this.membersMin.push(result[i]);
          }
        }
      }
      if (result.length >= 4) {
        for (i = 5; i < result.length; i++) {
          this.membersMax.push(result[i]);
        }
      }
      console.log(result.length);
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.tzc3 {
  margin: 70px 0;
  h3 {
    transition: all 0.3s ease-in-out;
    text-align: right;
    font-weight: normal;
    font-size: calc(22px + 1.2vw);
    margin-block-end: 25px;
    opacity: 0.85;
  }
  button {
    padding: 10px 20px;
    font-size: 18px;
    margin: 40px auto;
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #000;
    }
    &:active {
      color: #fff;
      background: var(--button-back);
    }
  }
  .max_body {
    transition: all 0.3s ease-in-out;
    display: none;
    margin: 35px 0;
  }
  .min_box,
  .max_box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    img {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      margin-block-end: 10px;
      box-shadow: 0px 0px 9px 0px;
      transition: all 0.3s ease-in-out;
    }
    h5 {
      font-size: calc(20px + 0.5vw);
      font-weight: bold;
      line-height: 1.7;
    }
    p {
      font-size: 18px;
    }
    .box_cont_min,
    .box_cont_max {
      &:hover {
        img {
          box-shadow: 0px 0px 9px 4px;
          transform: scale(1.1);
        }
      }
    }
  }
  &:hover {
    h3 {
      opacity: 1;
    }
  }
}
@media (max-width: 991px) {
  .tzc3 {
    h3 {
      text-align: center;
      font-weight: bold;
    }
    .min_box,
    .max_box {
      flex-direction: column;
    }
  }
}
</style>
