export const state = () => ({
  scrolling: false
});

export const mutations = {
  onScroll(state) {
    state.scrolling = true;
  },
  showMenu(state) {
      state.scrolling = false;
  }
};
