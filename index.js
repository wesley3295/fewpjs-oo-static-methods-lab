class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }
  
  static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arrayOfWords = string.split(" ")
    let titleizedString = []
   for(let i = 0 ; i<arrayOfWords.length;i++){
     if(i==0){
       titleizedString.push(Formatter.capitalize(arrayOfWords[i]))
     }else{
       if (exceptions.includes(arrayOfWords[i])){
         titleizedString.push(arrayOfWords[i])
       }else{
       titleizedString.push(Formatter.capitalize(arrayOfWords[i]))

       }
     }
   }
  return titleizedString.join(" ")
  }
  
}