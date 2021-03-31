favBabyNames.onshow = function() {
    Dropdown2.clear()
    console.log(FavBabyNames)
    for (i = 0; i < 5; i++)
        Dropdown2.addItem(FavBabyNames[0][i])

    Image1.hidden = true
}

Dropdown2.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        Label4.value = `Your favorite baby name was ${s}.`
        Image1.hidden = false
    }

}