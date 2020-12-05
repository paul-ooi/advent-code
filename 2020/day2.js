let passArr = ["1-3 a: abcde","1-3 b: cdefg","2-9 c: ccccccccc"];//Sample
let validPasswords_part1 = totalValidPasswords_part1(passArr);
let validPasswords_part2 = totalValidPasswords_part2(passArr);

function totalValidPasswords_part1(arr){
    let count = 0;
    arr.forEach( (str, i) => {
        let policyPassArr = str.split(":");
       
        if (typeof policyPassArr[1] != 'undefined'){
        
            let password = policyPassArr[1].trim() ?? "";
            let countTargetArr = policyPassArr[0].split(" ");
            let lowHigh = countTargetArr[0].split('-');
            let target = countTargetArr[1];

            let occurance = Array.from(password.matchAll(target)).length; 
            if (occurance >= lowHigh[0] && occurance <= lowHigh[1]) count++;
            
        };

    });
    return count;    
}

function totalValidPasswords_part2(arr){
    let count = 0;
    arr.forEach( (str, i) => {
        let policyPassArr = str.split(":");
       
        if (typeof policyPassArr[1] != 'undefined'){
        
            let password = policyPassArr[1].trim() ?? "";
            let posTargetArr = policyPassArr[0].split(" ");
            let positions = posTargetArr[0].split('-');
            let target = posTargetArr[1];

            let charPos1 = password.charAt(parseInt(positions[0])-1); 
            let charPos2 = password.charAt(parseInt(positions[1])-1); 
            // console.log(parseInt(positions[0]),parseInt(positions[1]), charPos1, charPos2)
            if (charPos1 == target || charPos2 == target) {

                //Only one must match
                if (!(charPos1 == target && charPos2 == target)) {
                    count++;                 
                }  
            } 
            
        };

    });
    return count;    
}