//Begin Class
class Spaceship {
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }
    attack(target){
        if (Math.random() < this.accuracy){
            console.log("succesful hit");
            target.hull-=this.firepower
        }
        else{
            console.log("hit missed");
        }
}
}
//End of Class

const element = document.getElementById('btn')
element.addEventListener("click", function() {
    document.getElementById("gamestatus").innerHTML = "<h1>Game started!</h1>";
    const myShip = new Spaceship(20, 5, 0.7);
    //console.log(myShip);
    const enemyShips = [];
    for (let i=0; i<6; i++){
        enemyShips[i] = new Spaceship(Math.round(Math.random()*(6-3)+3), Math.round(Math.random()*(4-2)+2), Math.round((Math.random()*(0.8-0.6)+0.6)*10)/10)
    }
    //console.log(enemyShips)
    
    //Space battle begins
    
    console.log('%c you are attacking an enemy ship','font-size: 20px');
    document.getElementById("1attack").innerHTML="<h2>You are attacking an Enemy ship</h2>"

    while (myShip.hull>0 && enemyShips[0].hull >0){
        myShip.attack(enemyShips[0])
        if (enemyShips[0].hull>0){
            enemyShips[0].attack(myShip)
        }
    }

    if(enemyShips[0].hull<=0){
        console.log('Enemy ship 1 is destroyed')
        document.getElementById("1").innerHTML="<h2>First Enemy ship is destroyed,</h2>"
        //confirm("would you like to attack more or retreat")
        if(window.confirm("First Enemy ship is destroyed, would you like to attack more or retreat"))
        {
            for(k=1; k < enemyShips.length; k++)
            {
                while (myShip.hull>0 && enemyShips[k].hull >0){
                    myShip.attack(enemyShips[k])
                    if (enemyShips[k].hull>0 ){
                        enemyShips[k].attack(myShip)
                    }
                    if(enemyShips[k].hull<=0)
                    {
                        console.log('enemy ship number ' + `${k+1}` + ' is destroyed')

                        document.getElementById(`${k+1}`).innerHTML="<h2>Enemy ship " + `${k+1}` + " is destroyed</h2>"
                    }
                }
            }
        }
        else
        {
            document.getElementById("gameend").innerHTML="<h2>GAME OVER</h2>"
        }
    } else if(myShip.hull <=0){
        console.log('earth ship is destroyed. Game is over')
        document.getElementById("1").innerHTML="<h2>My ship is destroyed Game over</h2>"
    } else {
        console.log('want to continue')
        //confirm("would you like to attack more or retreat")
    }
}
);