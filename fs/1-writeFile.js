/*
 * @Description: 
 * @Author: zhouhaimei
 * @Date: 2024-04-11 22:10:54
 * @LastEditors: zhouhaimei
 * @LastEditTime: 2024-04-11 22:48:32
 */
// 需求：新建一个文件，motto.txt,写入内容：我思故我在

// 1.导入fs模块
const fs = require('fs')

// 2.写入文件（异步）
fs.writeFile('./motto.txt','我思故我在',err => {
    // err:写入失败---错误对象
    //     写入成功---null
    if(err){
        console.log('写入失败')
        return
    }
    console.log('写入成功')
});
// console.log(1+1)   //这里先输出 与 上面的回调输出可以看出， writeFile是异步写入

// 同步写入  参数中没有回调函数
fs.writeFileSync('./mottoSync.txt','欲买桂花同载酒，终不似少年游')