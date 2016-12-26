let board = function(rows, cols) {

  let spaces = rows * cols;
  let row = 0;

  for(let i = 0; i < spaces; i++) {
    let spaceNumber = Number([i]);
    let space = document.createElement('div');
    let target = `<div class="droptarget"></div>`;
    let id = Math.random();
    let targetRedGamePiece = `<div class="droptarget"><div draggable="true" id="dragtarget_${id}" class="redGamePiece"></div></div>`;
    let targetBlackGamePiece = `<div class="droptarget"><div draggable="true" id="dragtarget_${id}" class="blackGamePiece"></div></div>`;
    let actualSpace = space.innerHTML = target;

    if(spaceNumber % cols === 0){
      row++;
    }

    if(row % 2 === 0){

      if(row <= 2){
        space.innerHTML = targetRedGamePiece;
      } else if (row >= 7) {
        space.innerHTML = targetBlackGamePiece;
      }

      if(spaceNumber % 2 === 0) {
        space.classList.add('blackSpace');
      } else {
        space.classList.add('whiteSpace');
      }
    }

    if (row % 2 !== 0) {

      if(row < 2){
        space.innerHTML = targetRedGamePiece;
      } else if (row >= 7) {
        space.innerHTML = targetBlackGamePiece;
      }

      if(spaceNumber % 2 === 0) {
        space.classList.add('whiteSpace');
      } else {
        space.classList.add('blackSpace');
      }
    }
     document.getElementById('gameBoard').appendChild(space);
  }

  ///////////////////////

/* Events fired on the drag target */
  document.addEventListener("dragstart", function(event) {
      event.dataTransfer.setData("Text", event.target.id);
console.log(event.target.id);
  });

  document.addEventListener('drag', function(e) {
  })
}

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        let data = event.dataTransfer.getData("Text");
        console.log(data)
        event.target.appendChild(document.getElementById(data));
    }
});

document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
        // event.target.style.border = "3px dotted red";
    }
});

board(8,8);
