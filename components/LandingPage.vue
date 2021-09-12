<template>
    <v-container fluid>
        <v-card flat>
            <v-card-title>
                <v-row>
                    <v-col align="center" justify="center" id="main-title" class="primary--text"> 
                        STRATEGIC CONSULTING<br>FOR A DIGITAL WORLD
                    </v-col>
                </v-row>
            </v-card-title>
            
            <v-card-text class="text-center">
                <v-row>
                    <v-col align="center" justify="center">
                        <v-divider class="custom_divider"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p>
                            We work with hundreds of companies and governments to plan, design and implement transformative projects <br>
                            With +5,000 experts across +70 countries, we solve complex problems in unique ways.
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            large
                            color="cyan"
                        >
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
    </v-container>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
#main-title {
    font-size: 4em;
    line-height: 1em;
}
.custom_divider {
    border-color: #42A5F5 !important; 
    border-width: 1px !important; 
    width: 30%;
}
</style>