class TicTacToe {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', '']; 
        this.currentPlayer = 'X'; 
        this.isGameOver = false; 
        this.cells = document.querySelectorAll('.cell'); 
        this.currentPlayerText = document.getElementById('current-player'); 
        this.winnerText = document.getElementById('winner'); 
        this.resetButton = document.querySelector('.reset-button'); 
        this.startGame();
    }

   
    startGame() {
        this.cells.forEach(cell => {
            cell.addEventListener('click', (event) => this.handleClick(event)); 
        });

        this.resetButton.addEventListener('click', () => this.resetGame()); 
    }

    
    changePlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.currentPlayerText.textContent = this.currentPlayer; 
    }

  
    checkWinner() {
        const winPatterns = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]  
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.isGameOver = true;
                this.winnerText.textContent = 'pobjednik je: ' + this.currentPlayer;
                return;
            }
        }

    
        if (!this.board.includes('')) {
            this.isGameOver = true;
            this.winnerText.textContent = 'Nema pobjednika, izjednačeno!';
        }
    }

 
    handleClick(event) {
        const cellIndex = event.target.getAttribute('data-cell'); 
    
        if (this.board[cellIndex] !== '' || this.isGameOver) {
            return; 
        }
    
        this.board[cellIndex] = this.currentPlayer; 
        event.target.textContent = this.currentPlayer; 
    
        // Ako je trenutni igrač "X", dodajte klasu 'x' za crvenu pozadinu
        if (this.currentPlayer === 'X') {
            event.target.classList.add('x'); // Dodajte klasu 'x'
        } else {
            event.target.classList.add('o'); // Dodajte klasu 'o' ako je "O"
        }
    
        this.checkWinner(); 
        if (!this.isGameOver) {
            this.changePlayer(); 
        }
    }

    
    resetGame() {
        this.board = ['', '', '', '', '', '', '', '', '']; 
        this.isGameOver = false;
        this.winnerText.textContent = ''; 

        this.cells.forEach(cell => {
            cell.textContent = ''; 
        });

        this.currentPlayer = 'X'; 
        this.currentPlayerText.textContent = this.currentPlayer; 
    }
}


const game = new TicTacToe();
