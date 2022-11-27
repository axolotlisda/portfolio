let rainbow = false; // rainbow button boolean
let black = true; // black color button boolean
let grayscale = false;

//grayscale
const gray = ["rgb(235,235,235)"
  ,"rgb(209,209,209)"
  ,"rgb(183,183,183)"
  ,"rgb(157,157,157)"
  ,"rgb(131,131,131)"
  ,"rgb(104,104,104)"
  ,"rgb(78,78,78)"
  ,"rgb(52,52,52)"
  ,"rgb(26,26,26)"
  ,"rgb(0,0,0)"];



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
    
    restartbtn.textContent = "restart";
    restartbtn.classList.add('promptbutton'); // css style of the button

    //create rainbow and black color button
    const blackbtn = document.createElement('button');
    const rainbowbtn = document.createElement('button');

    blackbtn.textContent = "black color";
    rainbowbtn.textContent = "rainbow color";
    blackbtn.classList.add('promptbutton');
    rainbowbtn.classList.add('promptbutton');

    //create grayscale button
    const grayscalebtn = document.createElement('button');
    grayscalebtn.textContent = "10 shades of gray";
    grayscalebtn.classList.add("promptbutton");

    //append the color changing buttons
    document.body.appendChild(container); 
    restart.appendChild(blackbtn);
    restart.appendChild(rainbowbtn);
    restart.appendChild(grayscalebtn);
    restart.appendChild(restartbtn);

    document.body.appendChild(restart);

    //blackbtn switch 
    blackbtn.addEventListener("click", () => {
        black = true;
        rainbow = false;
        grayscale = false;
        console.log("rainbow: "+rainbow);
        console.log("black: "+black);
        console.log("gray: "+grayscale);
      
    });

    //blackbtn switch to true or false using button
    rainbowbtn.addEventListener("click", () => {
      rainbow = true;
      black = false;
      grayscale = false;
      console.log("rainbow: "+rainbow);
      console.log("black: "+black);
      console.log("gray: "+grayscale);
    
  });
  //grayscale button switch  
    grayscalebtn.addEventListener("click", () => {
      rainbow = false;
      black = false;
      grayscale = true;
      console.log("rainbow: "+rainbow);
      console.log("black: "+black);
      console.log("gray: "+grayscale);
    });


    restartbtn.addEventListener('click', () => {
      let rem = document.querySelector(".container");
      let rem3 = document.querySelector(".restart");
      //let rem2 = document.querySelector("button.promptbutton");
      rem.remove();
      rem3.remove();
      //rem2.remove();
      beggining();
      
    });


    //mouseover event to change background color    
    const divs = document.querySelectorAll("div.row");
    
       divs.forEach((box) => {

        let i = 0; //very important in grayscale 

  box.addEventListener("mouseover", () => {
          if(rainbow === true){
            i = 0; //back to gray [0]
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
          box.style.backgroundColor = "#"+randomColor;
          }
          
          if(black === true){
            i = 0; // back to gray [0]
            box.style.backgroundColor = "black";
            }
          });//box.mouseover

          //grayscale mouseoverevent
          box.addEventListener("mouseover", () => {
            if(grayscale === true){
                box.style.backgroundColor = gray[i];
                i++;
                console.log(i);
                }
          });
      }); //foreach
    } //else
    });// click event line 46
  } // beginning
