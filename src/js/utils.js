export const indexItems = (items) => {
    return items.map((postItem, index) => {
        return {
            ...postItem,
            id: index,
        };
    });
};

export const filterItems = (items, searchText) => {
    return items.filter((postItem) => {
        return (
            postItem.title.toLowerCase().includes(searchText.toLowerCase()) ||
            postItem.text.toLowerCase().includes(searchText.toLowerCase())
        );
    });
};
