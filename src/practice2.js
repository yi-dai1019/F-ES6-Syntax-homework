const inject = (items, sections) => {
    let i = 0;
    sections.forEach(section => {
        items.splice(section.index + i, 0, section.content);
        i ++;
    })
    return items;
}
export { inject };
