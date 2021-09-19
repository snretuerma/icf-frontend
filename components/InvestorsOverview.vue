<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col align="center" justify="center">
        <v-card flat>
          <v-container fluid fill-height>
            <v-row>
              <v-col cols="4" align="right" justify="center">
                <v-card-title class="primary--text justify-center">
                  <span class="primary--text title-accent-left">/</span>
                  <span class="text-h5 blue--text text--darken-4"
                    >INVESTORS OVERVIEW</span
                  >
                  <span class="primary--text title-accent-right">/</span>
                </v-card-title>
              </v-col>
              <v-col cols="8" align="left" justify="center">
                <p>
                  ICF (NASDAQ:ICF) is leading provider of professional serives
                  and technology-based <br />
                  solutions to government and commercial clients.
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-card width="400px">
                        <v-card-title>
                          ICFI(Common Stock)
                        </v-card-title>
                        <v-card-text>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Exchange
                                  </th>
                                  <th class="text-left">
                                    Price
                                  </th>
                                  <th class="text-left">
                                    Change (%)
                                  </th>
                                  <th class="text-left">
                                    Volume
                                  </th>
                                  <th class="text-left">
                                    52 Week High
                                  </th>
                                  <th class="text-left">
                                    52 Week Low
                                  </th>
                                  <th class="text-left">
                                    Market Cap
                                  </th>
                                  <th class="text-left">
                                    PE Ratio
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>$74.18</td>
                                  <td>+2.24(+3.11%)</td>
                                  <td>147,654</td>
                                  <td>$82.25</td>
                                  <td>$50.10</td>
                                  <td>$1,389,237,136.56</td>
                                  <td>$19.86</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn text color="pink">
                            View More
                            <v-icon right color="pink">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card width="400px">
                        <v-card-title>
                          ICFI(Common Stock)
                        </v-card-title>
                        <v-card-text>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Exchange
                                  </th>
                                  <th class="text-left">
                                    Price
                                  </th>
                                  <th class="text-left">
                                    Change (%)
                                  </th>
                                  <th class="text-left">
                                    Volume
                                  </th>
                                  <th class="text-left">
                                    52 Week High
                                  </th>
                                  <th class="text-left">
                                    52 Week Low
                                  </th>
                                  <th class="text-left">
                                    Market Cap
                                  </th>
                                  <th class="text-left">
                                    PE Ratio
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>$74.18</td>
                                  <td>+2.24(+3.11%)</td>
                                  <td>147,654</td>
                                  <td>$82.25</td>
                                  <td>$50.10</td>
                                  <td>$1,389,237,136.56</td>
                                  <td>$19.86</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn text color="pink">
                            View More
                            <v-icon right color="pink">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card width="400px">
                        <v-card-title>
                          Selected Sec Filings
                        </v-card-title>
                        <v-card-text>
                          <v-simple-table fixed-header>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Date
                                  </th>
                                  <th class="text-left">
                                    Form
                                  </th>
                                  <th class="text-left">
                                    Description
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>11/01/18</td>
                                  <td>10-Q</td>
                                  <td>
                                    Quarterly report which provides a continuing
                                    view of a company's financial position
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn text color="pink">
                            View More
                            <v-icon right color="pink">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col>
                <v-container fluid fill-height>
                  <v-row>
                    <v-col>
                      <v-img
                        :aspect-ratio="16 / 9"
                        height="100vh"
                        src="/images/investors-diagram.png"
                        contain
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-card width="400px">
                        <v-card-title>
                          Recent News
                        </v-card-title>
                        <v-card-text>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Date
                                  </th>
                                  <th class="text-left">
                                    Title
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>11/01/18</td>
                                  <td>
                                    ICF Reports Third Quarter 2018 Results
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn text color="pink">
                            View More
                            <v-icon right color="pink">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-card width="400px">
                        <v-card-title>
                          Upcoming Events
                        </v-card-title>
                        <v-card-text>
                          <v-simple-table fixed-header>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Date
                                  </th>
                                  <th class="text-left">
                                    Title
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>11/01/18 4:30 PM EDT</td>
                                  <td>Q3 2018 ICF Earnings Conference Hall</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn text color="pink">
                            View More
                            <v-icon right color="pink">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-card width="400px">
                        <v-card-title>
                          Recent Webcasts & Presentations
                        </v-card-title>
                        <v-card-text>
                          <v-simple-table fixed-header>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Date
                                  </th>
                                  <th class="text-left">
                                    Title
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>11/01/18</td>
                                  <td>ICF Investors Presentation</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn text color="pink">
                            View More
                            <v-icon right color="pink">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
