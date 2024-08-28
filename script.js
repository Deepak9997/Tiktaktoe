//---------------------------------------------------------------------------------------------------------------------------------------------------------------------   
   // easy mode --------------------


    function easy(){
      const p = document.getElementById("choice");
      const p1 = document.getElementById("main");
      p.style.display = "none"
      p1.style.display = "flex"
    }
    
    
    
    const cells = document.querySelectorAll('.game-cell');
      
      // Initialize the game state
      let board = ['', '', '', '', '', '', '', '', ''];
      let currentPlayer = 'X';
      const winScore = {X:0,O:0};
      let gameActive = true;
     
      // Function to handle cell click
      cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
          if (gameActive && board[index] === '') {
            board[index] = currentPlayer;
            cell.innerText = currentPlayer;
            if (checkWin()) {
              winScore[currentPlayer]++;
              displaywinScore();
              document.getElementById("x/o").innerHTML = `${currentPlayer}`
              resul();
              music();
              gameActive = false;
            } else if (checkDraw()) {
              alert("It's a draw!");
              gameActive = false;
            } else {
              currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
          }
        });
      });
      
      // Function to check win
      function checkWin() {
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        return winConditions.some(condition => {
          return condition.every(index => board[index] === currentPlayer);
        });
      }
      
      // Function to check draw
      function checkDraw() {
        return board.every(cell => cell !== '');
      }
      function displaywinScore(){
        // const z = document.getElementById("").innerHTML = `x: ${winScore.X} - O: ${winScore.O}`;
        const x = document.getElementById("x1").innerHTML = ` - ${winScore.X}`;
        const o = document.getElementById("o1").innerHTML = ` - ${winScore.O}`;
      }
      
    
    
    function resul(){
    const r = document.getElementById('main'); 
        r.style.backgroundSize = `cover`;
    }
      
    function music(){
      const sound =  document.getElementById("music");
      sound.play();
    }
    function smusic(){
      const sound =  document.getElementById("music");
      sound.pause();
      sound.currentTime = 0;
    }
    const closeBtn = document.getElementById('quit1');
    closeBtn.addEventListener('click', () => {
      window.close();
    });
    
    //window refresh function
    const refreshBtn1 = document.getElementById('home1');
    refreshBtn1.addEventListener('click', () => {
      smusic();
      resetGame()
      const x = document.getElementById("x1").innerHTML = ``;
      const o = document.getElementById("o1").innerHTML = ``;
      const p1 = document.getElementById("choice");
      p1.style.display = "flex"
      const a = document.getElementById('main'); 
      a.style.display = `none`;
      const b = document.getElementById('boxer'); 
      b.style.display = `none`;
    });
    
    function resetGame() {
      board = ['', '', '', '', '', '', '', '', ''];
      document.getElementById("x/o").innerHTML = ` `
      smusic()
      const r = document.getElementById('main'); 
      r.style.backgroundSize = `0`;
      currentPlayer = 'X';
      gameActive = true;
      cells.forEach(cell => cell.innerText = '');
    }

//--------------------------------s----------------------------------------------------------------------------------------------------------------------------------

// HARD MOADE --------------------

    function hard(){
      const p = document.getElementById("choice");
      const p1 = document.getElementById("main1");
      p.style.display = "none"
      p1.style.display = "flex"
    }
    
    
    const cellse = document.querySelectorAll('.game-cell1');
      
      // Initialize the game state
      let boards = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
      let currentPlayers = 'X';
      const winScores = {X:0,O:0};
      let gameActives = true;
      
      // Function to handle cell click
      cellse.forEach((cell1, index) => {
        cell1.addEventListener('click', () => {
          if (gameActives && boards[index] === '') {
            boards[index] = currentPlayers;
            cell1.innerText = currentPlayers;
            if (checkWins()) {
              winScores[currentPlayers]++;
              displaywinScores();
              music()
              const r = document.getElementById('main1'); 
              r.style.backgroundSize = `cover`;
              // alert(`Player ${currentPlayer} wins!`);
              document.getElementById("x/o1").innerHTML = `${currentPlayers}`
              gameActives = false;
              
            } else if (checkDraws()) {
              alert("It's a draw!");
              gameActives = false;
            } else {
              currentPlayers = currentPlayers === 'X' ? 'O' : 'X';
            }
          }
        });
      });
      // Function to check win
      function checkWins() {
        const winConditions = [
    

    // //  left to right way -----
          [0, 1, 2],
          [1, 2, 3],
          [4,5,6],
          [5,6,7],
          [8,9,10],
          [9,10,11],
          [12,13,14],
          [13,14,15],
    //  top to bottom way -----
          [0,4,8],
          [4,8,12],
          [1,5,9],
          [5,9,13],
          [2,6,10],
          [6,10,14],
          [3,7,11],
          [7,11,15],
    //  diagonal way ------
          [0,5,10],
          [5,10,15],
          [3,6,9],
          [6,9,12],
          [4,9,14],
          [7,10,13],
          [1,6,11],
          [2,5,8],
          [1,6,11]
        ];
        return winConditions.some(condition => {
          return condition.every(index => boards[index] === currentPlayers);
        });
      }
      
      // Function to check draw
      function checkDraws() {
        return board.every(cell1 => cell1 !== '');
      }
      function displaywinScores(){
        
        const x = document.getElementById("x11").innerHTML = ` - ${winScores.X}`;
        const o = document.getElementById("o11").innerHTML = ` - ${winScores.O}`;
      }
      
    
    
      const close = document.getElementById('quit');
        close.addEventListener('click',() => {
          window.close();
        });
      
      //window refresh function
      const refreshBtn = document.getElementById('home');
      refreshBtn.addEventListener('click', () => {
        smusic();
        resetGames();
        window.location.reload();
        const x = document.getElementById("x1").innerHTML = ``;
        const o = document.getElementById("o1").innerHTML = ``;
        const p1 = document.getElementById("choice");
        p1.style.display = "flex"  
      });
      
      // Function to reset the game
      function resetGames() {
        boards = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        document.getElementById("x/o1").innerHTML = ` `
        smusic()
        const r = document.getElementById('main1'); 
        r.style.backgroundSize = `0`;
        currentPlayers = 'X';
        gameActives = true;
        cellse.forEach(cell1 => cell1.innerText = '');
      }
    



