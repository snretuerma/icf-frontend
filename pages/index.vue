<template>
  <v-main app>
    <div class="mt-15">
      <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
          
          <div class="page-1 page">
            <v-card flat>
              <LandingPage />
            </v-card>
          </div>

          <div class="page-2 page">
            <v-card flat>
              <WhatWeDo />
            </v-card>
          </div>

          <div class="page-3 page">
            <v-card flat>
              <InvestorsOverview />
            </v-card>
          </div>

          <div class="page-4 page">
            <v-card flat>
              <CaseStudies />
            </v-card>
          </div>

          <div class="page-5 page">
            <v-card flat>
              <NewsAndEvents />
            </v-card>
          </div>

          <div class="page-6 page">
            <v-card flat>
              <ContactUs />
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function(currentSlideEl, currenIndex) {}
      }
    };
  },

  methods: {
    moveNext() {
      this.$refs.example.$fullpage.moveNext(); //Move to the next page
    }
  }
};
</script>
<style>
.card-title {
  font-size: 1.5em !important;
}
</style>
