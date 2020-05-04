let players = ['x', 'o'];
let activePlayer = 0;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function startGame() {
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  renderBoard(board);
  activePlayer = 0;

  alert("Начинает игрок № " + (activePlayer+1));
};



function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);

  let win = 0;
  let winRow = 0;
  let winColumn = 0;
  let winDiagonal = 0;
  let i;
  let j;
  let index = board.length - 1;

  if (activePlayer == 0){
    for (i = 0; i < board.length; i++) {
      //проверка по диагонали вправо
      if (board[i][i] === 'x') {
        win += 1;
        if(win == board.length) {
            showWinner(activePlayer);
          }
      }
      //проверка по диагонали влево
      if (board[i][index] === 'x') {
        winDiagonal += 1;
        if(winDiagonal == board.length) {
            showWinner(activePlayer);
          }
      }
      index--;
      winRow = 0;
      winColumn = 0;
      for (j = 0; j < board[i].length; j++) { 
        //проверка по горизонтали
        if(board[i][j] === 'x') {
          winRow += 1;
          if(winRow == board.length) {
            showWinner(activePlayer);
          }
        }
        //проверка по вертикали
        if(board[j][i] === 'x') {
          winColumn += 1;
          if(winColumn == board.length) {
            showWinner(activePlayer);
          }
        }
      }
    }
    activePlayer += 1;
  }
  
  else {
    x = board.length - 1;
    win = 0;
    for (i = 0; i < board.length; i++) {
      winRow = 0;
      winColumn = 0;
      //проверка по диагонали вправо
      if (board[i][i] === 'o') {
        win += 1;
        if(win == board.length) {
            showWinner(activePlayer);
          }
      }
      //проверка по диагонали влево
      if (board[i][index] === 'o') {
        winDiagonal += 1;
        if(winDiagonal == board.length) {
            showWinner(activePlayer);
          }
      }
      index--;
      for (j = 0; j < board[i].length; j++) {
        //проверка по горизонтали
        if(board[i][j] === 'o') {
          winRow += 1;
          if(winRow == board.length) {
            showWinner(activePlayer);
          }
        }
        //проверка по вертикали
        if(board[j][i] === 'o') {
          winColumn += 1;
          if(winColumn == board.length) {
            showWinner(activePlayer);
          }
        }
      }
    }
    activePlayer = 0;
  }
  
}