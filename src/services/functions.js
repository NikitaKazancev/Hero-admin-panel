const sortHeroes = heroes => heroes.sort((a, b) => (a.name > b.name ? 1 : -1));

export { sortHeroes };
