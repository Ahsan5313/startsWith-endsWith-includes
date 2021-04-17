const message = "today is  sunday";

const method = message.startsWith("today", 0);
document.write(method+ "<br/>")
const method2 = message.endsWith("sunday");
document.write(method2+ "<br/>")
const method3 = message.includes("sunday");
document.write(method3);