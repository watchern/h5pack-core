#!/bin/bash
set -e

echo "开始构建 Docker 镜像..."
docker build -t h5pack-example .

echo "执行打包命令..."
docker run --name my_container h5pack-example sh -c "
    echo '当前工作目录:'
    pwd
    echo '切换到 /app 目录...'
    cd /app
    ls
    echo '安装 h5pack...'
    yarn add -D h5pack
    echo '检查当前工作目录:'
    ls
    echo '执行 h5pack...'
    npx h5pack
" 2>&1 | tee docker_output.log

echo "复制 APK 文件..."
docker cp my_container:/app/app-release.apk ./

echo "清理容器..."
docker rm -f my_container
pwd
ls

echo "完成！"