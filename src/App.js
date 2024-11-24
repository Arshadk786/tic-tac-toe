import './App.css';

function Square({value}){
  // function Handleclick () {
  //   console.log("X");
  // }

  return (
  <button className="square">{value}</button>);
};


export default function board(){
  return (
    <>
    <div className="board-row">
    <Square onClick={Handleclick}/>
    <Square/>
    <Square/>
    </div>
    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>
    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>
    </>
  );
};
