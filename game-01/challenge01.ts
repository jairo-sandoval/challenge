function findFirstSubSet(M: number[], N: number){
    const differences = {}
    for(let i = 0; i < M.length ; i++){
        let diference: number = 0
        if(M[i] < N){
            if(differences[M[i]]){
                return[differences[M[i]], M[i]]
            }
            diference = N - M[i]
            differences[diference] = M[i]
        }
    }
}