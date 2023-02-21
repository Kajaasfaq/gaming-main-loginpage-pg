// monthly to yearly 
    function toggleC(yerC,monC){
// function yearly(){
        var yerC =[
          document.getElementById("changePricing1").textContent = "$90/yr",
          document.getElementById("arcade").style.height="170px",
          document.getElementById("monthfree1").textContent = "2 months free",
          document.getElementById("monthfree1").style.color ="darkblue",
          document.getElementById("changePricing2").textContent = "$120/yr",
          document.getElementById("advanced").style.height="170px",
          document.getElementById("monthfree2").textContent = "2 months free",
          document.getElementById("monthfree2").style.color ="darkblue",
          document.getElementById("changePricing3").textContent = "$150/yr",
          document.getElementById("pro").style.height="170px",
          document.getElementById("monthfree3").textContent = "2 months free",
          document.getElementById("monthfree3").style.color ="darkblue",
        ]
    // };
    // yearly()
    // function monthly(){
        var monC =[
          document.getElementById("changePricing1").textContent = "$9/mo",
          document.getElementById("changePricing2").textContent = "$12/mo",
          document.getElementById("changePricing3").textContent = "$15/mo",
        ]
    // }
    // monthly()
    if(yerC === oddNumber()){
        console.log(yerC) 
    } else{
        console.log(monC)
    }
     
    function oddNumber(){
       
    }
}