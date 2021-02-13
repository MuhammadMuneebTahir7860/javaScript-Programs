function hoursToSeconds(){
    var hoursInput=document.getElementById("hoursInput").value;
    var secondsOutput=document.getElementById("secondsOutput");
    secondsOutput.innerHTML=hoursInput*3600 + " Seconds in " + hoursInput + " Hours";
}
function ageToDays(){
    var ageInput=document.getElementById("ageInput").value;
    var ageDaysOutput=document.getElementById("ageDaysOutput");
    ageDaysOutput.innerHTML=ageInput*365 + " Days in " + ageInput + " Years Age";
}

function inversion(){
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    var number3=document.getElementById("number3").value;
    var number4=document.getElementById("number4").value;
    var number5=document.getElementById("number5").value;
    var inversionOutput=document.getElementById("inversionOutput");
   var array=[];
   array[0]=number1*(-1);
   array[1]=number2*(-1);
   array[2]=number3*(-1);
   array[3]=number4*(-1);
   array[4]=number5*(-1);
    inversionOutput.innerHTML=array;  
}

function compare(){
    var firstString=document.getElementById("firstString").value;
    var secondString=document.getElementById("secondString").value;
    var compareOutput=document.getElementById("compareOutput");
    if(firstString.length==secondString.length){
        document.getElementById("wrong").innerHTML="";
        compareOutput.innerHTML="True";
    }
    else{
        compareOutput.innerHTML="";
        document.getElementById("wrong").innerHTML="False";
    }
}

function integerToString(){
    var integerInput1=document.getElementById("integerInput1").value;
    var integerInput2=document.getElementById("integerInput2").value;
    var integerInput3=document.getElementById("integerInput3").value;
    var integerInput4=document.getElementById("integerInput4").value;
    var integerInput5=document.getElementById("integerInput5").value;
    var stringOutput=document.getElementById("stringOutput");
   var array=[];
   array[0]=integerInput1.toString();
   array[1]=integerInput2.toString();
   array[2]=integerInput3.toString();
   array[3]=integerInput4.toString();
   array[4]=integerInput5.toString();
    stringOutput.innerHTML=array;  
}

function leapYear(){
    var year=document.getElementById("year").value;
    if(year%4==0){
        document.getElementById("false").innerHTML="";
        document.getElementById("yearOutput").innerHTML="True";
    }
    else{
        document.getElementById("yearOutput").innerHTML="";
        document.getElementById("false").innerHTML="False";
    }
}

function calculateDays(){
    var recoverdCases=document.getElementById("recoverdCases").value;
    var newCases=document.getElementById("newCases").value;
    var activeCases=document.getElementById("activeCases").value;
    var daysOutput=document.getElementById("daysOutput");
        var num = 0;
        for(i = activeCases; i > 0; i = i - (recoverdCases - newCases)){
        num++;
        }
        daysOutput.innerHTML="Corona Will End in " + num + " Days";
}