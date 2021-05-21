function makeorders(){
    alert("Welcoome to WITO's Empire Supermarket");
    numoforders=window.prompt("Enter the number of combos that you want")
    numorders=parseInt(numoforders)
    var sum = 0;
    combolist=new Array;

    for(var i=0;i<numorders;i++)
    {
        comboorder=parseInt(prompt("Enter Combo Number"));

        if(comboorder==1)
        {
            combolist[i]="Breakfast Combo"
            sum = sum + 4851.00
        }

        if(comboorder==2)
        {
            combolist[i]="Small HouseHold Combo"
            sum = sum + 3860.00
        }

        if(comboorder==3)
        {
            combolist[i]="Meat & Fish Combo"
            sum = sum + 8568.00
        }

        if(comboorder==4)
        {
            combolist[i]="Vegetarian Combo"
            sum = sum + 5722.00
        }

        if(comboorder==5)
        {
            combolist[i]="Kidz Pack Combo"
            sum = sum + 7369.00
        }

        if(comboorder==6)
        {
            combolist[i]="Full House"
            sum = sum + 6976.00
        }
    }

    alert(combolist.join('\n'))
    alert("Total Cost:$"+sum.toFixed(2)+"");

}