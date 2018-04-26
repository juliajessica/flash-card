import { Flash } from './scripts.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

function initialize(score) { ///created to pass methods into UI
  score.correct();
  // score.incorrect();
  // score.bonusPoints();
}

//ui
$(document).ready(function(){

  $('#js').click(function(){
    $('#js').toggle("slow");
    $('#js-show').show();
  });

  $('#js-btn').click(function(score){
    $('#js-show').toggle("slow");
    $('#js').show();
    let points = new Flash(); //new instance of class
    initialize(points);
    debugger;

    var userAnswer = document.getElementById("js-question");
    console.log(userAnswer);
    var value = userAnswer.options[userAnswer.selectedIndex].value;
    var valToString = parseInt(value);
    console.log(value);
    if (valToString === 1) {
      points.correct();  //breaking here
      console.log(points.correct());


      $("#total-points").text(points.score);
    }

  });

});//close function
