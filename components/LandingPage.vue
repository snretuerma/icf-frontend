<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col align="center" justify="center">
        <v-card flat color="transparent">
          <v-card-title>
            <v-row tag="header">
              <v-col
                align="center"
                justify="center"
                class="text-h1 blue--text text--darken-4"
              >
                STRATEGIC CONSULTING<br />FOR A DIGITAL WORLD
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="text-center">
            <v-row>
              <v-col align="center" justify="center">
                <v-divider class="custom_divider" />
              </v-col>
            </v-row>
            <v-row class="text-body-1 font-weight-medium black--text">
              <v-col>
                <p>
                  We work with hundreds of companies and governments to plan,
                  design and implement transformative projects <br />
                  With +5,000 experts across +70 countries, we solve complex
                  problems in unique ways.
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn class="mx-2" fab dark large color="cyan">
                  <v-icon dark>
                    mdi-play
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                PLAY VIDEO
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
/* #main-title {
    font-size: 4em;
    line-height: 1em;
} */
.custom_divider {
  border-color: #0d47a1 !important;
  border-width: 1px !important;
  width: 30%;
}
</style>
