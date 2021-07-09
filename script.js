
var inputMaze = [

  ['#','#','#','#','#','#','#','#','#'],

  ['#','+','+','+','#','+','+','+','#'],

  ['#','+','#','+','#','+','#','+','#'],

  ['+','+','#','+','0','+','#','+','#'],

  ['#','#','#','+','#','#','#','#','#'],

  ['#','#','+','+','#','#','#','#','#'],

  ['#','#','+','#','#','#','#','#','#'],

  ['#','#','#','#','#','#','#','#','#'],

]

let output = document.querySelector('#mazeArray');
output.value = inputMaze.map(inner => inner.join(' ')).join('\n');

function convertMaze(inputMaze){
  function walk(inputMaze){
    for (var i = inputMaze.length-1; i >= 0; i--) {
      for (var j = inputMaze[i].length-1; j >= 0; j--) {
        if (inputMaze[i][j] === '0') {
          inputMaze[i][j] = 1;
        } 
        if (inputMaze[i][j] == '+') {
          inputMaze[i][j] = 1;
        }
        if (inputMaze[i][j] == '9') {
          inputMaze[i][j] = '1';
        }
      }
    }
    return inputMaze
  }

  let maze = walk(inputMaze);
  return maze;
}

var maze = convertMaze(inputMaze);
var result = [];

function Maze(maze) {
var finish = false;
var step = 0;
    function walk(column, row) {
        if ((column == 0 || column == maze.length-1 || row == 0 || row == maze[column].length-1) && maze[column][row] != '#') {
            finish = true;
        } else if(maze[column][row] == 1) {
            maze[column][row] = 9;
            if(column < maze.length - 1) {
              result[step] = 'Вниз';
              step = step + 1;    
              walk(column + 1, row);         
            }
            if(row < maze[column].length - 1) {
              result[step] = 'Вправо';
              step = step + 1;   
              walk(column, row + 1);
            }
            if(column > 0) {
              result[step] = 'Вверх';
              step = step + 1;
              walk(column - 1, row);
            }
            if(row > 0) {
              result[step] = 'Влево';
              step = step + 1;    
              walk(column, row - 1);
            }
            if (finish == false) { maze[column][row] = 2; }
          }
          else{
            step = step - 1;
            result[step]='';
          }

    };
    walk(3,4);
};

Maze(maze);
maze = convertMaze(maze);
result = [];
let path = '';
Maze(maze);
for (var i = 0; i < result.length-1; i++){
   path += result[i];
   path += '  ';
}
let outputPath = document.querySelector('#res');
outputPath.innerText = path;