/*
 * @Description: 
 * @Author: zhouhaimei
 * @Date: 2024-04-11 23:15:55
 * @LastEditors: zhouhaimei
 * @LastEditTime: 2024-04-11 23:25:17
 */
// 1.导入fs模块
const fs = require('fs');

// 2.创建 写入流对象
const ws = fs.createWriteStream('./stream.txt');

// 3.写入
ws.write('春江潮水连海平，海上明月共潮生。\r\n')
ws.write('滟滟随波千万里，何处春江无月明!\r\n')
ws.write('江流宛转绕芳甸，月照花林皆似霰;\r\n')
ws.write('空里流霜不觉飞，汀上白沙看不见。\r\n')
ws.write('江天一色无纤尘，皎皎空中孤月轮。\r\n')
ws.write('江畔何人初见月？江月何年初照人？\r\n')
ws.write('人生代代无穷已，江月年年望相似。\r\n')

// 4.关闭通道
ws.close()

