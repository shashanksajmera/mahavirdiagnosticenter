@echo "Publishing Website"
@echo off
call git add .
call git commit -m %1
call git push