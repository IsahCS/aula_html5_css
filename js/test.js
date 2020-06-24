function soma(x,y){
    return x + y;
}

function diminui(x){
    return x - 1;
}

const subtrai = (x,y) => x - y;


console.log( 
    diminui( soma(5,1) )
)




function falar(){
    function viver(){
        return "vivo";
    }
}

console.log(
    falar()
)

function init() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    displayName();
}

init(); 