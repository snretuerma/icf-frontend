<template>
  <v-app>
    <Navbar/>
    <v-main app>
        <div v-scroll.self="onScroll">
          <v-card tag="section" class="item page-section" flat img="/images/Landing.png">
            <LandingPage/>
          </v-card>

          <v-card tag="section" class="item page-section" flat img="/images/WhatWeDo.png">
            <WhatWeDo/>
          </v-card>

          <v-card tag="section" class="item page-section" flat img="/images/InvestorsOverview.png">
            <InvestorsOverview/>
          </v-card>

          <v-card tag="section" class="item page-section" flat img="/images/CaseStudies.png">
            <CaseStudies/>
          </v-card>

          <v-card tag="section" class="item page-section" flat img="/images/NewsEvents.png">
            <NewsAndEvents/>
          </v-card>

          <v-card tag="section" class="item page-section" flat img="/images/ContactUs.png">
            <ContactUs/>
          </v-card>
        </div>
    </v-main>
  </v-app>

</template>
<script>
import cssScrollSnapPolyfill from 'css-scroll-snap-polyfill'

export default {
  methods: {
    onScroll () {
      console.log("scrolling");
      this.$store.commit('onScroll')
    },
    init (){
        cssScrollSnapPolyfill()
      }
  },
  mounted() {
    this.init();
  }
};
</script>
<style>
html {
	scroll-snap-type: mandatory;
	scroll-snap-points-y: repeat(100vh);
	scroll-snap-type: y mandatory;
}
@media only screen and (max-width: 600px) {
  .page-section {
    max-height: -webkit-fill-available;
    width: 100%;
  }
}
.card-title {
  font-size: 1.5em !important;
}
.page-section {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  /* max-height: -webkit-fill-available; */
}
.title-accent-left{
  margin: 0px 10px 0px 0px;
  font-size: 2em;
}
.title-accent-right{
  margin: 0px 0px 0px 10px;
  font-size: 2em;
}
 .item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 100vh;
  }

  .scroll-snap-container {
    height: 100vh;
    width: 100%;
  }
</style>
