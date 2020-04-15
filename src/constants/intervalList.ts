
export default Object.freeze([
    // 不加 Object.freeze 只是不能改变地址
    // 加上 Object.freeze 内容也变得不能改变
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
]);