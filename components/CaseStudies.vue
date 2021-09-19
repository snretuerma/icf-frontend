<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col align="center" justify="center">
        <v-card flat color="transparent">
          <v-card-title>
            <v-row>
              <v-col
                align="center"
                justify="center"
                class="primary--text card-title"
              >
                / CASE STUDIES /
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-carousel height="100%" v-model="model" hide-delimiters>
              <v-carousel-item>
                <v-card flat color="transparent">
                  <v-card-text>
                    <v-row>
                      <v-col
                        offset-lg="6"
                        offset-md="3"
                        offset-sm="0"
                        height="100%"
                      >
                        <v-container fluid fill-height>
                          <v-row>
                            <v-col
                              class="text-h4"
                              align="start"
                              justify="start"
                            >
                              Benefits of Low Emission <br />
                              Development Strategies
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                              class="font-weight-black"
                              align="start"
                              justify="start"
                            >
                              The case of Clean Energy Policies in Bangladesh
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col align="start" justify="start">
                              <p>
                                As low-lying country situated in one of the
                                world's largest deltas, Bangladesh is <br />
                                highly vulnerable to the consequences of climate
                                variability and change. The country <br />
                                the eight most populous in the world and one of
                                the most densely populated. Almost <br />
                                one third of its people live below the poverty
                                line, and only about 60% of the population
                                <br />
                                has access to electricity. At the same time,
                                Bangladesh is coping with serious energy <br />
                                crisis as a result of sluggish growth in energy
                                supplies and intense expansion of energy <br />
                                demand. Furthermore, challenges associated with
                                urbanization (especially in Dhaka, <br />
                                Chittagong and Khulna metropolitan areas) have
                                led to air pollution, noise pollution, and waste
                                disposal, <br />
                                among others ...
                              </p>
                              <p>
                                <v-btn text class="px-0 " color="pink">
                                  View More
                                  <v-icon right color="pink">
                                    mdi-chevron-right
                                  </v-icon>
                                </v-btn>
                              </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col align="start" justify="start">
                              <v-btn tile color="primary lighten-1" x-large>
                                VIEW ALL CASE STUDIES
                                <v-icon right>
                                  mdi-arrow-right
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0
    };
  }
};
</script>
