@echo off
REM === Настройки ===
set REPO=https://github.com/bogat008/ska.git
set BRANCH=main

REM === Инициализация git ===
echo Инициализация Git...
IF EXIST .git (
    echo Удаление старой git-папки...
    rmdir /s /q .git
)

git init
git remote add origin %REPO%
git branch -M %BRANCH%

REM === Добавление и коммит ===
git add .
git commit -m "Обновление сайта"

REM === Загрузка в GitHub ===
git push -f origin %BRANCH%

echo === ГОТОВО ===
pause
