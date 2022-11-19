let columns = 16;
    let rows = 16;

    let container = document.createElement('div');
    container.className = 'container';
    let grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < columns; ++i) {
        let column = document.createElement('div'); // create column
        column.className = 'column';
        for (let j = 0; j < rows; ++j) {
            let row = document.createElement('div'); // create row
            row.className = 'row';
            row.textContent = i; // set text
            column.appendChild(row); // append row in column
        }
        container.appendChild(grid);
        grid.appendChild(column); // append column inside grid
    }
    
    document.body.appendChild(container);



    //mouseover event to change background color

    const demo = document.getElementById("demo");
    const divs = document.querySelectorAll("div");
    


    //document.getElementById("demo").addEventListener("mouseover", mouseOver);
   // document.getElementById("demo").addEventListener("mouseout", mouseOut);
       demo.addEventListener("mouseover", mouseOver);
       demo.addEventListener("mouseout", mouseOut); 

       divs.forEach((box) => {
        //box.style.backgroundColor ="red";
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        })
      });

      

    function mouseOver() {
      demo.style.backgroundColor = "red";
    }
    
    function mouseOut() {
      demo.style.backgroundColor = "black";
    }