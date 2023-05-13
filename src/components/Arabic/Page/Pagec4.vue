<template>
  <div class="page">
    <div class="container">
      <div class="page_body row">
        <div class="box_video col-lg col-xs-12">
          <video
            poster="https://www.tutorialspoint.com/videos/sample.png"
            controls
          >
            <source src="@/assets/video/p1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="box_inform col-lg col-xs-12">
          <h1 class="h1">التسويق الالكترونى</h1>
          <div class="user">
            <img src="https://placehold.co/200x200" alt="" />
            <div class="user_body">
              <h6>احمد خالد</h6>
              <span class="p">خبير التسويق الالكترونى</span>
            </div>
          </div>
          <p class="p">
            ابسلمثق بملثم قلكحثقل قلحثقلثح يبلانثقملث صثبثصسخير سولقلب
          </p>
          <button class="button">
            <router-link to="Video"> اذهب الى الدوره </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageC4",
};
</script>

<style lang="scss" scoped>
.page {
  margin: 120px 0;
  .row {
    background: var(--background-color);
    border-radius: 8px;
    .box_video {
      height: 400px;
      padding-left: 0;
      video {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 100%;
        height: 100%;
      }
    }
    .box_inform {
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      h1 {
        font-size: calc(20px + 0.9vw);
        line-height: 1.5;
        font-weight: normal;
      }
      button {
        margin: 10px auto;
        color: #fff;
        box-shadow: none;
        border-radius: 8px;
        font-weight: bold;
        a {
          padding: 10px 20px;
          font-size: 18px;
          &:hover {
            color: #fff;
          }
        }
        &:hover {
          background: var(--button-back);
        }
      }
      .user {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 10px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
        .user_body {
          h6,
          span {
            font-size: 18px;
          }
          h6 {
            color: #000;
          }
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .page {
    .box_video {
      border-radius: none !important;
      padding: initial !important;
      video {
        border-radius: 0 !important;
      }
    }
    .box_inform {
      text-align: center !important;
      margin: 50px 0;
      .user {
        justify-content: center;
      }
    }
  }
}
</style>
