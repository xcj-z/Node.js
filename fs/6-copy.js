/*
 * @Description: 
 * @Author: zhouhaimei
 * @Date: 2024-04-12 01:26:44
 * @LastEditors: zhouhaimei
 * @LastEditTime: 2024-04-12 01:42:40
 */

// 需求：复制screen.png文件

// 1.引入fs模块
const fs = require('fs');
const process = require('process');//

// 方法1--- 同步操作
// 先读取文件
const data = fs.readFileSync('./screen.png');
// 再写入文件
fs.writeFileSync('screen2.png',data);
// console.log(process.memoryUsage()); // rss 26054656字节


// 方法2--- 流式操作
// 创建 读取流对象
const rs = fs.createReadStream('./screen.png');
// 创建 写入流对象
const ws = fs.createWriteStream('screen3.png');
// 绑定data事件，
rs.on('data', chunk => {
    ws.write(chunk);   //注意读取速度 大于 写入速度
})
// rs.on('end',()=>{
//     console.log(process.memoryUsage()); // rss 27242496字节    一般该内存占用量要小点
// })

// 方法3 管道[与方法2]
rs.pipe(ws)
