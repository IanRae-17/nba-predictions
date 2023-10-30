export const getPlayersByFilter = (store, filter) => {
  switch (filter) {
    case "PLAYER":
      return store.filter((player) => player.type === "player");
    case "COACH":
      return store.filter((player) => player.type === "coach");
    case "ROOKIE":
      return store.filter((player) => player.YOS === 0);
    case "ALL":

    default:
      return store;
  }
};
