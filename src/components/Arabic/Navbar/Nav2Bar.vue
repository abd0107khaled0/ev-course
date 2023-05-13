<template>
  <div class="nav2">
    <div class="container">
      <br />
      {{ $store.state.c }}
      <div class="nav_body">
        <h1 @click="incre()">BEE</h1>
        <ul>
          <li>
            <router-link @click="scrollT()" to="/Wee">من نحن</router-link>
          </li>
          <li>
            <router-link @click="scrollT()" to="/New">اخبارنا</router-link>
          </li>
          <li>
            <router-link @click="scrollT()" to="/Team">الفريق</router-link>
          </li>
          <li>
            <router-link @click="scrollT()" to="/ContactUs"
              >اتصل بنا</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Nav2Bar",
  computed: {
    ...mapState({
      comp(v) {
        return v.c * v.d;
      },
    }),
  },
  methods: {
    ...mapMutations(["incre"]),
  },
};
</script>

<style lang="scss" scoped>
.nav2 {
  z-index: 10;
  box-shadow: 0 0 8px -2px var(--button-back);
  position: fixed;
  top: 0;
  width: 100%;
  direction: rtl;
  padding: 12px 0;
  background: #fff;
  .nav_body {
    display: flex;
    align-items: center;
    gap: 50px;
    ul {
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 8px;
      li {
        font-size: 20px;
        font-weight: bold;
        a {
          padding: 6px;
          transition: all 0.3s ease-in-out;
          &.router-link-active {
            color: var(--button-back);
          }
        }
        &:hover {
          a {
            color: var(--button-back);
          }
        }
      }
    }
  }
}
</style>
