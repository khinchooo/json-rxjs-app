const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');

const responseData = {
  data: {
    articles : [
      { "id": 1, "text": "Article 1"},
      { "id": 2, "text": "Article 2"},
      { "id": 3, "text": "Article 3"},
    ],
  },
};

const observable = Observable.create(observer => {
  observer.next(responseData);
  observer.complete();
});

observable
// オブジェクトのデータを取得する処理
.pipe(map(res => res.data.articles)).subscribe(
  ((data) => console.log(data)),
  (err) => console.log(err),
  () => console.log("complete")
);
