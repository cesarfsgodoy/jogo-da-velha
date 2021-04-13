document.addEventListener('DOMContentLoaded',()=>{

	let squares = document.querySelectorAll('.square');
	squares.forEach((square)=>{
		square.addEventListener('click',handleClick)
	})
})

function handleClick(event){

	let square = event.target;
	let position = square.id;

	if(handleMove(position)){
		updateSquare(square);
		setTimeout(()=>{
			alert('Fim de Jogo')
		},100)
	}

	updateSquare(square);
}

function updateSquare(square){

	let position = square.id
	let symbol = board[position]
	square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares(){

	let squares = document.querySelectorAll('.square');
	squares.forEach((square)=>{
		let position = square.id;
		let symbol = board[position];
		square.innerHTML = `<div class='${symbol}'></div>`
	})
}

function resetGame(){
	
	reset()
	updateSquares()
}

