<template>
  <div class="home-c4">
    <div class="container">
      <div class="box_body">
        <div class="slides">
          <button @click="transRight()">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button @click="transLeft()">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <h1 class="h1">
          <router-link to="/Alhadth">اخر الاخبار</router-link>
        </h1>
      </div>
      <div class="box_cards">
        <div class="card_body" v-for="(hadth, i) in Alhadthe" :key="i">
          <img :src="require(`@/assets/img/${hadth.img}`)" alt="" />
          <div class="card_inform_body">
            <div class="card_inform">
              <h4>{{ hadth.name }}</h4>
              <span>{{ hadth.time }}</span>
              <p class="p">{{ hadth.inform }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DB from "@/DB/db.json";
export default {
  name: "NweC2",
  data() {
    return {
      Alhadthe: [],
      count: 0,
    };
  },
  mounted() {
    this.Alhadthe = DB["Alhadthe"];
    if (document.body.clientWidth <= 991) {
      let Slides = document.querySelectorAll(".home-c4 .box_cards .card_body");
      Slides.forEach((e) => {
        e.style.transform = `translateX(0px)`;
      });
    }
  },
  methods: {
    transRight() {
      let Slides = document.querySelectorAll(".home-c4 .box_cards .card_body");
      this.count <= (this.Alhadthe.length - 3) * 321
        ? (this.count += 321)
        : this.count;
      Slides.forEach((e) => {
        e.style.transform = `translateX(-${this.count}px)`;
      });
    },
    transLeft() {
      let Slides = document.querySelectorAll(".home-c4 .box_cards .card_body");
      if (this.count !== 0) {
        this.count -= 321;
        Slides.forEach((e) => {
          e.style.transform = `translateX(-${this.count}px)`;
        });
      } else {
        this.count = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-c4 {
  padding: 50px 0;
  .box_body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .slides {
      button {
        background: transparent;
        border-radius: 50%;
        border: 1px solid var(--button-back);
        margin: 10px;
        i {
          padding: 15px;
          font-size: 24px;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: var(--button-back);
          }
          &:active {
            color: #fff;
          }
        }
      }
    }
  }
  .box_cards {
    display: flex;
    padding: 40px 0;
    overflow: hidden;
    align-items: center;
    gap: 30px;
    .card_body {
      width: 300px;
      direction: rtl;
      background: #fff;
      border-radius: 7px;
      transition: all 0.3s ease-in-out;
      img {
        width: 300px;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        height: 222px;
        image-rendering: revert;
      }
      .card_inform_body {
        padding: 20px 5px;
        .card_inform {
          h4 {
            font-weight: bold;
            line-height: 1.7;
          }
          p {
            font-size: calc(10px + 0.35vw);
            font-weight: bold;
          }
          span {
            font-size: 12px;
            color: var(--small-text);
          }
        }
        .card_name {
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            font-weight: bold;
            font-size: 20px;
          }
        }
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.03);
        box-shadow: 0px 0px 15px 3px var(--button-back);
      }
    }
  }
}

@media (max-width: 991px) {
  .home-c4 {
    .box_body {
      justify-content: center;
      .slides {
        display: none;
      }
    }
    .box_cards {
      flex-direction: column;
      height: 700px;
      overflow: overlay;
    }
  }
}
</style>
