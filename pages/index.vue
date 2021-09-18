<template>
  <v-app>
    <Navbar/>
    <v-main app v-scroll="onScroll">
        <v-card tag="section" class="page-section" flat img="/images/Landing.png">
          <LandingPage/>
        </v-card>

        <v-card tag="section" class="page-section" flat img="/images/WhatWeDo.png">
          <WhatWeDo/>
        </v-card>

        <v-card tag="section" class="page-section" flat img="/images/InvestorsOverview.png">
          <InvestorsOverview/>
        </v-card>

        <v-card tag="section" class="page-section" flat img="/images/CaseStudies.png">
          <CaseStudies/>
        </v-card>

        <v-card tag="section" class="page-section" flat img="/images/NewsEvents.png">
          <NewsAndEvents/>
        </v-card>

        <v-card tag="section" class="page-section" flat img="/images/ContactUs.png">
          <ContactUs/>
        </v-card>
    </v-main>
    <Footer/>
  </v-app>
  
</template>
<script>
export default {
  methods: {
    onScroll () {
      this.$store.commit('onScroll')
    },
  }
};
</script>
<style>
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
</style>
