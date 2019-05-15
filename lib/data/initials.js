const initialJS = `// Исходные данные

//задайте параметры планет в data, а также их координаты в x и y
//чтобы получить солнечную систему

const data = [
  {name: 'Sun', mass: 10, color: '#FFFF00'},
  {name: '2', mass: 1, color: '#8B4513'},
  {name: '3', mass: 1, color: '#FF7F50'},
  {name: '4', mass: 1, color: 'green'},
  {name: '5', mass: 1, color: '#FF4500'},
  {name: '6', mass: 1, color: '#DEB887'},
  {name: '7', mass: 1, color: '#D2B48C'},
  {name: '8', mass: 1, color: '#5F9EA0'},
  {name: '9', mass: 1, color: '#4169E1'},
  {name: 'Pluto', mass: 1, color: 'yellow'}
];

const names = data.map((obj) => obj.name);
const masses = data.map((obj) => obj.mass);
const color = data.map((obj) => obj.color);


//координаты планет от первой до последней

const y = [50,40,70,110,150,190,230,250,260,280];
const x = [10,40,70,110,150,190,230,250,260,750];
const y1 = [y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9]];
const x1 = [x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9]];

const svg = d3.select('svg');
const g = svg.selectAll('g').data(names).enter().append('g');

//Рисуем круги

g.append('circle')
.attr('r', (d) => masses[names.indexOf(d)] * 10)
.attr('cy', () => y.shift())
.attr('cx', () => x.shift())
.style('fill', (d, i) => color[i]);


g.append('text')
.attr('y', () => y1.shift() - 3)
.attr('x', () => x1.shift() - 8)
.attr('dy', '.5em')
.text((d) => d)
.style('fill','white');;
`;

const resultJS = `\
const data = [
  {name: 'Sun', mass: 10, color: '#FFFF00'},
  {name: 'Mercury', mass: 1, color: '#8B4513'},
  {name: 'Venus', mass: 3, color: '#FF7F50'},
  {name: 'Earth', mass: 4, color: 'green'},
  {name: 'Mars', mass: 2, color: '#FF4500'},
  {name: 'Jupiter', mass: 6, color: '#DEB887'},
  {name: 'Saturn', mass: 5, color: '#D2B48C'},
  {name: 'Uranus', mass: 3, color: '#5F9EA0'},
  {name: 'Neptune', mass: 3, color: '#4169E1'},
  {name: 'Pluto', mass: 1, color: 'yellow'}
];

const names = data.map((obj) => obj.name);
const masses = data.map((obj) => obj.mass);
const color = data.map((obj) => obj.color);

const y = [50,70,80,110,150,200,230,250,260,280];
const x = [10,100,150,200,250,370,500,580,670,750];
const y1 = [y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9]];
const x1 = [x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9]];

const svg = d3.select('svg');
const g = svg.selectAll('g').data(names).enter().append('g');
// Чем больше людей с одинаковым возрастом, тем больше круг

g.append('circle')
.attr('r', (d) => masses[names.indexOf(d)] * 10)
.attr('cy', () => y.shift())
.attr('cx', () => x.shift())
.style('fill', (d, i) => color[i]);

g.append('text')
.attr('y', () => y1.shift() - 3)
.attr('x', () => x1.shift() - 8)
.attr('dy', '.5em')
.text((d) => d)
.style('fill','white');
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