@echo "Publishing Website"
@echo off
call npm run build
call git add .
call git commit -m %1
call git push