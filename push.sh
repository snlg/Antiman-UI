#!/usr/bin/env bash
commit_message=""
commit_type=(":bug:" ":tada:" ":heavy_plus_sign:" ":heavy_minus_sign:" ":zap:" ":twisted_rightwards_arrows:" ":white_check_mark:" ":rocket:" ":lipstick:")
echo "start git add"
git add .
echo "git add finished"
echo "please input your comit message and end of press Enter"
read message
commit_message=${message}
echo ${commit_message}
echo "please choose your commit type"
echo "1. 解决bug"
echo "2. 初始化项目"
echo "3. 添加文件"
echo "4. 删除文件"
echo "5. 性能优化"
echo "6. 合并分支"
echo "7. 提测"
echo "8. 发布"
echo "9. UI更新"
read type
commit_type=${commit_type[${type}-1]}
git commit -m "${commit_type} ${message}"
echo "git commit finished"
echo "please input your branch name and end of press Enter"
read name
git push origin ${name}
echo "git push finished"