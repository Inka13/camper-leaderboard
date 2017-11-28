import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from "jquery";

$(document).ready(function() {
  var dataRecent=[];
  var dataAllTime=[];

  $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent',                           function(data){
              dataRecent=data;

              $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime',                           function(result){
                          dataAllTime=result;
                          ReactDOM.render(<App dataRecent={dataRecent}
                          dataAllTime={dataAllTime}/>, document.getElementById('root'));
                          registerServiceWorker();
                      });
        });
});
