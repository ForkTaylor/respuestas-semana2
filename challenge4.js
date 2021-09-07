function landMass(countryName, landMass) {
    //Implementación
    const earthArea = 148940000;
 
    let multiplication = (landMass * 100)/(earthArea);
    
    let percentage = parseFloat(multiplication.toFixed(2));
    
    return {"message": `${countryName} representa el ${percentage}% de la masa de la tierra`, 
    "percent": percentage}
}

module.exports = landMass;