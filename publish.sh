#!/usr/bin/env bash
set -e


npm config get registry 
npm config set registry=http://registry.npmjs.org

echo '登录'
npm login 

echo "发布中..."
npm publish


npm config set registry=https://registry.npm.taobao.org 
echo -e "\n发布成功\n"
exit