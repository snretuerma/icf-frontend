<template>
    <v-container>
        <v-card flat color="transparent">
            <v-container>
                <v-card-title class="justify-center">
                    What we do
                </v-card-title>
                <v-card-text >
                    <v-row>
                        <v-col class=text-center>
                            We combine traditional consulting expertise with cutting-edge digital agency <br> services to serve our customers in a holistic way
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card flat color="transparent">
                                <v-container>
                                    <v-card-title class="primary--text">
                                        / INDUSTRIES /
                                    </v-card-title>
                                    <v-card-text>
                                        <v-row no-gutters>
                                            <v-col 
                                                v-for="item in industries_card_items" :key="item.text"
                                                cols="2"
                                                class="fill-height" align="center" justify="center"
                                            >
                                                <v-hover v-slot="{ hover }">
                                                    <v-card
                                                        class="mx-auto"
                                                        color="grey lighten-4"
                                                        min-height="230px"
                                                    >
                                                    <div
                                                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h2 white--text"
                                                        style="height: 100%;"
                                                    >
                                                        <v-expand-transition>
                                                        <v-img
                                                            v-if="hover"
                                                            :aspect-ratio="16/9"
                                                            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                                                            style="height: 100%;"
                                                        />   
                                                        </v-expand-transition>
                                                    </div>
                                                    <v-card-text style="position: relative;">
                                                        <v-row>
                                                            <v-col align="center" justify="center">
                                                                <h3 class="text-h4 font-weight-light mb-2">
                                                                    <v-icon v-if="!hover" color="primary" style="font-size:2em;">
                                                                        {{ item.icon }}
                                                                    </v-icon>
                                                                    <v-icon v-else color="white" style="font-size:2em;">
                                                                        {{ item.icon }}
                                                                    </v-icon>
                                                                </h3>
                                                                <div v-if="!hover" class="font-weight-light text-h6 mb-2 primary--text">
                                                                    {{ item.text }}
                                                                </div>
                                                                <div v-else class="font-weight-light text-h6 mb-2 white--text">
                                                                    {{ item.text }}
                                                                    <v-divider class="custom_divider"></v-divider>
                                                                </div>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card-text>
                                                    </v-card>
                                                </v-hover>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card flat color="transparent">
                                <v-container>
                                    <v-card-title class="primary--text">
                                        / SERVICES /
                                    </v-card-title>
                                    <v-card-text>
                                        <v-row no-gutters>
                                            <v-col 
                                                v-for="item in services_card_items" :key="item.text"
                                                cols="2"
                                                class="fill-height" align="center" justify="center"
                                            >
                                                <v-hover v-slot="{ hover }">
                                                    <v-card
                                                        class="mx-auto"
                                                        color="grey lighten-4"
                                                        min-height="230px"
                                                    >
                                                    <div
                                                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h2 white--text"
                                                        style="height: 100%;"
                                                    >
                                                        <v-expand-transition>
                                                        <v-img
                                                            v-if="hover"
                                                            :aspect-ratio="16/9"
                                                            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                                                            style="height: 100%;"
                                                        />   
                                                        </v-expand-transition>
                                                    </div>
                                                    <v-card-text style="position: relative;" class="pt-10">
                                                        <v-row>
                                                            <v-col align="center" justify="center">
                                                                <h3 class="text-h4 font-weight-light mb-2">
                                                                    <v-icon v-if="!hover" color="primary" style="font-size:2em;">
                                                                        {{ item.icon }}
                                                                    </v-icon>
                                                                    <v-icon v-else color="white" style="font-size:2em;">
                                                                        {{ item.icon }}
                                                                    </v-icon>
                                                                </h3>
                                                                <div v-if="!hover" class="font-weight-light text-h6 mb-2 primary--text">
                                                                    {{ item.text }}
                                                                </div>
                                                                <div v-else class="font-weight-light text-h6 mb-2 white--text">
                                                                    {{ item.text }}
                                                                    <v-divider class="custom_divider"></v-divider>
                                                                </div>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card-text>
                                                    </v-card>
                                                </v-hover>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-container>
            
        </v-card>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
      industries_card_items: [
        { icon: "mdi-shopping", text: "CONSUMER & FINANCIAL" },
        { icon: "mdi-alert-outline", text: "DISASTER RECOVERY" },
        { icon: "mdi-lightbulb-outline", text: "ENERGY" },
        { icon: "mdi-leaf", text: "ENVIRONMENT" },
        { icon: "mdi-earth", text: "GOVERNMENT" },
        { icon: "mdi-stethoscope", text: "HEALTH" },
        { icon: "mdi-bell", text: "HOSPITALITY" },
        { icon: "mdi-head", text: "SOCIAL PROGRAM" },
        { icon: "mdi-airplane-takeoff", text: "TRANSPORTATION" }
      ],
      services_card_items: [
            { icon: "mdi-account-group", text: "ADVISORY" },
            { icon: "mdi-chart-bell-curve-cumulative", text: "ANALYTICS" },
            { icon: "mdi-desktop-mac-dashboard", text: "DIGITAL" },
            { icon: "mdi-google-circles-extended", text: "MARKETING & ENGAGEMENT" },
            { icon: "mdi-hammer-wrench", text: "PROGRAM IMPLEMENTATION" },
      ]
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
.custom_divider {
    border-color: #42A5F5 !important; 
    border-width: 1px !important; 
    width: 60%;
}

</style>
