#!/bin/bash
set -e

date +"%Y-%m-%d %H-%M-%S" && echo "开始构建 Docker 镜像..."
docker build -t h5pack-example .

date +"%Y-%m-%d %H-%M-%S" && echo "执行打包命令..."
docker run --name my_container h5pack-example sh -c "
    date +"%Y-%m-%d %H-%M-%S" && echo '当前工作目录:'
    pwd
    ls
    date +"%Y-%m-%d %H-%M-%S" && echo '切换到 /app 目录...'
    cd /app
    yarn
    date +"%Y-%m-%d %H-%M-%S" && echo '检查当前工作目录:'
    pwd
    ls
    date +"%Y-%m-%d %H-%M-%S" && echo '执行 h5pack...'
    npx h5pack
" 2>&1 | tee docker_output.log

date +"%Y-%m-%d %H-%M-%S" &&  echo "复制 APK 文件..."
docker cp my_container:/app/app-release.apk ./

date +"%Y-%m-%d %H-%M-%S" && echo "清理容器..."
docker rm -f my_container
pwd
ls

date +"%Y-%m-%d %H-%M-%S" && echo "完成！"