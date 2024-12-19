function add(numbers) {
    if (numbers === "") return 0;

    let delimiters = /,|\\n/;
    if (numbers.startsWith("//")) {
        const [_, customDelimiter, rest] = numbers.match(/^\/\/(.)\\n(.*)$/);
        delimiters = new RegExp(`[${customDelimiter},\\n]`);
        numbers = rest;
    }

    const nums = numbers.split(delimiters).map(num => parseInt(num, 10));
    const negatives = nums.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;