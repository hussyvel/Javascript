function calcular(){
        let array = [];
        let i = 0;
        let j = 1;

        for(i = 0; i <= 10; i++){
            array[i] = prompt("Digite um valor para popular o array: ");
        }

        let x = array[0];
        
        while(j <= 10){
            console.log(x);
            x = x * array[j];
            j++;
        }      
        
        demo.innerHTML = x;
    }