<template>
  <footer class="footer-2">
    <div class="container">
      <ul>
        <li class="h1">
          <router-link target="_blank" to="Govern">
            سياسة الخصوصيه
          </router-link>
        </li>
        <li class="h1">
          <router-link target="_blank" to="Rules"> شروط الاستخدام </router-link>
        </li>
        <li class="h1">
          <router-link target="_blank" to="Helpers">
            مركز المساعده
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterC2",
};
</script>

<style lang="scss" scoped>
footer {
  background: #d9d9d9;
  ul {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: end;
    gap: 80px;
    padding: 20px 0;
    li {
      cursor: pointer;
      font-size: calc(18px + 0.5vw);
      margin: 0;
      font-weight: normal;
    }
    li:last-of-type {
      a {
        color: var(--button-back);
      }
    }
  }
}
@media (max-width: 768px) {
  footer {
    ul {
      gap: 60px;
    }
  }
}
</style>
