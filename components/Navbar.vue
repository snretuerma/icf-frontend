<template>
  <v-app-bar fixed prominent flat id="nav-bar" color="transparent">
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
        >
          <template v-slot:prepend>
            <v-btn text>
              <v-icon left>
                mdi-menu-right
              </v-icon>
              <span class="hidden-sm-and-down">Blog</span>
            </v-btn>

            <v-btn text>
              <v-icon left>
                mdi-menu-right
              </v-icon>
              <span class="hidden-sm-and-down">News & Events</span>
            </v-btn>

            <v-btn text>
              <v-icon left>
                mdi-menu-right
              </v-icon>
              <span class="hidden-sm-and-down">Careers</span>
            </v-btn>

            <v-btn text>
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
        <v-tab>Company</v-tab>
        <v-tab>What We Do</v-tab>
        <v-tab>Investors</v-tab>
        <v-tab>Resources</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<style>
#nav-bar {
  padding: 50px 150px 0px 150px;
}
#toolbar {
  padding: 5px 5px 0px 5px;
  margin: 5px 5px 0px 5px;
}
#toolbar-title {
  background-color: white;
  padding: 100px 5px 10px 5px;
}
</style>
