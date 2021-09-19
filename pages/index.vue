<template>
  <v-app>
    <Nav></Nav>
    <v-main>
      <v-card tag="section" class="full-section" img="/images/Landing.png">
        asddasdsaas
      </v-card>
      <v-card tag="section" class="full-section" img="/images/WhatWeDo.png">
        asddasdsaas
      </v-card>
    </v-main>
  </v-app>
</template>
<script>
import cssScrollSnapPolyfill from 'css-scroll-snap-polyfill'
export default {
  mounted() {
    cssScrollSnapPolyfill()
  }
};
</script>
<style>
html {
	scroll-snap-type: mandatory;
	scroll-snap-points-y: repeat(100vh);
	scroll-snap-type: y mandatory;
}
.full-section {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
}

</style>
