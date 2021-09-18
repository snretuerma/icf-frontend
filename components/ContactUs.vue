<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <v-card tile class="offset-lg-4 offset-md-2">
          <v-row no-gutters>
            <v-col cols="12" lg="6" md="6">
              <v-card tile height="100%" class="px-10 py-10">
                <v-card-title class="justify-center primary--text">
                    <span class="primary--text title-accent-left">/</span>
                    <span class="text-h5 blue--text text--darken-4">CONTACT US</span>
                    <span class="primary--text title-accent-right">/</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row class="offset-1">
                      <v-col cols="12">
                        <v-list color="transparent" flat>
                          <v-list-item
                            v-for="item in contact_us_list"
                            :key="item.value"
                          >
                            <v-list-item-icon>
                              <v-icon color="primary">
                                {{ item.icon }}
                              </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title class="primary--text">
                                {{ item.value }}
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6" md="6">
              <v-card tile color="primary" height="100%">
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <v-col>
                        <v-text-field
                          dark
                          color="white"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          dark
                          color="white"
                          label="Email"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          dark
                          color="white"
                          label="Your Message"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn tile color="primary darken-2">
                          <v-icon left color="white">
                            mdi-send
                          </v-icon>
                          Send
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" lg="1" md="1"></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      contact_us_list: [
        { icon: "mdi-email", value: "INFO@ICF.COM" },
        { icon: "mdi-phone", value: "+1.703.934.3000" },
        { icon: "mdi-fax", value: "+1.703.934.3740" },
        {
          icon: "mdi-map-marker",
          value: " 9300 Lee Highway Fairfax, VA 22031 US"
        }
      ]
    };
  }
};
</script>

