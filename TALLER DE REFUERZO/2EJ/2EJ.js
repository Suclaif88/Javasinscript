function ejemploVar() {
    var x = 1;
    if (true) {
        var x = 2; //var puede ser reasignada y redefinido 
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function ejemploLet() {
    let x = 1;
    if (true) {
        let x = 2; //let puede ser reasignada pero no cambiada
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

function ejemploConst() {
    const x = 1;
    if (true) {
        const x = 2;  // diferente variable x y const puede ser mutado pero no reasignada ni redefinida
        console.log(x);  // 2
    }
    console.log(x);  // 1
    
}

