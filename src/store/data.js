const pointList = [
  { id: 1, name: 'точка 1' },
  { id: 2, name: 'точка 2' },
  { id: 3, name: 'точка 3' },
  { id: 4, name: 'точка 4' },
  { id: 5, name: 'точка 5' },
  { id: 6, name: 'точка 6' },
  { id: 7, name: 'точка 7' },
  { id: 8, name: 'точка 8' },
  { id: 9, name: 'точка 9' },
];
const taskList = [
  { id: 1, name: 'Задание 1', points: [1, 2, 3] },
  { id: 2, name: 'Задание 2', points: [3, 4, 5] },
  { id: 3, name: 'Задание 3', points: [5, 6, 7, 8, 9, 10] },
];

export default function get(key, array) {
  const object = {};
  let arrayBuffer = [];
  switch (key) {
    case 'taskList':
      arrayBuffer = taskList;
      break;
    case 'pointList':
      arrayBuffer = pointList;
      break;
    default:
      break;
  }
  console.log(1, arrayBuffer);
  arrayBuffer.forEach((el) => { object[el.id] = el; });
  return array.map((el) => object[el]);
}
