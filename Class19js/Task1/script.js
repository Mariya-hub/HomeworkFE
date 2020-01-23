 // Задача номер 1 - Получите от пользователя номер квартиры и взамен выдайте в консоль номер подъезда от 1 до 5
 
 function addition()
    {
        let a = document.getElementById('a').value;
        if (a<=0 || a>100)
        {
            console.log("Неверный номер квартиры") ;
        }
       else if (a<=1 || a<=20)
        {
            console.log("Первый подъезд") ;
        }
        else if (a<=21 || a<=40)
        {
            console.log("Второй подъезд") ;
        }
        else if (a<=41 || a<=60)
        {
            console.log("Третий подъезд") ;
        }
        else if (a<=61 || a<=80)
        {
            console.log("Четвёртый подъезд") ;
        }
        else if (a<=81 || a<=100)
        {
            console.log("Пятый подъезд") ;
        }
    }

 // Задача номер 2 - Получить от пользователя строку с названием марки автомобиля и вывести в консоль введённую строку (марку) + страну происхождения автомобиля
 
 function add1()
    {
        let a = document.getElementById('a').value;
        switch (a) {

            case 'BMW':
                console.log('BMW – страна происхождения Германия');
                break;
            case 'AUDI':
                console.log('AUDI – страна происхождения Германия');
                break;
            case 'Ford':
                console.log('Ford – страна происхождения США');
                break;
            case 'Mazda':
                console.log('Mazda– страна происхождения Япония');
                break;
            default:
                console.log("some_input – страна происхождения неизвестна");


        }

    }

// Задача номер 3 - Пользователь вводит год. Определить, является ли этот год високосным.

function add3()
    {
        let a = document.getElementById('a').value;

  if(a%4===0)
  {
      console.log("Год " + a +" является высокосным");
  }
else {

      console.log("Год " + a +" является невысокосным");
  }


    }

// Задача номер 4 - Вывести в консоль таблицу умножения введенного числа.

    function add4()
    {
    let a = document.getElementById('a').value;
    let sum;
    for (let i=1;i<=10;i++)
    {   sum=a * i;
        console.log(a + " * " + i + " = " + sum );
    }

    }

// Задача номер 5 - Вывести в консоль сумму всех нечётных чисел от 1 до 50 (используя оператор continue).

    function add5()
    {
    let c = 0;

    for (let i=1;i<=50;i++)
    {
        if(i%2===0) continue;
        c=c + i;
        console.log(i);
    }
      console.log(c);
    }

// Задача номер 6 - Используя циклы, вывести в консоль первые 15 [чисел Фибоначчи]
    function add6()
    {

    let proshloe = 0;  //1-ое число
    let next = 1;  //2-ое число


  for (let i=0;i<=15;i++)
  {let save = next;   //сохраняем 2-ое число, чтобы заменить первое на второе
  
    console.log(proshloe); //выводим первое число
      next = proshloe + next; //получаем 3-е число
      proshloe = save;  //заменяем первое число на второе
  }

    }