(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page
	const navButtons = document.querySelectorAll("#buttonHolder img");
	puzzlePiece = document.querySelectorAll(".puzzle-pieces");
	puzzleBoard = document.querySelector(".puzzle-board");


	// functions go here => what we want to have happen when our triggers fire
	function changeImageSet() {

		pieces.forEach((piece, index) => puzzlePice[index].src/'images${piece + this.dataset.puzzleindex}.jpg');
		// change the thumbnail images on the left to match the button image
		// and set a background image on the drop zone container
		puzzleBoard.style.backgroundImage = 'url(images/backGround${this.dataset.puzzleindex}.jpeg)';
	}


	// add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
