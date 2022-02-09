function findFirstSubSet(M: number[], N: number){
    for(let i = 0; i < M.length - 1; i++){
        for(let j = i + 1; j < M.length; j++){
            if(M[i] + M[j] === N){
                return[M[i], M[j]]
            } 
        }
    }
}