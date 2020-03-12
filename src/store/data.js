const pointList = [
  { idpoint: 1, name: 'точка 1' },
  { idpoint: 2, name: 'точка 2' },
  { idpoint: 3, name: 'точка 3' },
  { idpoint: 4, name: 'точка 4' },
  { idpoint: 5, name: 'точка 5' },
  { idpoint: 6, name: 'точка 6' },
  { idpoint: 7, name: 'точка 7' },
  { idpoint: 8, name: 'точка 8' },
  { idpoint: 9, name: 'точка 9' },
];
const taskList = [
  { taskid: 1, name: 'Задание 1', points: [1, 2, 3] },
  { taskid: 2, name: 'Задание 2', points: [3, 4, 5] },
  { taskid: 3, name: 'Задание 3', points: [5, 6, 7, 8, 9, 10] },
];

export default function get(key, array) {
  const object = {};
  const arrayBuffer = []
  switch (key) {
    case 'taskList':
      arrayBuffer.push(...taskList.slice())
      break;
    case 'pointList':
      arrayBuffer.push(...pointList.slice())
      break;
  }
  arrayBuffer.forEach((el) => { object[el.idpoint] = el; });
  return array.map((el) => ({ ...object[el] }));
}
