<template>
  <v-footer min-width="100%" padless color="grey darken-3" mt absolute>
    <v-container>
      <v-card flat tile class="transparent white--text text-center">
        <v-card-text flat class="white--text text-left">
          <v-row>
            <v-col>
              <v-card
                flat
                color="transparent"
                class="white--text"
                min-width="500px"
              >
                <v-row>
                  <v-col justify="center" align="center" class="mt-5">
                    <v-img
                      contain
                      lazy-src="/images/footer-logo.png"
                      max-height="85"
                      max-width="120"
                      src="/images/footer-logo.png"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-card
                flat
                color="transparent"
                class="white--text"
                min-width="300px"
              >
                <v-row>
                  <v-col>
                    <p>
                      Company
                    </p>
                    <p>
                      What We Do
                    </p>
                    <p>
                      Investors
                    </p>
                    <p>
                      Resources
                    </p>
                  </v-col>
                  <v-col>
                    <p>
                      Blog
                    </p>
                    <p>
                      News & Events
                    </p>
                    <p>
                      Careers
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pt-0">
              <v-card
                flat
                color="transparent"
                class="white--text"
                min-width="400px"
              >
                <v-row>
                  <v-col>
                    <v-list dense color="transparent">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="white">
                            mdi-email
                          </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title class="white--text">
                            contact@adec-innovations.com
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="white">
                            mdi-phone
                          </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title class="white--text">
                            +1.703.934.3000
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="white">
                            mdi-fax
                          </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title class="white--text">
                            +1.703.934.3740
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="white">
                            mdi-map-marker
                          </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title class="white--text">
                            9300 Lee Highway <br />
                            Fairfax, VA 22031 US
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-card
                flat
                color="transparent"
                class="white--text"
                min-width="400px"
              >
                <v-row>
                  <v-col>
                    <div class="overline grey--text">
                      SOCIAL
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn
                      v-for="icon in icons"
                      :key="icon"
                      class="mx-4 white--text"
                      icon
                    >
                      <v-icon size="24px">
                        {{ icon }}
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>
