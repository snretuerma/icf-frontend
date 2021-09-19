<template>
  <div>
    <v-app-bar
      flat
      absolute
      id="nav-bar-collapse"
      color="transparent"
      v-if="menu"
    >
      <v-spacer></v-spacer>
      <v-btn class="mx-4 mt-4" fab dark color="white" @click="showToolbar">
        <v-icon color="#0D47A1">
          mdi-menu-open
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-fade-transition v-else>
      <v-app-bar prominent flat absolute id="nav-bar" color="transparent">
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
            <v-autocomplete
              label="SEARCH"
              dense
              solo
              flat
              outlined
              append-icon="mdi-magnify"
              class="text-field-transparent"
              v-model="search"
              :items="search_data"
              clearable
              @change="scroll(search)"
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
            </v-autocomplete>
          </v-col>
        </v-row>
        <template v-slot:extension>
          <v-tabs centered fixed-tabs>
            <v-tab class="blue--text text--darken-4" @click="scroll('home')"
              >Company</v-tab
            >
            <v-tab class="blue--text text--darken-4" @click="scroll('whatwedo')"
              >What We Do</v-tab
            >
            <v-tab
              class="blue--text text--darken-4"
              @click="scroll('investorsoverview')"
              >Investors</v-tab
            >
            <v-tab
              class="blue--text text--darken-4"
              @click="scroll('casestudies')"
              >Resources</v-tab
            >
          </v-tabs>
        </template>
      </v-app-bar>
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  data() {
    return {
      search: '',
      search_data: [
        { text: 'Strategic Consulting for a Digital World' , value: 'home' },
        { text: 'What We Do' , value: 'whatwedo' },
        { text: 'Investor\'s Overview' , value: 'investorsoverview' },
        { text: 'Case Studies' , value: 'casestudies' },
        { text: 'News & Events' , value: 'newsandevents' },
        { text: 'Contact Us' , value: 'contactus' },
      ],
    };
  },
  methods: {
    showToolbar() {
      this.$store.commit("toggleMenu");
      console.log(this.menu);
    },
    scroll(id) {
      if(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      }
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
.text-field-transparent .v-input__slot input {
  color: rgb(49, 87, 170) !important;
}
.v-autocomplete.v-select--is-menu-active .v-input__icon--append .v-icon {
  transform: none;
}
</style>
