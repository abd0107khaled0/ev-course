<template>
  <div class="ExpireC2">
    <div class="container">
      <div class="row text-center">
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
  name: "ExpireC2",
  data() {
    return {
      orderDB: [],
    };
  },
  mounted() {
    this.orderDB = DB["Alhadthe"];
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.ExpireC2 {
  padding: 40px 0;
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 50px;
    padding: 90px 0;
    border: 1px solid var(--button-back);
    overflow: overlay;
    height: 90vh;
    .order_box {
      padding: 30px 0;
      margin: 50px 0;
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
  .ExpireC2 {
    .row {
      direction: ltr;
      img {
        top: -55%;
      }
    }
  }
}
@media (max-width: 768px) {
  .ExpireC2 {
    padding: 20px 0;
    margin: 0;
    .order_box {
      img {
        top: -60% !important;
      }
    }
    .order_box {
      margin: 60px 0;
    }
  }
}
</style>
