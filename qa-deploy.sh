ssh admin@45.62.227.172 -p 3108 "rm -rf /home/admin/dist/*"
scp -r -P 3108 ./dist/* admin@45.62.227.172:"/home/admin/dist"
