/*
 * @Description: 
 * @Author: zhouhaimei
 * @Date: 2024-04-13 20:49:08
 * @LastEditors: zhouhaimei
 * @LastEditTime: 2024-04-13 21:10:38
 */

/*拼接路径  
__filename 表示文件的绝对路径
__dirname 表示所在文件的所在目录的 绝对路径
./  表示当前目录  （./motto.txt  等价于 motto.txt）
../ 表示当前目录的上一级目录
/   表示绝对路径

*/

// 导入fs模块
const path = require('path')
const fs = require('fs')

// 拼接路径  后面的相对路径 不要加.   虽然会/ \ 不一致，但可以正确创建文件
console.log(__dirname + '/index.html')               //C:\Users\Lenovo\Desktop\node\http/index.html
fs.writeFileSync(__dirname + '/index.html' , 'hello world')

// 利用API path.resolve()
// console.log(path.resolve(__dirname,'./index.html'))  //C:\Users\Lenovo\Desktop\node\http\index.html
// console.log(path.resolve(__dirname,'index.html'))    //C:\Users\Lenovo\Desktop\node\http\index.html
// console.log(path.resolve(__dirname,'/index.html'))   //C:\index.html

