<template>
  <div>
    <v-toolbar
      flat
      absolute
      id="nav-bar-collapse"
      color="transparent"
      v-if="scrolling"
    >
      <v-spacer></v-spacer>
      <v-btn class="mx-4 mt-4" fab dark color="white" @click="showToolbar">
        <v-icon color="#0D47A1">
          mdi-menu-open
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-fade-transition v-else>
      <v-toolbar prominent flat absolute id="nav-bar" color="transparent">
        <v-toolbar-title id="toolbar-title">
          <v-img
            contain
            lazy-src="/images/logo.png"
            max-height="85"
            max-width="120"
            src="/images/logo.png"
          ></v-img>
        </v-toolbar-title>
        <v-spacer />
        <v-row id="toolbar" justify="end" align="center">
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
          <v-tabs centered fixed-tabs>
            <v-tab class="blue--text text--darken-4">Company</v-tab>
            <v-tab class="blue--text text--darken-4">What We Do</v-tab>
            <v-tab class="blue--text text--darken-4">Investors</v-tab>
            <v-tab class="blue--text text--darken-4">Resources</v-tab>
          </v-tabs>
        </template>
      </v-toolbar></v-fade-transition
    >
  </div>
</template>

<script>
export default {
  computed: {
    scrolling() {
      return this.$store.state.scrolling;
    }
  },
  methods: {
    showToolbar() {
      this.$store.commit("showMenu");
    }
  }
};
</script>

<style>
#nav-bar {
  padding: 50px 150px 0px 150px;
  position: fixed;
  top: 0;
  width: 100%;
}
#nav-bar-collapse {
  position: fixed;
  top: 0;
  width: 100%;
}
#toolbar {
  padding: 5px 5px 0px 5px;
  margin: 5px 5px 0px 5px;
}
#toolbar-title {
  background-color: white;
  padding: 100px 5px 10px 5px;
}
.text-field-transparent .v-input__slot {
  background: transparent !important;
}
</style>
