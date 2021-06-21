#angular_dev
Angularの開発環境

起動
このフォルダ直下
docker-compose build（一回目のみ）
docker-compose up -d

終了
dokcer-compose down

/angular_dev/project/PokemonList
youtube:https://www.youtube.com/watch?v=F5sSI6P5uJo
上記を参考に作ってみた。

確認の仕方
1. docker exec -it angular_dev bash （コンテナに入る）
2. cd PokemonList
3. ng serve --host 0.0.0.0 （サーバ起動）
4. Webブラウザにおいて127.0.0.1:4200 （環境によってはファイヤーウォールの設定変更が必要）


