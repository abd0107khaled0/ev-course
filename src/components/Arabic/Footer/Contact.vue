<template>
  <div class="contact">
    <div class="icon">
      <a href="https://m.me/medo.bay.716/">
        <i class="fa-brands fa-facebook-messenger fa-4"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactV",
};
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  .icon {
    position: fixed;
    left: 40px;
    bottom: 50px;
    i {
      font-size: 55px;
      color: var(--button-back);
    }
  }
}
</style>
