<template>
  <div class="weec4">
    <div class="container">
      <h1 class="h1">الانجازات</h1>
      <div class="Wee_body">
        <div class="links" v-for="box in BoxAr" :key="box.id">
          <div class="img">
            <h1 class="h1">{{ box.number }} +</h1>
            <span>{{ box.name }}</span>
          </div>
          <p class="p">{{ box.infom }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewC3",
  data() {
    return {
      BoxAr: [
        {
          id: 0,
          number: 1000,
          name: "دوره تدريبيه",
          infom:
            "تم نشر اكثر من الف دورة تدريبية في مجالات مختلفة من خبراء المجال",
        },
        {
          id: 0,
          number: 1000,
          name: "حدث",
          infom:
            "تم نشر اكثر من الف دورة تدريبية في مجالات مختلفة من خبراء المجال",
        },
        {
          id: 0,
          number: 1000,
          name: "تذكره",
          infom:
            "تم نشر اكثر من الف دورة تدريبية في مجالات مختلفة من خبراء المجال",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.weec4 {
  padding: 90px 0px 0px;
  margin: 40px 0 80px;
  background: var(--background-color);
  text-align: center;
  h1 {
    text-align: right !important;
  }
  .Wee_body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(287px, 1fr));
    gap: 50px;
    padding: 50px 0;
    direction: rtl;
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      .img {
        h1 {
          font-size: calc(24px + 2.6vw);
        }
        span {
          font-weight: normal;
          font-size: calc(20px + 0.6vw);
        }
      }
    }
  }
}
</style>
