function calculateGrades() {
    var ts = document.getElementById("tests").value;
    var qs = document.getElementById("quizzes").value;
    var hs = document.getElementById("homework").value;
    var ms = document.getElementById("midterm").value;
    var tws = document.getElementById("testWeight").value;
    var qws = document.getElementById("quizWeight").value;
    var hws = document.getElementById("homeworkWeight").value;
    var mws = document.getElementById("midtermWeight").value;
    var fws = document.getElementById("finalWeight").value;

    var t = splitArray(document.getElementById("tests").value);
    var q = splitArray(qs);
    var h = splitArray(hs);
    var m = splitArray(ms);
    var tw = splitArray(tws);
    var qw = splitArray(qws);
    var hw = splitArray(hws);
    var mw = splitArray(mws);
    fw = splitArray(fws);

   var ta = findAverage(t);
   var qa = findAverage(q);
   var ha = findAverage(h);
   var tp = ta*(tw/100);
   var qp = qa*(qw/100);
   var hp = ha*(hw/100);
   grade = (tp + qp + hp + (m*(mw/100)));
   var gradef = grade/(1-(fw/100));
   if (gradef>= 90) {
       document.getElementById("output").innerHTML = "A";
   } else if (gradef >= 80) {
       document.getElementById("output").innerHTML = "B";
   } else if (gradef >= 70) {
       document.getElementById("output").innerHTML = "C";
   } else if (gradef >= 60) {
       document.getElementById("output").innerHTML = "D";
   } else {
       document.getElementById("output").innerHTML = "F";
   }

}
function calculateFinalNeeded() {
    var desired = document.getElementById("gradeNeeded").value;
    if (desired === "a") {
        var desiredGrade = 90;
    } else if (desired === "b") {
        var desiredGrade = 80
    } else if (desired === "c") {
        var desiredGrade =70;
    }
    var fn = (desiredGrade - grade)/(fw/100);
        var response = "Looks like you would need a " + fn + " on the final.";
    if (fn > 100) {
        response += " Miracles do happen! (not really)";
    } else if (fn > 95) {
        response += " Good luck! You'll need it."
    } else if (fn > 90) {
        response += " Get studying! You got this.";
    } else if (fn > 80) {
        response += " Nicely done! You'll probably be fine.";
    } else if (fn > 70) {
        response += " Great job. Just don't f it up now!";
    } else if (fn > 60) {
        response += " You're time would be better spent playing dark souls."
    } else {
        response += " Umm, just show up?";
    }
    document.getElementById("output").innerHTML = response;
}


function splitArray(string) {
    var arr = string.split(", ");
    var arr2 = [];
    for (var i = 0; i<arr.length; i++) {
        arr2.push(parseInt(arr[i]));
    }
    return arr2
}

function findAverage(array) {
    var total = 0;
    var average = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    average = (total/array.length);
    return average;
}