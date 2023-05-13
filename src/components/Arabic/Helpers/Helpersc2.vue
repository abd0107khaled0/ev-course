<template>
  <div class="helpers">
    <div class="container">
      <div class="home_body">
        <router-link
          :to="data.name"
          class="box"
          v-for="data in data"
          :key="data.id"
        >
          <h3 class="h1">{{ data.address }}</h3>
          <p class="p">{{ data.inform }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpersC2",
  data() {
    return {
      data: [
        {
          name: "QuestionD",
          address: "مشاكل الدفع",
          inform: "اذا تواجهك اي مشكلة في الدفع او الاسترجاع تواصل معنا",
        },
        {
          name: "QuestionS",
          address: "الاسئلة الشائعة",
          inform: "اجابات لاكثر الاسئلة تكرارا و يمكنك طرح سؤال جديد",
        },
        {
          name: "QuestionF",
          address: "مشاكل فنيه",
          inform: "تعرف علي حل لمشاكل حسابك و الخدمات",
        },
        {
          name: "Expert",
          address: "التقديم كخبير",
          inform: "اجابات الاستفسارات عن التقديم كخبير",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.helpers {
  margin: 90px 0;
  .home_body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(433px, 1fr));
    text-align: center;
    gap: 50px;
    .box {
      background: var(--background-color);
      padding: 80px 0;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      h3 {
        font-size: calc(20px + 0.6vw);
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        box-shadow: 0px 0px 4px 1px var(--button-back);
        h3 {
          color: var(--button-back);
        }
      }
    }
  }
}
</style>
