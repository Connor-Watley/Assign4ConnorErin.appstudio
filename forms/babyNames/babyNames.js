let BabyNames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]
let FavBabyNames = []






babyNames.onshow = function() {
    for (i = 0; i < BabyNames.length; i++)
        Select3.addItem(BabyNames[i])
}




Button3.onclick=function(){
  FavBabyNames.push(Select3.text)
  ChangeForm(favBabyNames)
}
