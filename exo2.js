- /* A car rental organization offers two rental formulas:
   Rental by the kilometer:
    - for the first 100 kilometers: rate r1 per km,
    - for the kilometers from 101 to 1000: rate r2 per km,
    - beyond 1000 kilometers: rate r3 per km.
   Daily rate: Unlimited mileage at the price per day p_d.

  In both cases, it is necessary to add an insurance (whose cost per day is ins) and the value-added tax (VAT) .
  The quantities r1, r2, r3, p_d, ins as well as the rate of VAT are considered as constants.
  Take, for example: r1 = 0.7 r2 = 0.4 r3 = 0.2 p_d = 100 ins= 0.3 (expressed in dinars) and rate VAT = 0.18.
  Write a function which, given the total number of kilometers and the number of days of location,
   calculates the total costs of the two tariffs and indicates by a label the most 
   suitable solution advantageous for the client.*/

function totalCost(nbkm,nbDaysLocation){
    let r1 = 0.7 ,r2 = 0.4, r3 = 0.2 ,p_d = 100 ,ins= 0.3,VAT = 0.19;
    let prix=0,bestPrice=[];

    // traitement 
    //calculer le prix avec les trois intervales  : ==> switch
     // si nbkm <100 alors ==> prix=r1*nbDaysLocation;
    // sinon si nbkm > 100 && nbkm<=1000 ==> prix=r2*nbDaysLocation;
    //sinon prix=r3*nbDaysLocation;
    switch (true) {
        case nbkm<=100:
            prix=r1*nbDaysLocation;
            break;
        case nbkm > 100 && nbkm<=1000 :
            prix=r2*nbDaysLocation;
            break
        
        case nbkm>1000:
            prix=r3*nbDaysLocation;
            break;
        default:
            console.log('Error');
    }
   
    
    prix+=VAT+ins
    console.log(prix);
    let prixM2=p_d*nbDaysLocation+ins+VAT;
    bestPrice=[prixM2,prix]
   // Math.max(prix,prixM2);
    


    // la vleur final du prix M1:  prix+=VAT+ins;
    // prix final M2 : prixM2=p_d*nbDaysLocation+ins+VAT;
    // best price = Max entre les deux ==> Math.max(v1,v2);

return bestPrice;
}

let result = totalCost(2000,50);
console.log(result);