function makeorders(){
    // Use of one window object
    alert("Welcome to WITO's Empire Supermarket");
    // Use of two window object
    numoforders=window.prompt("Enter the number of combos that you want")
    // Use of ParseInt builtin event
    numorders=parseInt(numoforders)
    // Correct use of variable
    var sum = 0;

    // Use of Array
    combolist=new Array;

    // Use of Iteration
    for(var i=0;i<numorders;i++)
    {
        comboorder=parseInt(prompt("Enter Combo Number"));

        // Use of Selection
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
    // Use of third window object
    alert(combolist.join('\n'))
    alert("Total Cost:$"+sum.toFixed(2)+"");

}