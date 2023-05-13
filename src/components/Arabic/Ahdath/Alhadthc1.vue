<template>
  <div class="dawarat2">
    <div class="spans" @click="containerBox()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="dawaratc1">
      <div class="containerBox">
        <div class="box categories">
          <h4>الفئات</h4>
          <ul>
            <li v-for="categorie in Categories" :key="categorie.id">
              {{ categorie }}
              <i class="fa-solid fa-angle-left"></i>
            </li>
            <li>+ المزيد</li>
          </ul>
        </div>
        <div class="box price">
          <h4>السعر</h4>
          <input
            type="range"
            id="range"
            :min="minPrice"
            :max="maxPrice"
            value="10"
            @input="Input()"
          />
          <div class="price_min_max">
            <span id="">{{ minPrice }}Egp</span>
            <span id="spanRange">{{ maxPrice }}Egp</span>
          </div>
        </div>
        <div class="box types">
          <h4>النوع</h4>
          <ul>
            <li v-for="Type in Types" :key="Type.id">
              {{ Type }}
              <i class="fa-solid fa-angle-left"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="box_body">
        <div class="box_cards">
          <div class="card_body" v-for="(hadth, i) in Aldawarat" :key="i">
            <img :src="require(`@/assets/img/${hadth.img}`)" alt="" />
            <div class="card_inform_body">
              <div class="card_inform">
                <h4>{{ hadth.name }}</h4>
                <span>{{ hadth.time }}</span>
                <p class="p">{{ hadth.inform }}</p>
              </div>
              <div class="card_name">
                <span> {{ hadth.user }} </span>
                <i class="fa-regular fa-bookmark"></i>
              </div>
              <button class="button">
                <router-link
                  :to="{ name: 'Video', params: { id: hadth.id } }"
                  @click="scrollT()"
                  >احجز الان</router-link
                >
              </button>
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
  name: "AlhadthC1",
  mounted() {
    this.Aldawarat = DB["Alhadthe"];
    document.getElementById("range").value = 50;
  },
  data() {
    return {
      Aldawarat: [],
      Categories: [
        "ادارة الاعمال",
        "اللغات",
        "ريادة الاعمال",
        "العلوم و التكنولوجيا",
        "الفنون و العمارة",
        "التربيه و العلاقات",
      ],
      Types: ["جديد", " عروض", "الاكثر مشاهده", "لم يطرح بعد", " مقترحات "],
      minPrice: "10",
      maxPrice: "300",
      show: false,
    };
  },
  methods: {
    Input() {
      document.getElementById("spanRange").innerText =
        document.getElementById("range").value + "Egp";
    },
    containerBox() {
      let span1 = document.querySelector(".dawarat2 .spans span:first-of-type");
      let span2 = document.querySelector(
        ".dawarat2 .spans span:nth-of-type(2)"
      );
      let Show = document.querySelector(".dawarat2 .containerBox");
      if (this.show == false) {
        Show.style.display = "block";
        span1.classList.add("span1");
        span2.classList.add("span2");
      } else {
        Show.style.display = "none";
        span1.classList.remove("span1");
        span2.classList.remove("span2");
      }
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.span1 {
  transform: rotate(45deg);
  background: #fff !important;
}
.span2 {
  background: #fff !important;
  transform: rotate(-45deg) translateY(-5px) translateX(6px);
  color: #fff;
}
.dawarat2 {
  position: relative;
  .spans {
    cursor: pointer;
    display: none;
    position: absolute;
    top: -38px;
    left: 11px;
    background: var(--button-back);
    padding: 5px;
    border-radius: 4px;
    width: 33px;
    z-index: 1;
    span {
      width: 20px;
      height: 4px;
      background: #000;
      margin: 4px 0;
      display: block;
    }
  }
  margin: 100px 0;
  .dawaratc1 {
    margin-block-start: 60px;
    position: relative;

    .containerBox {
      z-index: 2;
      height: 99vh;
      overflow: overlay;
      position: absolute;
      right: -11px;
      background: var(--background-color);
      padding: 43px 20px;
      margin: 0 20px;
      width: 250px;
      top: -39px;
      transition: all 0.3s ease-in-out;
      .box {
        direction: rtl;
        h4 {
          font-size: 32px;
          font-weight: bold;
          opacity: 0.6;
          padding: 12px 0;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          h4 {
            opacity: 0.9;
          }
        }
      }
      .categories,
      .types {
        ul {
          li {
            margin: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
            i {
              transition: all 0.3s ease-in-out;
            }
            &:hover {
              cursor: pointer;
              i {
                animation: myFirst 0.2s linear infinite alternate;
                color: var(--button-back);
              }
            }
          }
        }
      }
      .price {
        padding-block: 20px;
        border-block: 3px solid #000;
        input {
          display: block;
          width: 100%;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          margin-block-start: 10px;
        }
      }
    }
  }
  .container {
    .box_body {
      border: 1px groove var(--button-back);
      overflow: overlay;
      height: 94vh;
      padding: 20px;
      .box_cards {
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: space-evenly;
        gap: 30px;
        .card_body {
          width: 280px;
          direction: rtl;
          background: #fff;
          border-radius: 7px;
          transition: all 0.3s ease-in-out;
          img {
            width: 100%;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            height: 222px;
            image-rendering: revert;
            object-fit: cover;
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
            button {
              transform: translateX(-40%);
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
  }
}
@media (max-width: 993px) {
  .dawarat2 {
    .spans {
      top: 75px !important;
    }
  }
}

@media (max-width: 1885px) {
  .dawarat2 {
    .container {
      width: 966px;
    }
  }
}
@media (max-width: 1545px) {
  .dawarat2 {
    .container {
      width: 656px;
    }
  }
}
@media (max-width: 1245px) {
  .dawarat2 {
    .spans {
      display: block;
    }
    .containerBox {
      display: none;
    }
    .container {
      width: auto;
    }
  }
}
@media (max-width: 500px) {
  .dawarat2 {
    .container {
      .card_body {
        margin: 5px auto;
      }
    }
  }
}

@keyframes myFirst {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(5px);
  }
}
</style>
