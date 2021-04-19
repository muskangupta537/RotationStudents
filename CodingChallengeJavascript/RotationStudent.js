
function studentRotation(dayOfWeek){
   var dayCounter = dayOfWeek;
   var updatedArray = new Array();
   var orignalArray = ["Student1", "Student2","Student3","Student4","Student5","Student6","Student7","Student8","Student9","Student10"];
   updatedArray = orignalArray;

   for(var i = 0; i<10; i++)
   {
    switch(dayCounter)
    {
    	case 0:
    	 dayCounter++;
    	 break;

    	 case 3:
    	 updatedArray.push(updatedArray.shift());
		 updatedArray.push(updatedArray.shift());
	   	 dayCounter++;
	   	 break;

	   	 case 6:
	   	 updatedArray.push(updatedArray.shift());
		 dayCounter=0;
		 break;

		 default :
		 updatedArray.push(updatedArray.shift());
		 dayCounter++;

    }
      // console.log(updatedArray);
   }

    return updatedArray;

}

console.log(studentRotation(1));

