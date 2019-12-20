
export const filterByChampionName = (champions, text) => {
    return champions.filter((champion) => {
        return champion.toLowerCase().includes(text);
    });
}

export const filterByTagName = (champions, filter) => {
    const filteredChampions =  champions.filter((champion) => {
        return champion[1].tags.includes(filter);
    });

    return filteredChampions.map((champion) => {
        return champion[0];
    });
}