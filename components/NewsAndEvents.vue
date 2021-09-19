<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col align="start" justify="center">
        <v-card flat color="transparent">
          <v-card-title>
            <v-row>
              <v-col
                align="center"
                justify="center"
                class="card-title"
              >
                <span class="primary--text title-accent-left">/</span>
                <span class="white--text">NEWS & EVENTS</span>
                <span class="primary--text title-accent-right">/</span>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col>
                <v-card flat height="100%" img="/images/news_events_bg1.png">
                  <v-container fluid fill-height>
                    <v-card-text>
                      <v-chip
                        class="ma-2"
                        color="orange"
                        label
                        text-color="white"
                      >
                        NEWS
                      </v-chip>
                    </v-card-text>
                    <v-card-title class="white--text">
                      ICF ACQUIRES WE ARE VISTA
                    </v-card-title>
                    <v-card-text>
                      <p class="font-weight-black primary--text">
                        October 4, 2018
                      </p>
                      <p class="white--text">
                        Highly Recognized Agency will join ICF's Growing Global
                        Marketing and Communication Practice
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text color="green lighten-1">
                        View More
                        <v-icon right>
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-container>
                </v-card>
              </v-col>

              <v-col>
                <v-card flat height="100%" img="/images/news_events_bg2.png">
                  <v-container fluid fill-height>
                    <v-card-text>
                      <v-chip
                        class="ma-2"
                        color="orange"
                        label
                        text-color="white"
                      >
                        NEWS
                      </v-chip>
                    </v-card-text>
                    <v-card-title class="white--text">
                      ICF WINS $200 MILLION CONTRACT TO CONDUCT DEMOGRAPHIC AND
                      HEALTH SURVEY
                    </v-card-title>
                    <v-card-text>
                      <p class="font-weight-black primary--text">
                        October 16, 2018
                      </p>
                      <p class="white--text">
                        Company Will Continue ti Implement USAID's Gold Standard
                        Global Survey Research Program
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text color="green lighten-1">
                        View More
                        <v-icon right>
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-container>
                </v-card>
              </v-col>

              <v-col>
                <v-card flat height="100%" img="/images/news_events_bg1.png">
                  <v-container fluid fill-height>
                    <v-card-text>
                      <v-chip
                        class="ma-1"
                        color="pink"
                        label
                        text-color="white"
                      >
                        EVENTS
                      </v-chip>
                    </v-card-text>
                    <v-card-title class="white--text">
                      2018 SOCIETY FOR RISK ANALYSIS ANNUAL MEETING
                    </v-card-title>
                    <v-card-text>
                      <p class="font-weight-black primary--text">
                        December 2 - 6, 2018
                      </p>
                      <p class="white--text">
                        This conference is the premier opportunity to discuss
                        all avenues of rsk analysis with other enthusiasts from
                        around the globe.
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text color="green lighten-1">
                        View More
                        <v-icon right>
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-container>
                </v-card>
              </v-col>

              <v-col>
                <v-card flat height="100%" img="/images/news_events_bg2.png">
                  <v-container fluid fill-height>
                    <v-card-text>
                      <v-chip
                        class="ma-2"
                        color="pink"
                        label
                        text-color="white"
                      >
                        EVENTS
                      </v-chip>
                    </v-card-text>
                    <v-card-title class="white--text">
                      2018 CYBERSCI SYMPOSIUM
                    </v-card-title>
                    <v-card-text>
                      <p class="font-weight-black primary--text">
                        December 6, 2018
                      </p>
                      <p class="white--text">
                        Leaders from the U.S. Government, academia, and the
                        larger cyber community will come together under one roof
                        to discuss the questions facing cybersecurity.
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text color="green lighten-1">
                        View More
                        <v-icon right>
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <!-- <v-card-actions>
            <v-row class="my-10">
              <v-col align="center" justify="center">
                <v-btn tile color="primary lighten-1" x-large>
                  VIEW ALL NEWS & EVENTS
                  <v-icon right>
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions> -->

        </v-card>
      </v-col>
    </v-row>
    <div id="view-all-events-button">
            <v-row>
              <v-col align="center" justify="center">
                <v-btn tile color="primary lighten-1" x-large>
                  VIEW ALL NEWS & EVENTS
                  <v-icon right>
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
  </v-container>
</template>

<style>
#card-title {
  font-size: 1.5em !important;
}
#view-all-events-button {
  position: absolute;
  top: 90vh; left: 45%;
}
</style>
