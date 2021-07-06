var microondas = (prato, tempo) => {
    
    switch(prato){
        case 1: console.log('PIPOCA: Tempo de preparo 10 segundos.!')
        break
        case 2: console.log('MACARÃO: Tempo de preparo 8 segundos!')
        break
        case 3: console.log('Carne: Tempo de preparo 15 segundos!')
        break
        case 4: console.log('FEIJÃO: Tempo de preparo 12 segundos!')
        break
        case 5: console.log('BRIGADEIRO: Tempo de preparo 8 segundos!')
        break
        default: console.log('Prato invalido, escolha de 1 a 5.')

    }
    if(prato == 1){
        if(tempo <11){
            console.log('Muito bom aproveite seu prato!')
           
        }
        else if(tempo <=20){
            console.log('Que pena sua comida queimou.')
            
        }
        else if( tempo >= 30) {
            console.log('KABUMM, você explodiu sua casa.')}
            console.log('Prato pronto bom apetite!!!')
    }
    else if(prato == 2){
        if(tempo <9){
            console.log('Muito bom aproveite seu prato!')
           
        }
        else if(tempo <=24){
            console.log('Que pena sua comida queimou.')
            
        }
        else if( tempo >= 25) {
            console.log('KABUMM, você explodiu sua casa.')}
            console.log('Prato pronto bom apetite!!!')
    }
    else if(prato ==3){
        if(tempo <16){
            console.log('Muito bom aproveite seu prato!')
           
        }
        else if(tempo <=30){
            console.log('Que pena sua comida queimou.')
            
        }
        else if( tempo >= 45) {
            console.log('KABUMM, você explodiu sua casa.')}
            console.log('Prato pronto bom apetite!!!')
    }
    else if (prato==4){
        if(tempo <13){
            console.log('Muito bom aproveite seu prato!')
           
        }
        else if(tempo <=25){
            console.log('Que pena sua comida queimou.')
            
        }
        else if( tempo >= 36) {
            console.log('KABUMM, você explodiu sua casa.')}
            console.log('Prato pronto bom apetite!!!')
    }
    else if(prato ==5){
        if(tempo <9){
            console.log('Muito bom aproveite seu prato!')
           
        }
        else if(tempo <=24){
            console.log('Que pena sua comida queimou.')
            
        }
        else if( tempo >= 25) {
            console.log('KABUMM, você explodiu sua casa.')}
            console.log('Prato pronto bom apetite!!!')
    }

}

microondas(3,29)