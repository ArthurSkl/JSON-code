const objs = [
    {
        Nome:"João",
        idade:31,
        Esta_Trabalhando:true,
        
            Detalhes_Profissao:{
                Profissao:"Programador",
                Empresa:"Senac",
                Salario:"12650"
            },

        Hobbies:["programar","correr","ler"]   
    },
    {
        Nome:"Maria",
        idade:25,
        Esta_Trabalhando:true,
        
            Detalhes_Profissao:{
                Profissao:"Professor",
                Empresa:"Senac",
                Salario:"13740"
            },

        Hobbies:["programar","correr","ler"]   
    },
    {
        Nome:"Pedro",
        idade:36,
        Esta_Trabalhando:true,
        
            Detalhes_Profissao:{
                Profissao:"Professor",
                Empresa:"Senac",
                Salario:"13740"
            },

        Hobbies:["programar","correr","ler"]   
    }
    
]


console.log(objs);

//JSON
//convertendo objeto para json

const JsonData = JSON.stringify(objs)

console.log (JsonData)
console.log(typeof JsonData) 


//converter JSON para objeto 

const objData = JSON.parse(JsonData);
console.log(objData) 




// links  

//https://brasilapi.com.br/docs#operation/ondaspredictionwithoutdays(/cptec/v1/ondas/:cityCode)
//https://viacep.com.br/ws/01001000/json/