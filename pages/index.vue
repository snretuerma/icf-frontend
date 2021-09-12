<template>
  <v-main app>
    <div class="mt-10">
      <v-card flat>
        <LandingPage />
      </v-card>

      <v-card flat>
        <WhatWeDo />
      </v-card>

      <v-card flat>
        <InvestorsOverview />
      </v-card>

      <v-card flat>
        <CaseStudies />
      </v-card>

      <v-card flat>
        <NewsAndEvents />
      </v-card>

      <v-card flat>
        <ContactUs />
      </v-card>
    </div>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },

  methods: {
    
  }
};
</script>
<style>
.card-title {
  font-size: 1.5em !important;
}
</style>
