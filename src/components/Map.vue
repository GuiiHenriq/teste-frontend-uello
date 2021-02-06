<template>
  <div class="mapa">
    <h1>teste</h1>
  </div>
</template>

<script>
export default {
  name: 'Map',
}
</script>


<style scoped>
.mapa {
    height: 90vh;
    background: pink;
    width: 100vw;
    margin-right: 20px;
}


/* ============= RESPONSIVE ============= */
@media screen and (max-width: 768px) {
  .mapa {
    width: 100%;
    height: 100vh;
    margin-right: 0;
    position: fixed;
    top: 72px;
  }
}
</style>
