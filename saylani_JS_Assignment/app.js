//---------Chapter 1---------Task1===
//alert("Welcome to the Ghazi Stationary & Gift Center");

//---------Chapter 1---------Task2===
//alert("Error! Please Enter a valid Password.");

//---------Chapter 1---------Task3===
//alert("Welcome to JS Land...\nHappy Coding!");

//---------Chapter 1---------Task4===
//alert("Welcome to JS Land...");
//alert("Happy Coding!");

//---------Chapter 1---------Task5===
//console.log(alert("Hello...I can run JS through my web browser's console"))

//---------Chapter 1---------Task6===
//<script>alert("Welcome to the Ghazi Stationary & Gift Center")</script>

//---------Chapter 1---------Task7===
// I have practiced placement of <script></script> element in following sections of project in exercise 6.
//a. Head
//b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML)
//d. Body (after your page’s HTML)

//---------Chapter 2---------Task1===
//var username;

//---------Chapter 2---------Task2===
//var myname = "shameeluddin";

//---------Chapter 2---------Task3===
//<script>var message= "Hello World"; alert(message)</script>

//---------Chapter 2---------Task4===
{/* <script>var sname="shameeluddin";
     alert(sname);
     var studentAge="22 years Old";
     alert(studentAge);
     alert("Certified Mobile Application Development")</script> */}

//---------Chapter 2---------Task5===
//<script>alert("PIZZA\nPIZZ\nPIZ\nPI\nP")</script>

//---------Chapter 2---------Task6===
{/* <script>var email="shameel_uddin@yahoo.com";
    alert("My email address is " + email )</script> */}

//---------Chapter 2---------Task7===
{/* <script>var jsBook="A smarter way to learn JavaScript";
    alert('I am trying to learn from the Book ' +jsBook)</script> */}

//---------Chapter 2---------Task8===
//<script>document.write('Yah ! I can write HTML content through Javascript ')</script>

//---------Chapter 2---------Task9===
{/* <script>var store="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(store)</script> */}


//---------Chapter 3---------Task1===
{/* <script>var myAge="22";
    alert("I am " + myAge + " years old")</script> */}

//---------Chapter 3---------Task2===
//Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

//---------Chapter 3---------Task3===
{/* <script>var yearOfBirth="1997";
        document.write("My birth year is "+ yearOfBirth +"<br/> Data type of my declared variable is number")</script> */}


//---------Chapter 3---------Task4===
{/* <script>
    var nameOfVisitor=prompt("Enter Your Name:");   
    var titleOfProduct=prompt("Enter Product Name:");
    var quantity=prompt("Enter Quantity");
    document.write(nameOfVisitor+" ordered " +quantity +" "+ titleOfProduct + "(s) on XYZ Clothing Store");
</script> */}

//---------Chapter 4---------Task1===
{/* <script>
var [a,b,c]=[2,3,4];
alert('Value of a is '+a+ ' & Value if b is '+b+ ' & Value of c is ' +c);
</script> */}

//---------Chapter 4---------Task2===
//5 Illegal variables
{/* <script>
    var 1=shameel;
    var 1a=shameel;
    var full name=shameeluddin;
    var alert=Hello;
    var var=world;
</script> */}
// 5 Legal Variables
{/* <script>
    var b='4';
    var a1='shaikh';
    var FullName='shameeluddin';
    var myvar='Hello';
    var $='world';
</script> */}


//---------Chapter 4---------Task3===
{/* <script>
    var a='letter';
    var number='numbers';
    var _='_';
    var $='$';
    var sensitive='sensitive';
    var keyword='keywords';
document.write('<h1>Rules for naming JS variables</h1> <br/><br/>');
document.write('Variable names can only contain '+a+ ", " +number+ ", "+$+" & " +_+ '. For example $my_1stVariable<br/>');
document.write('Variables must begin with a '+a+ ", " +$+ " or " +_+ '. For example $name, _name or name<br/>');
document.write('Variable names are case '+sensitive+"<br/>");
document.write('Variable names should not be JS '+keyword);  
    </script> */}


//---------Chapter 5---------Task1===
{/* <script>
        var one=3;
        var two=5;
        var sum= one + two;
        document.write('The sum of ' +one+ ' & ' +two+ ' is ' +sum);
    </script> */}

//---------Chapter 5---------Task2===
{/* <script>
        var a=16;
        var b=4;
        var sub= a - b;
        var mul=a * b;
        var div=a / b;
        var mod=a % b;
        document.write('The subtraction of ' +a+ ' & ' +b+ ' is ' +sub+'<br/>');
        document.write('The multiplication of ' +a+ ' & ' +b+ ' is ' +mul+'<br/>');
        document.write('The division of ' +a+ ' & ' +b+ ' is ' +div+'<br/>');
        document.write('The modulus of ' +a+ ' & ' +b+ ' is ' +mod);
    </script> */}


//---------Chapter 5---------Task3===
{/* <script>
        var myVariable;
        document.write('Value after variable declaration is '+myVariable+'<br/>');
        myVariable=5;
        document.write('Initial Value: '+myVariable+'<br/>');
        myVariable++;
        document.write('Value after increment is: '+myVariable+'<br/>');
        var mySecondVariable=(myVariable++)+7;
        document.write('Value after addition is: '+mySecondVariable+'<br/>');
        mySecondVariable--;
        document.write('Value after decrement is: '+mySecondVariable+'<br/>');
        var myThirdVariable=(mySecondVariable--) % 3;
        document.write('The remainder is: '+myThirdVariable+'<br/>');
    </script> */}


//---------Chapter 5---------Task4===
{/* <script>
        var MovieTicket=600;
        var number=prompt('Enter the number of tickets you want to purchase: ');
        var costTotal=600*number;
        document.write('Total Cost to buy '+n+ ' tickets to a movie is ' + costTotal+'PKR');
    </script> */}


//---------Chapter 5---------Task5===
{/* <script>
        var numberOfTable=prompt('Enter the number of Table you want: <br/>');
        document.write('Table of '+numberOfTable+ '<br/>');
        for(var i=1; i<=numberOfTable; i++){
        document.write(numberOfTable+ 'x'+i+'='+ (numberOfTable*i) +'<br/>');
        }
    </script> */}


//---------Chapter 5---------Task6===
{/* <script>
        var Cent=25;
        var cfConverter=(Cent*9/5)+32;
        document.write(Cent+'°C is ' +cfConvert+' °F <br/>');
        var F=70;
        var fcConvert=(F-32)*5/9;
        document.write(F+'°F is ' +fcConvert+' °C');
    </script> */}


//---------Chapter 5---------Task7===
{/* <script>
        document.write('<h1>Shopping Cart</h1><br/><br/><br/>')
        var firstItem=prompt('Enter price of item 1:');
        var firstItemQuantity=prompt('Enter Ordered Quantity of firstItem: ');
        var secondItem=prompt('Enter price of item 2:');
        var secondItemQuantity=prompt('Enter Ordered Quantity of secondItem: ');
        var ShippingCharges=100;
        document.write('Price of Item 1 is:' +firstItem+'<br/>');
        document.write('Quantity of Item 1 is:' +firstItemQuantity+'<br/>');
        document.write('Price of Item 2 is:' +secondItem+'<br/>');
        document.write('Quantity of Item 2 is:' +secondItemQuantity+'<br/>');
        document.write('Shipping Charges:' +ShippingCharges+'<br/><br/>');
        document.write('Total Cost of your order is: ' + ((firstItem*firstItemQuantity)+(secondItem*secondItemQuantity)+ShippingCharges)+'PKR');
    </script> */}

//---------Chapter 5---------Task8===
{/* <script>
        document.write('<h1>Marksheet</h1><br/><br/>')
        var marksObtained=prompt('Enter Obtained Marks: ');
        var marksTotal=prompt('Enter Total Marks: ');
        document.write('Obtained Marks: '+marksObtained+'<br/>');
        document.write('Total Marks: '+marksTotal+'<br/>');
        document.write('Percentage is: '+((marksObtained*100)/marksTotal)+'%');
    </script> */}


//---------Chapter 5---------Task9===
{/* <script>
        document.write('<h1>Currency in PKR</h1><br/>');
        var totalPKR=(10*104.80)+(25*28);
        document.write('Total Currency in PKR is '+totalPKR);
    </script> */}


//---------Chapter 5---------Task10===
{/* <script>
var a=(((5 +5)*10)/2);
document.write(a)
    </script> */}

//---------Chapter 5---------Task11===
{/* <script>
        document.write('<h1>Age Calculator</h1><br/><b1/>')
        var now=2020;
        var yearBirth=1997;
        document.write('Current Year is --> '+now+'<br/>');
        document.write('Birth Year is --> '+BirthYear+'<br/>');
        document.write('Your Age is: --> '+(now-yearBirth))
    </script> */}


//---------Chapter 5---------Task12===
{/* <script>
        document.write('<h1>Geometizer</h1><br/><b1/>')
        var rad=20;
        pi=3.142;
        var c=2*pi*rad;
        var a=pi*(rad*rad);
        document.write('Radius of a Circle is: '+rad+'<br/>');
        document.write('The Cicumference is: '+c+'<br/>');
        document.write('The Area is: '+a+'<br/>');
    </script> */}



//---------Chapter 5---------Task13===
{/* <script>
        document.write('<h1>The Lifetime Supply Calculator</h1><br/><b1/>')
        var snack='Chocolate Chip';
        var age=22;
        var ageMax=66;
        var d=3;
        document.write('Favourite Snack is: '+snack+'<br/>');
        document.write('My Current Age is: '+CurrentAge+'<br/>');
        document.write(' Estimated Maximum Age is: '+ageMax+'<br/>');
        document.write('Amount of Snack per Day is: '+d+'<br/>');
        document.write('You will need '+ ((ageMax-CurrentAge)*d) +' to last you until the ripe old age of '+ageMax);
    </script> */}


//---------Chapter 6-9---------Task1===
{/* <script>
        var one=10;
        document.write('Result:<br/>');
        document.write('The value of one is: '+one+'<br/>');
        document.write('.........................................<br/><br/>');
        ++one;
        document.write('The value of ++one is: '+one+'<br/>');
        document.write('Now the value of one is: '+one+'<br/><br/>');
        document.write('The value of one++ is: '+ one++ +'<br/>');
        document.write('Now the value of one is: '+one+'<br/><br/>');
        --one;
        document.write('The value of --one is: '+one+'<br/>');
        document.write('Now the value of one is: '+one+'<br/><br/>');
        document.write('The value of one-- is: '+ one-- +'<br/>');
        document.write('Now the value of one is: '+one+'<br/><br/>');
    </script> */}


//---------Chapter 6-9---------Task2===
{/* <script>
        var one=2;
        var two=1;
        var result = --one - --two + ++two + two--;
        //===Explanation of Steps===
        // --one means now value of one=1
        // --one - --two means now value ofonea=1 & two=0. So, 1-0=1 here
        // --one - --two + ++two means in previous step two=0 now after two++ it becomes 1. So now total value is 2
        //--one - --two + ++two + two-- means previous equation value is 2 now add 1 to two due to previous value after that it decrease bcoz of two--. So, Final result is 3
        document.write('one is '+one+'<br/>');
        document.write('two is '+two+'<br/>');
        document.write('Result is '+result);
    </script> */}

//---------Chapter 6-9---------Task3===
{/* <script>
        var name=prompt("Input your Name:");
        document.write('************************************************************************<br/>');        
        document.write('<h1>Welcome to our Webpage Dear '+name+'<br/>Thanks for Visiting Us</h1>');
        document.write('*************************************************************************');
    </script> */}


//---------Chapter 6-9---------Task5===
{/* <script>    
        var numberOfTables=prompt('Enter the number of Table you want:');
        if( numberOfTables=="" ){
            document.write('Table of '+5+'<br/>');
        for(var i=1; i<=10; i++){
        document.write(5+ 'x'+i+'='+ (5*i) +'<br/>');
        }
    }
    else{ 
        document.write('Table of '+numberOfTables+ '<br/>');
        for(var i=1; i<=10; i++){
        document.write(numberOfTables+ 'x'+i+'='+ (numberOfTables*i) +'<br/>');
        }
    }
    </script> */}


//---------Chapter 6-9---------Task6===
{/* <script>    
     var Subject1=prompt('Enter your Subject 1 Name:');
     var Subject2=prompt('Enter your Subject 2 Name::');
     var Subject3=prompt('Enter your Subject 3 Name::');
     var ObtainedMarks1=prompt('Enter your Obtained Marks of '+Subject1+' ');
     var ObtainedMarks2=prompt('Enter your Obtained Marks of '+Subject2+' ');
     var ObtainedMarks3=prompt('Enter your Obtained Marks of' +Subject3+' ');
     var TotalEachSubject=100;
     var percentage1=(ObtainedMarks1*100)/TotalEachSubject;
     var percentage2=(ObtainedMarks2*100)/TotalEachSubject;
     var percentage3=(ObtainedMarks3*100)/TotalEachSubject;
     var totaSubjectMarks=TotalEachSubject*3;
     var totalObtained=""(ObtainedMarks1+ObtainedMarks2+ObtainedMarks3);
     var FinalPercentage=((percentage1+percentage2+percentage3)/3);
     document.write("<h1>Subject &nbsp;Total Marks&nbsp;Obtained Marks&nbsp; Percentage </h1><br/>");
     document.write(Subject1+" &nbsp; &nbsp; &nbsp;"+TotalEachSubject+"&nbsp; &nbsp;&nbsp;"+ObtainedMarks1+"&nbsp; &nbsp;&nbsp;"+percentage1+"%<br/>");
     document.write(Subject2+"&nbsp;&nbsp;&nbsp;&nbsp;"+TotalEachSubject+"&nbsp;&nbsp;&nbsp;"+ObtainedMarks2+"&nbsp;&nbsp;&nbsp;"+percentage2+"%<br/>");
     document.write(Subject3+"&nbsp;&nbsp;&nbsp;&nbsp;"+TotalEachSubject+"&nbsp;&nbsp;&nbsp;"+ObtainedMarks3+"&nbsp;&nbsp;&nbsp;"+percentage3+"%<br/>");
     document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+totaSubjectMarks+"&nbsp;&nbsp;&nbsp;"+totalObtained+"&nbsp;&nbsp;&nbsp;"+FinalPercentage+"%<br/>");
    </script> */}


//---------Chapter 9-11---------Task1===
{/* <script>    
     var city=prompt('Enter City Name: ')
     var arr=['Islamabad', 'Karachi', 'Hyderabad', 'Faisalabad', 'Lahore']
     for (var i=0; i<arr.length; i++){
     if (arr[i] === 'Karachi'){
         alert('Welcome to city of Lights');
     }
    }
    </script> */}
//---------Chapter 9-11---------Task2===
{/* <script>
        var gender=prompt('Enter gender: ')
     if (gender=== 'Male'){
         alert('Good Morning Sir');}
         else {
             alert('Good Morning Maam');
         }
</script>     */}


//---------Chapter 9-11---------Task3===



//---------Chapter 9-11---------Task5===
{/* <script>
//alert message displayed
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
//alert message not displayed
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
//alert message not displayed
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } 
//alert message displayed
if (c === 13){ alert("condition 2 is true"); } 
//alert message not displayed
if (++c < 14){ alert("condition 3 is true"); } 
//alert message displayed
if(c === 14){ alert("condition 4 is true"); }
//alert message displayed
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
//alert message displayed
if (true){ alert("True"); } if (false){ alert("False"); }
//alert message displayed
if("car" < "cat"){ alert("car is smaller than cat"); }
</script> */}
