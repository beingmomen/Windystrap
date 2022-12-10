export default {
  name(context, payload) {
    context.commit("setName", payload);
  },
};
