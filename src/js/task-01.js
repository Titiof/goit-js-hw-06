// 1.Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item

const allLiInUl = document.querySelectorAll(".item");
console.dir(`Number of categories: ${allLiInUl.length}`);


// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе
// в консоль текст заголовку елемента (тегу <h2>) і кількість елементів
// в категорії (усіх <li>, вкладених в нього).

allLiInUl.forEach(li => console.log (`Category: ${li.querySelector('h2').textContent}\n
Elements: ${li.querySelectorAll('li').length}`));
