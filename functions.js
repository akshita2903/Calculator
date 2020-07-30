//function to display value
function display(val)
{
    document.getElementById("cal").value+=val;
}
//function to clear all values
function clr(){
    document.getElementById("cal").value=" ";
}
// function to remove single value
function del(){
    document.getElementById("cal").value=document.getElementById("cal").value.substr(0,document.getElementById("cal").value.length-1)
}
//function to return value after operations
function solve(val)
{
  let x=  document.getElementById("cal").value;
  let y=eval(x);
document.getElementById("cal").value=y;

}
   

