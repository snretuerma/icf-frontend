<template>

    <v-app-bar
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        fixed
        color="transparent"
        dark
        flat
        prominent
    >
        <v-toolbar-title class="offset-lg-2">
          <v-img
            contain
            lazy-src="/images/logo.png"
            max-height="85"
            max-width="120"
            src="/images/logo.png"
          ></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row class="mt-5 mr-5" justify="end" align="center">
          <v-col cols="12" sm="10" md="10" class="py-0 my-0">
            <v-text-field
              label="SEARCH"
              dense
              solo
              flat
              outlined
              append-icon="mdi-magnify"
              class="text-field-transparent"
            >
              <template v-slot:prepend>
                <v-btn text color="primary">
                  <v-icon left>
                    mdi-menu-right
                  </v-icon>
                  <span class="hidden-sm-and-down">Blog</span>
                </v-btn>

                <v-btn text color="primary">
                  <v-icon left>
                    mdi-menu-right
                  </v-icon>
                  <span class="hidden-sm-and-down">News & Events</span>
                </v-btn>

                <v-btn text color="primary">
                  <v-icon left>
                    mdi-menu-right
                  </v-icon>
                  <span class="hidden-sm-and-down">Careers</span>
                </v-btn>

                <v-btn text color="primary">
                  <v-icon left>
                    mdi-menu-right
                  </v-icon>
                  <span class="hidden-sm-and-down">Contact</span>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <template v-slot:extension>
          <v-tabs right fixed-tabs>
            <v-tab class="blue--text text--darken-4">Company</v-tab>
            <v-tab class="blue--text text--darken-4">What We Do</v-tab>
            <v-tab class="blue--text text--darken-4">Investors</v-tab>
            <v-tab class="blue--text text--darken-4">Resources</v-tab>
          </v-tabs>
        </template>
    </v-app-bar>

</template>

<script>
export default {
    data() {
        return {
            collapseOnScroll: true
        }
    }
}
</script>

<style scoped>
.text-field-transparent .v-input__slot {
  background: transparent !important;
}
</style>