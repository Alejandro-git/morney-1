
export default Object.freeze([
    // 不加 Object.freeze 只是不能改变地址
    // 加上 Object.freeze 内容也变得不能改变
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
]);