// creating top row element
let topRow = document.querySelector('.top_row');
for(let i = 0; i < 26; i++){
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65+i);
    topRow.appendChild(div)
}

// creating left-most row numbering elements
let leftCol = document.querySelector('.left_col');
for(let i = 1; i <= 100; i++){
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div);
}

// main grid = top row - leftMost col
let grid = document.querySelector(".grid")
for(let row = 0; row < 100; row++){
    let rowBreak = document.createElement("div");
    rowBreak.setAttribute("class", "row");
    for(let col = 0; col < 26; col++){
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        // div.textContent = row+" ,"+col;
        div.setAttribute("contentEditable","true");

        //   every cell identification required 
        div.setAttribute("rId", row);
        div.setAttribute("cId", col);

        rowBreak.appendChild(div);
    }
    grid.appendChild(rowBreak);
}