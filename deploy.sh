# 端口
port=8012
# 启动脚本
start="yarn dev"
# pm服务名称
name=lol:$port

echo "端口：$port"
echo "名称：$name"

a=`lsof -i:$port | wc -l`

if [ "$a" -gt "0" ];then
    echo "serve restart!"
    git pull origin master && yarn && pm2 restart $name 
    echo "serve restart ok!"
else
    echo "create serve!"
    git pull origin master && yarn && pm2 start "$start" --name=$name
    echo "serve created!"
fi