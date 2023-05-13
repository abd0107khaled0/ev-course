<template>
  <div class="video">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 information">
          <h1 class="h1">{{ nameC }}</h1>
          <div class="inform">
            <div class="status">
              <i class="fa-regular fa-bookmark"></i>
              <span>{{ statusOF }}</span>
            </div>
            <div class="inform_box">
              <span> {{ numberOfC }} / مقاطع {{ Clock }} </span>
              <i class="fa-solid fa-tachograph-digital"></i>
            </div>
            <div class="inform_box">
              <span>
                {{ lang }}
              </span>
              <i class="fa-solid fa-language"></i>
            </div>
            <div class="inform_box">
              <span> {{ discount }}خصم </span>
              <i class="fa-solid fa-tag"></i>
            </div>
            <div class="inform_box">
              <span> تاريخ الحدث : {{ data }}</span>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
            <div class="inform_button">
              <button class="button">احجز الان</button>
            </div>
          </div>
        </div>
        <div
          class="col-lg-8 col-md-8 col-sm-12 video_body"
          @click="showVideo()"
        >
          <div v-for="video in dataM" :key="video.id" class="Vid">
            <video poster="https://www.tutorialspoint.com/videos/sample.png">
              <source
                :src="require(`@/assets/video/${video.name}`)"
                type="video/mp4"
              />
            </video>
            <i class="fa-regular fa-circle-play"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay">
      <i class="fa-solid fa-xmark" @click="hiddenVideo()"></i>
      <div v-for="video in dataM" :key="video.id" class="VidOver">
        <video
          controls
          controlsList="nodownload"
          disablePictureInPicture
          preload="auto"
          poster="https://www.tutorialspoint.com/videos/sample.png"
          width="560"
          height="340"
          data-setup="{}"
        >
          <source
            :src="require(`@/assets/video/${video.name}`)"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "VideoC1",
  data() {
    return {
      daa: "",
      videos: [
        {
          name: "p1.mp4",
        },
        {
          name: "p2.mp4",
        },
      ],
    };
  },
  mounted() {
    this.Vid({ n: 1 }); // n =  {{ this.$route.params.id }} in the future
    document.body.style.backgroundColor = "yellow !important";
  },
  computed: {
    ...mapState([
      "dataM",
      "status",
      "numberOfC",
      "Clock",
      "discount",
      "data",
      "nameC",
      "statusOF",
      "lang",
    ]),
  },
  methods: {
    ...mapMutations(["Vid"]),
    showVideo() {
      let show = document.querySelector(".video .overlay");
      let video = document.querySelector(".video .overlay video");
      show.style.display = "block";
      video.play();
      window.scroll(0, 0);
      document.body.style.overflowY = "hidden";
    },
    hiddenVideo() {
      let hidden = document.querySelector(".video .overlay");
      let video = document.querySelector(".video .overlay video");
      hidden.style.display = "none";
      document.body.style.overflowY = "auto";
      video.pause();
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  position: relative;
  overflow: hidden !important;
  .video {
    margin: 150px 0;
    .information {
      height: 100%;
      padding: 30px;
      background: #dddddda3;
      text-align: right;
      border-radius: 8px;
      box-shadow: 0px 0px 8px -2px #000;
      font-size: 18px;
      cursor: pointer;
      h1 {
        font-size: calc(24px + 0.3vw);
        margin-bottom: 15px;
      }
      .inform {
        .status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          i {
            background: #cccccca6;
            padding: 9px;
            border-radius: 50%;
          }
          span {
            background: var(--button-back);
            color: #fff;
            padding: 0px 15px;
            border-radius: 8px;
          }
        }
      }
      .inform_box {
        margin-top: 20px;
        span {
          margin-right: 15px;
        }
      }
      .inform_button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        button {
          border-radius: 8px;
          padding: 6px 18px;
          color: #fff;
          box-shadow: 0px 0px 0px 0px;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: var(--button-back);
            background: transparent;
            border: 1px solid var(--button-back);
          }
        }
      }
    }
    .video_body {
      border-radius: 8px;
      .Vid {
        position: relative;
        cursor: pointer;
        height: 450px;
        video {
          width: 100% !important;
          height: 100%;
          border-radius: 8px;
        }
        i {
          position: absolute;
          font-size: 55px;
          color: #fff;
          top: 35%;
          left: 50%;
          transform: translate(-50%);
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          i {
            color: var(--button-back);
          }
        }
      }
    }
  }
  .overlay {
    display: none;
    position: absolute;
    width: 100%;
    min-width: 500px;
    height: 150vh;
    left: 0;
    top: 0;
    background: #000000d4;
    z-index: 11;
    i {
      cursor: pointer;
      font-size: 30px;
      color: #fff;
      right: 35px;
      position: absolute;
      top: 20px;
    }
    .VidOver {
      width: 630px;
      position: relative;
      top: 25%;
      left: 50%;
      transform: translate(-50%);
      video {
        width: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  body {
    .overlay {
      .VidOver {
        width: 495px !important;
        top: 20%;
      }
    }
    .Vid {
      margin: 40px auto;
    }
  }
}
</style>
