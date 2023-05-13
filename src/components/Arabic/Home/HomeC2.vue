<template>
  <div class="home-2">
    <div class="container">
      <div class="box_body">
        <div class="box_cont" v-for="(dataSlide, i) in dataSlides" :key="i">
          <div class="img">
            <img :src="require(`@/assets/img/${dataSlide.imge}.jpg`)" alt="" />
            <div class="img_"></div>
          </div>
          <router-link :to="{ name: dataSlide.page }"
            ><span>{{ dataSlide.name }}</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeC2",
  data() {
    return {
      dataSlides: [
        {
          name: "الدورات",
          imge: "dataS1",
          page: "Dawarat",
        },
        {
          name: "الاحداث",
          imge: "dataS2",
          page: "Alhadth",
        },
        {
          name: "اجدد الدورات",
          imge: "dataS3",
          page: "Dawarat",
        },
        {
          name: "احجز لحضور اهم الاحداث",
          imge: "dataS4",
          page: "Alhadth",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-2 {
  .box_body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(244px, 1fr));
    gap: 45px;
    position: relative;
    top: -120px;
    .box_cont {
      position: relative;
      border-radius: 10px;
      box-shadow: 0px 0px 15px 3px var(--small-text);
      .img {
        position: relative;
        img {
          border-radius: 10px;
          height: 350px;
          image-rendering: revert;
          width: 100%;
          object-fit: cover;
        }
        .img_ {
          border-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(0 0 0 / 38%);
        }
      }
      a {
        position: absolute;
        bottom: 25px;
        right: 25px;
        color: var(--small-text);
        font-size: 24px;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        box-shadow: 0px 0px 15px 3px var(--button-back);
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
