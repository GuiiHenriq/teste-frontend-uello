<template>
  <div id="mapContainer" class="basemap mapa"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
    };
  },
  mounted() {
    console.log(this.teste)
    mapboxgl.accessToken = this.accessToken;

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-46.68018912884571, -23.651347438518243],
      zoom: 12,
    });
  },
};
</script>

<style lang="scss" scoped>
.basemap {
  width: 100%;
  height: 100%;
}

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