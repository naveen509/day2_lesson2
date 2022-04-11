//  calculate using arrow functions

const main=(operator,num1,num2)=>{
    if(operator === "+"){
        const value=add(num1,num2);
        console.log(value);
    }
    if(operator=="-"){
        subtract();
    }
    if(operator=="/"){
        divide();
    }

    if(operator=="*"){
        mutiply();
    }

}


const add=(num1,num2)=>{

    return num1+num2;

}

const subtract=(num1,num2)=>{
    return num1-num2;
}

const divide=(num1,num2)=>{
    return num1/num2;
}

const multiply=(num1,num2)=>{
    return num1*num2;
}



// module export way 1
// module.exports.main=main;
// module.exports.add=add;
// console.log(module);

// module export way 2

// module.exports={
//     main:main,
//     add:add,
//     multiply:multiply
// }

// module export way 3 when both are same

module.exports={
    main,
    add,
    multiply
}

// console.log(process.argv);

// const op=process.argv[2];
// const n1=parseInt(process.argv[3]);
// const n2=parseInt(process.argv[4]);

// main(op,n1,n2);