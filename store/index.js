export const state = () => ({
  scrolled: 0,
  menu: false
});

export const mutations = {
  onScroll(state) {
    state.scrolled++;
    state.menu = true;
    console.log(state.scrolled);
  },
  showMenu(state) {
      state.menu = false;
  }
};
