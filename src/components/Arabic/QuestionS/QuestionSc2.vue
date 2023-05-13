<template>
  <div class="qustions">
    <div class="container">
      <div class="home_body">
        <div class="heading">
          <h1 class="h1">هل لديك اسأله؟</h1>
          <p class="p">اجابات الاسألة الشائعة لمساعدتك</p>
          {{ $store.state.c }}
        </div>
        <div
          class="accordion accordion-flush"
          id="accordionFlushExample"
          v-for="getData in getData"
          :key="getData.id"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapse' + getData.id"
                aria-expanded="false"
                aria-controls="flush-collapseOnes"
              >
                {{ getData.name }}
              </button>
            </h2>
            <div
              :id="'flush-collapse' + getData.id"
              class="accordion-collapse collapse p"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {{ getData.inform }}
              </div>
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
  name: "QuestionSc2",
  props: ["question_type"],
  mounted() {
    console.log(this.getData);
  },
  methods: {},
  computed: {
    getData() {
      try {
        let result = DB[this.question_type];
        return result;
      } catch (error) {
        return error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home_body {
  height: 30vw;
  border: 1px solid var(--button-back);
  padding: 80px 2%;
  overflow: overlay;
  direction: rtl;

  .heading {
    margin-block-end: 60px;
  }
  .accordion-flush {
    margin-block: 15px;
    border-block-end: 1px solid var(--button-back);
    .accordion-button::after {
      margin-inline: auto 0px !important;
    }
    button {
      font-size: 24px;
    }
  }
}
</style>
