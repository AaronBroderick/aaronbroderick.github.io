var heading1 = document.getElementById('h1');
var heading2 = document.getElementById('h2');
var chart1 = document.getElementsByClassName('chart1');
var chart2 = document.getElementsByClassName('chart2');
var chart3 = document.getElementsByClassName('chart3');
var chart4 = document.getElementsByClassName('chart4');
var chart5 = document.getElementsByClassName('chart5');
var charts = [chart1, chart2, chart3, chart4, chart5];

a3.addEventListener("click", function(){
    grid.style.display = "none";
    heading1.style.display = "none";
    heading2.innerHTML = "Chili's Grill & Bar";
    heading2.style.display = "block";
    back1.style.display = "block";
    for(let i=0; i<chart1.length; i++){
        chart1[i].style.display = "block";
    }
    window.scrollTo(0, 0);
});
b3.addEventListener("click", function(){
    grid.style.display = "none";
    heading1.style.display = "none";
    heading2.innerHTML = "McDonald's";
    heading2.style.display = "block";
    back1.style.display = "block";
    for(let i=0; i<chart2.length; i++){
        chart2[i].style.display = "block";
    }
    window.scrollTo(0, 0);
});
c4.addEventListener("click", function(){
    grid.style.display = "none";
    heading1.style.display = "none";
    heading2.innerHTML = "Romano's Macaroni Grill";
    heading2.style.display = "block";
    back1.style.display = "block";
    for(let i=0; i<chart3.length; i++){
        chart3[i].style.display = "block";
    }
    window.scrollTo(0, 0);
});
d4.addEventListener("click", function(){
    grid.style.display = "none";
    heading1.style.display = "none";
    heading2.innerHTML = "Starbucks";
    heading2.style.display = "block";
    back1.style.display = "block";
    for(let i=0; i<chart4.length; i++){
        chart4[i].style.display = "block";
    }
    window.scrollTo(0, 0);
});
e1.addEventListener("click", function(){
    grid.style.display = "none";
    heading1.style.display = "none";
    heading2.innerHTML = "Subway";
    heading2.style.display = "block";
    back1.style.display = "block";
    for(let i=0; i<chart5.length; i++){
        chart5[i].style.display = "block";
    }
    window.scrollTo(0, 0);
});

back1.addEventListener("click", function(){
    grid.style.display = "grid";
    heading1.style.display = "block";
    heading2.style.display = "none";
    back1.style.display = "none";
    for(let i=0; i<charts.length; i++){
        for(let j=0; j<charts[i].length; j++){
            charts[i][j].style.display = "none";
        }
    }
});