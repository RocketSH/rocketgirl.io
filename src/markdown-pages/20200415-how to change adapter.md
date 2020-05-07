---
path: "/rails/how-to-switch-database-adapter"
date: "2020-04-15"
title: "切換專案資料庫 How to switch Database adapter"
categories:
  - Rails
  - Databases
---

####前情提要：
這幾天嘗試著在學習專案中把 rails 預設的資料庫：sqlite3 改為 PostgreSQL，就讓我們看看分別要在終端機和編輯器中做什麼事吧

---

#### 1.需在電腦中先完成安裝 postgres

(詳情請見資料庫操作文章)
Install postgres on our local machine. Get Postgres
Add a helpful tool called pgAdmin. Get pgAdmin
Change our Gemfile in our rails app.
Run bundle install to get postgres gem.
Change the database.yml file to use postgres.
Make sure Postgres is up on our machine. (just start the app and it should automagically start up)
Run rake db:setup followed by rake db:migrate
Run rails server
Go to localhost:3000 and see no exceptions!

#### 檢查專案 Gemfile 中有無相關資料庫插件



ps. 有時候在終端機執行 rails 指令無反應，可以試試`spring stop`來停止 rails
<img src="~/projects/rocketgirl.io/src/images/spring_stop.png" style="zoom:70%" />
