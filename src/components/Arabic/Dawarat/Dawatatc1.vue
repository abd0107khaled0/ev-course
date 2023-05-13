<template>
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
</template>

<script>
export default {
  name: "DawaratC1",
  data() {
    return {
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
    };
  },
  mounted() {
    document.getElementById("range").value = 50;
  },
  methods: {
    Input() {
      document.getElementById("spanRange").innerText =
        document.getElementById("range").value + "Egp";
    },
  },
};
</script>

<style lang="scss" scoped>
.dawaratc1 {
  margin-block-start: 60px;
  position: relative;
  .containerBox {
    height: 93vh;
    position: absolute;
    right: 0;
    direction: rtl;
    background: var(--background-color);
    padding: 43px 20px;
    margin: 0 20px;
    width: 270px;
    .box {
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

// animations
@keyframes myFirst {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(5px);
  }
}
</style>
