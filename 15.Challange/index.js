function calculateAge() {
    const birthDate = prompt("Doğum tarihinizi YYYY-AA-GG şeklinde giriniz:")
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
  
    // Eğer doğum günü ve ayı henüz geçmediyse, yaş bir azaltılır
    if (
        today.getMonth() < birthDateObj.getMonth() ||
        (today.getMonth() === birthDateObj.getMonth() &&
        today.getDate() < birthDateObj.getDate())
    ) {
        age--;
    }
  
    console.log("Yaşınız: " + age); 
}

calculateAge();