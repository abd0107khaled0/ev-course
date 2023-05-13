<template>
  <div class="weec3">
    <div class="container">
      <div class="wee_body">
        <h1 class="h1">الهدف</h1>
        <p class="p">
          اتاحة الفرصة الي جميع المهتمين بالتعليم الذاتي للحصول علي دورات تدريبة
          في كل المجالات و حضور الاحداث التي تزيد معرفتهم بسوق العمل والرائدين
          فيه و متطلباته و الفرص المتاحة به، لكي يستطيع تنمة مهراته لمناسبة سوق
          العمل و بناء مسقبل افضل.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeeC3",
};
</script>

<style lang="scss" scoped>
.weec3 {
  margin: 50px 0;
  padding: 60px 0 100px 0;
  background: var(--background-color);
  .wee_body {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 15px;
    p {
      direction: rtl;
      margin: 0 8%;
    }
  }
}
</style>
