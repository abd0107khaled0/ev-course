<template>
  <div class="home-c3">
    <div class="container">
      <div class="row">
        <div class="box_body col-lg-6 col-md-12 col-sm-12">
          <img src="@/assets/img/dataS2.jpg" alt="" />
        </div>
        <div class="box_body col-lg-6 col-md-12 col-sm-12">
          <div class="heading">
            <h1 class="h1">احجز تذكرتك الان</h1>
            <h4>{{ this.NameProject }}</h4>
          </div>
          <div class="inform">
            <p class="p">
              حدث للتعرف عن المسارات فى الفريق<br />
              فى عدة جلسات
            </p>
            <span class="span">خصم %20</span>
          </div>
          <button class="button">
            <router-link to="/Alhagz">احجز الان</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TzC4",
};
</script>

<style lang="scss" scoped>
.home-c3 {
  margin: 0px 0 90px 0;
  padding: 70px 0;
  background: var(--background-color);
  .box_body:first-of-type {
    img {
      width: 100%;
    }
  }
  .box_body:last-of-type {
    direction: rtl;
    .heading {
      h4 {
        font-weight: bold;
        font-size: 31px;
        margin-block: 15px;
      }
    }
    .inform {
      span {
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 991px) {
  .home-c3 {
    .row {
      gap: 20px;
      text-align: center;
    }
  }
}
</style>
