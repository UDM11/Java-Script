const ticTac = document.querySelector('.ticTac');
const boxes = document.querySelectorAll('.box');
const h1 = document.getElementById('h1');
console.log(h1);

let winingCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//function
let currentPlayer = "X";
ticTac.addEventListener('click', (e) => {
    if(e.target.className !== "ticTac"){
        if(e.target.innerText === ""){
            e.target.textContent = currentPlayer;
            winner();
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        };
    }
});

function winner() {
    winingCondition.forEach((item) => {
        let index0 = item[0];
        let index1 = item[1];
        let index2 = item[2];
        
        let val0 = boxes[index0].innerText
        let val1 = boxes[index1].innerText
        let val2 = boxes[index2].innerText
        // console.log(index0, val0, index1, val1, index2, val2);
        if(val0 !== '' && val1 !== '' && val2 !== '' ){
            if(val0 === val1 && val0 === val2){
                h1[0].innerText = `Winner is ${val1}`;
                ticTac.removeEventListener('click', (e) => {
                    if(e.target.className !== "ticTac"){
                        if(e.target.innerText === ""){
                            e.target.textContent = currentPlayer;
                            winner();
                            currentPlayer = (currentPlayer === "X") ? "O" : "X";
                        };
                    }
                });
            }
        }
    });
}
