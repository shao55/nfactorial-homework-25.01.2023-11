// Задержка на промисах

function delay(time) {
    return new Promise(resolve, reject => setTimeout(resolve, time));
  };
delay(3000).then(() => alert('выполнилось через 3 секунды'));

// Можно ли "перевыполнить" промис?

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  // Вывод 1, т.к. учитывается один resolve

// Промисы: сравните then и catch

promise.then(f1).catch(f2); // это верный вариант