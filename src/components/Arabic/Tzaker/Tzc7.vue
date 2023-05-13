<template>
  <div class="tzc7">
    <div class="container">
      <div class="row text-center">
        <div class="order_he">
          <h1 class="h1" @click="scrollT()">
            <router-link to="/opinion"> اراء العملاء </router-link>
          </h1>
        </div>
        <div class="order_box" v-for="order in orderDB" :key="order.id">
          <img :src="require(`@/assets/img/${order.img}`)" alt="" />
          <h3 class="h1">{{ order.user }}</h3>
          <p class="p">{{ order.inform }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DB from "@/DB/db.json";
export default {
  name: "TzC7",
  data() {
    return {
      orderDB: [],
    };
  },
  mounted() {
    this.compDB();
  },
  methods: {
    compDB() {
      let db = DB["Alhadthe"];
      if (db.length >= 1) {
        for (let i = 0; i < 2; i++) {
          this.orderDB.push(db[i]);
        }
      } else {
        this.orderDB = [
          {
            img: "",
            inform: "لا يوجد",
            user: "لا يوجد",
          },
        ];
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.tzc7 {
  padding: 90px 0;
  margin: 50px 0;
  .row {
    direction: rtl;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 50px;
    .order_he {
      h1 {
        transform: translateY(50%);
        width: fit-content;
        margin: 0px auto;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        a {
          transition: all 0.3s ease-in-out;
          color: var(--button-back);
          text-decoration: underline;
        }
        &:hover {
          a {
            color: #353374;
          }
        }
        &:active {
          a {
            color: var(--button-back);
          }
        }
      }
    }
    .order_box {
      background: var(--background-body);
      padding: 30px 0;
      border-radius: 15px;
      position: relative;
      cursor: pointer;
      img {
        position: absolute;
        width: 125px;
        height: 125px;
        border-radius: 50%;
        top: -40%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 0px 9px 0px;
        transition: all 0.3s ease-in-out;
      }
      h3 {
        font-size: calc(20px + 1.1vw);
        margin: 15px 0;
      }
      &:hover {
        img {
          box-shadow: 0px 0px 9px 4px;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .tzc7 {
    .row {
      direction: ltr;
    }
  }
}
@media (max-width: 768px) {
  .tzc7 {
    padding: 20px 0;
    margin: 0;
    .order_box {
      img {
        top: -60% !important;
      }
    }
    .order_box,
    .order_he {
      margin: 60px 0;
    }
  }
}
</style>
