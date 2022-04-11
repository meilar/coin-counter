import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import testCode from './coin-counter.js';

$(document).ready(function() {
  let msg = testCode();
  console.log("This page is loading correctly " + msg);
});