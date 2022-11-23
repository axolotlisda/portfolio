
const startdiv = document.createElement('div');
const start = document.createElement('button');
startdiv.classList.add('startdiv');
start.addEventListener('click', () => {
beggining();
start.remove();
});
start.classList.add('start');
start.textContent = "START BUTTON";

startdiv.appendChild(start);
document.body.appendChild(startdiv);


function beggining(){

const btns = document.querySelector('.btns'); // div for my 'btn' button
const btn = document.createElement("button"); // create button
btn.textContent = "Create Grid"  ; // columns and rows 
btn.classList.add('promptbutton');
btns.appendChild(btn);

const btnz = document.createElement("button"); 


btn.addEventListener("click", () => {

/*  let errorText = document.createElement('p');
  errorText.classList.add("errorText");*/

       let roww = prompt("how many rows and columns? \n NOTE: 6 to 99 ONLY",0);
        let rows = parseInt(roww);
        let columns = 0;
        columns = rows;
        

         if(roww ===null){
          console.log("null?");
          
          prompt("ERROR! please put some numbers");
          
          
      }
       else if(roww <= 5 || roww >= 100){
            console.log("only 5 - 100");
            prompt("ERROR! put numbers 5 - 100 only");
           
        }
        else if(isNaN(roww)){
            console.log("makulit yarn?");
            prompt("ERROR! put numbers 5 - 100 only: That's not a number!");
          
        }


        else if(!isNaN(roww)){
          btn.remove();

    /*const btn = document.createElement("button"); // create button
          btn.addEventListener("click", (e) => {
            
        e = prompt("how many boxes", 0);
        if(isNaN(e)){
            console.log("you need to enter a number, human.");
        }
        else if(!isNaN(e)){
        rows = parseInt(e);
        columns = parseInt(e);
        console.log(columns+rows);
        }
      });*/

    let container = document.createElement('div'); //container for the divs
    container.className = 'container'; //css style of the container
    


    let grid = document.createElement('div'); // create box grid
    grid.className = 'grid'; //css style of the grid

    for (let i = 0; i < columns; ++i) {
        let column = document.createElement('div'); // create column
        column.className = 'column';
        for (let j = 0; j < rows; ++j) {
            let row = document.createElement('div'); // create row
            row.className = 'row';
            //row.textContent = i; // set text
            column.appendChild(row); // append row in column
        }
        container.appendChild(grid);
        grid.appendChild(column); // append column inside grid
    }
    
    const restart = document.createElement("div"); // create div for the button
    restart.classList.add('restart');
    const restartbtn = document.createElement('button');
    restartbtn.classList.add('btndiv'); //css style of the div 
    restartbtn.textContent = "restart";
    restartbtn.classList.add('promptbutton'); // css style of the button


    document.body.appendChild(container);
    restart.appendChild(restartbtn);
    document.body.appendChild(restart);

    restartbtn.addEventListener('click', () => {
      let rem = document.querySelector(".container");
      let rem2 = document.querySelector("button.btndiv.promptbutton");
      rem.remove();
      rem2.remove();
      beggining();
      
    });
    




    //mouseover event to change background color

    
    const divs = document.querySelectorAll("div.row");
    
    




    
       divs.forEach((box) => {
        
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
          // box.classList.add('hover');
        });
        box.addEventListener("click", () => {
          box.style.backgroundColor = "gold";
          //box.classList.add('leftclick');
        });
      });
    }




  


     /* const btndiv = document.createElement("div"); // create div for the button
      
      
      btndiv.classList.add('btndiv'); //css style of the div 
      btn.textContent = "Change resolution";
      btn.classList.add('promptbutton'); // css style of the button


      btndiv.appendChild(btn);
      document.body.appendChild(btndiv);
      

      */
     



    });

  }