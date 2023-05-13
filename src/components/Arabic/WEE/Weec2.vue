<template>
  <div class="home-c3">
    <div class="container">
      <div class="row">
        <div class="box_body col-lg-6 col-md-12 col-sm-12">
          <img
            src="@/assets/img/amelie-mourichon-sv8oOQaUb-o-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="box_body col-lg-6 col-md-12 col-sm-12">
          <div class="heading">
            <h1 class="h1">الرؤيه</h1>
          </div>
          <div class="inform">
            <p class="p">
              اتاحة الفرصة الي جميع المهتمين بالتعليم الذاتي للحصول علي دورات
              تدريبة في كل المجالات و حضور الاحداث التي تزيد معرفتهم بسوق العمل
              والرائدين فيه و متطلباته و الفرص المتاحة به، لكي يستطيع تنمة
              مهراته لمناسبة سوق العمل و بناء مسقبل افضل.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeeC2",
};
</script>

<style lang="scss" scoped>
.home-c3 {
  margin: 90px 0;
  .box_body:first-of-type {
    img {
      width: 100%;
    }
  }
  .box_body:last-of-type {
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
