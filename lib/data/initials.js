const initialJS = `// Исходные данные

//Задание 1
//задайте параметры profit в data, 
//чтобы прибыль каждого месяца была равной эталону

//Задание 2
//Реализуйте функцию, которая меняет цвет месяца
//если его ценность (profit) больше или равна 10

const data = [
  {month: 'January', profit: 5,},
  {month: 'February', profit: 2,},
  {month: 'March', profit: 5,},
  {month: 'April', profit: 11,},
  {month: 'May', profit: 16,},
  {month: 'June', profit: 9,},
  {month: 'july', profit: 1,},
  {month: 'Aughust', profit: 18,},
  {month: 'Septr', profit: 4,},
  {month: 'October', profit: 2,},
  {month: 'Nov', profit: 5,},
  {month: 'Dec', profit: 8,}
  
];

const months = data.map((obj) => obj.month);
const profits = data.map((obj) => obj.profit);

function limit(values_p){
    const colors = [];
    
//Реализуйте проверку в этом блоке

 return [colors];   
}

const digit = limit(profits);
const color = digit[0];

//координаты блоков каждого месяца

const y = [60,60,60,60,60,60,60,60,60,60,60,60];
const x = [10,70,130,190,250,310,370,430,490,550,610,670];
const y1 = [y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12]];
const x1 = [x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10],x[11],x[12]];

const svg = d3.select('svg');
const g = svg.selectAll('g').data(months).enter().append('g');

//Рисуем блоки для отображения ценности месяцев

g.append('rect')
.attr('y', () => y.shift())
.style('fill', (d, i) => color[i])
.attr('x', () => x.shift())
.attr('width',50)
.transition().style("color","green").duration(3000)
.attr('height',(d) => profits[months.indexOf(d)] * 10)
;

//Пишем названия месяцев

g.append('text')
.attr('y', () => y1.shift() - 10)
.attr('x', () => x1.shift())
.attr('dy', '.5em')
.text((d) => d)
.style('fill','black');
`;

const resultJS = `\
const data = [
  {month: 'January', profit: 10,},
  {month: 'February', profit: 12,},
  {month: 'March', profit: 14,},
  {month: 'April', profit: 13,},
  {month: 'May', profit: 17,},
  {month: 'June', profit: 9,},
  {month: 'july', profit: 15,},
  {month: 'Aughust', profit: 4,},
  {month: 'Septr', profit: 7,},
  {month: 'October', profit: 5,},
  {month: 'Nov', profit: 18,},
  {month: 'Dec', profit: 3,}
  
];

const months = data.map((obj) => obj.month);
const profits = data.map((obj) => obj.profit);

function limit(values_p){
    const colors = [];
    
    for (let i = 0; i < values_p.length; i ++){
        if (values_p[i] >= 10){
            colors.push('green');
        } else {
            colors.push('red');
        }
    }
 return [colors];   
}

const digit = limit(profits);
const color = digit[0];


const y = [60,60,60,60,60,60,60,60,60,60,60,60];
const x = [10,70,130,190,250,310,370,430,490,550,610,670];
const y1 = [y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12]];
const x1 = [x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10],x[11],x[12]];

const svg = d3.select('svg');
const g = svg.selectAll('g').data(months).enter().append('g');


g.append('rect')
.attr('y', () => y.shift())
.style('fill', (d, i) => color[i])
.attr('x', () => x.shift())
.attr('width',50)
.transition().style("color","green").duration(3000)
.attr('height',(d) => profits[months.indexOf(d)] * 10)
;


g.append('text')
.attr('y', () => y1.shift() - 10)
.attr('x', () => x1.shift())
.attr('dy', '.5em')
.text((d) => d)
.style('fill','black');
`;


const initialHTML = `<!DOCTYPE html>
<html>
  <head>
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      svg {
        width: inherit;
        height: 99%;
      }
    </style>
    <script src="lib/d3/d3.js"></script>
  </head>
  <body>
    <svg></svg>
  </body>
</html>`;

window.initialCode = {
  initialJS,
  initialHTML,
  resultJS
};