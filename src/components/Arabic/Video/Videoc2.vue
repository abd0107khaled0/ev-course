<template>
  <div class="video_inform">
    <div class="container">
      <div class="_body">
        <div class="user">
          <div class="user_body">
            <img src="https://placehold.co/300x300" />
            <div class="user_name">
              <h5 class="h1">{{ user_name }}</h5>
              <span class="p">{{ user_exp }}</span>
            </div>
          </div>
          <div class="user_inform">
            <p class="p">{{ inform }}</p>
          </div>
        </div>
        <div class="content_user">
          <h1 class="h1">محتوى الدوره</h1>
          <div class="inform" v-for="train in training" :key="train.id">
            <p class="p">{{ train }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "VideoC2",
  computed: {
    ...mapState(["inform", "user_name", "training", "user_exp", "imgs"]),
  },
  methods: {
    ...mapMutations(["redirect"]),
  },
};
</script>

<style lang="scss" scoped>
._body {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: self-end;
  text-align: right;
  .user,
  .content_user {
    display: flex;
    flex-direction: column;
    align-items: self-end;
    width: 100%;
  }
  .user {
    .user_body {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .user_name {
        h5 {
          font-size: 24px;
          margin: 0;
        }
      }
    }
    .user_inform {
      margin: 50px 0;
      background: #544df638;
      width: 80%;
      padding: 10px 20px;
      border-radius: 8px;
      p {
        word-break: break-word;
      }
    }
  }
  .content_user {
    h1 {
      font-size: calc(18px + 1.1vw);
    }
    .inform {
      margin: 10px 0;
      background: #ccc;
      width: 80%;
      padding: 10px 20px;
      border-radius: 8px;
      p {
        word-break: break-word;
      }
    }
  }
}
@media (max-width: 768px) {
  ._body {
    .user,
    .content_user {
      align-items: center;
    }
  }
}
</style>
