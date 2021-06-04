/*When "Compute Interest" is clicked*/
function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    /*If the user enters zero or negative values into Amount input box, alert is shows.
    Else we see the text*/
    if (principal<=0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else
    {
        document.getElementById("result").innerHTML="If you deposit <b>"+principal+
                                                    "\<\/b\>,\<br\>at an interest rate of <b>"+rate+
                                                    "%\<\/b\>\<br\>You will receive an amount of <b>"+interest+
                                                    "\<\/b\>,\<br\>in the year <b>"+year+"\<\/b\>\<br\>";
    }
}

/*This is a function that reads the value of the range slider and displays it.*/ 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}

        