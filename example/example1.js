const { Observable, of } = require('rxjs');
const { map, filter, tap, catchError } = require('rxjs/operators');

const observable = Observable.create((observer) => {
    observer.next('1');
    observer.next('2');
    observer.next('3');
    throw "error occured!!";
    observer.next('4');
    observer.next('5');
    observer.complete();
  });

  observable
  .pipe(
    tap(() => console.log("tap1")),
    filter((data) => data % 2 === 0),
    tap(() => console.log("tap2")),
    map((data) => data * 2),
    tap(() => console.log("tap3")),
    catchError((error)=>of(error+'!!!'))
  )
  .subscribe(
    (data) => console.log(data),
    (err) => console.log("ERROR!", err),
    () => console.log("complete")
  );
