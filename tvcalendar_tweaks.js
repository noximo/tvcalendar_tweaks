// ==UserScript==
// @name         TVCalendar tweaks
// @namespace    http://tampermonkey.net/
// @version      0.2
// @author       Noximo
// @match        http://www.pogdesign.co.uk/cat/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/noximo/tvcalendar_tweaks/master/tvcalendar_tweaks.js
// ==/UserScript==

(function() {
    'use strict';

    var days = document.querySelectorAll(".day, .today, .day strong, .today strong, .month_name");
    for (var i = 0; i < days.length; i++) {
        days[i].style.backgroundImage = 'none';
        days[i].style.borderRadius = 0;
        days[i].style.boxShadow = 'none';
    }

    var lastep = document.querySelectorAll(".lastep, .firstep, .vfirstep");
    for (var i = 0; i < lastep.length; i++) {
        lastep[i].style.boxShadow = 'none';
        lastep[i].style.border = 'none';
    }

    var epName = document.querySelectorAll("#month_box p > :first-child");
    for (var i = 0; i < epName.length; i++) {
        epName[i].style.fontSize = '1.6em';
    }

    var ep = document.querySelectorAll("#month_box .ep");
    for (var i = 0; i < epName.length; i++) {
        epName[i].style.fontSize = '1.6em';
    }

    var today = document.querySelector(".today");
    today.style.backgroundImage = 'none';
    today.style.backgroundColor = "rgb(255, 165, 0)";

    var bckgrnd = document.querySelector("#tvcalendar");
    bckgrnd.style.backgroundImage = 'none';
    bckgrnd.style.backgroundColor = "#0f3c5a";

    var replace = document.querySelector(".replace");
    replace.style.display = 'none';

    $('#month_box .ep p').each(function(){
        var _this = $(this);
        var text = _this.children("a:first-child").text() + " " + $(this).children("a:nth-child(2)").text();
        text = encodeURIComponent(text).replace("!", "");
        var div = $("<div class='pirates'/>");
        _this.append(div);
        div.append("<a target='_blank' href='https://kat.cr/usearch/" + text + "%20category%3Atv/?field=seeders&sorder=desc'>KST</a>");
        div.append("<a target='_blank' href='https://torrentbytes.net/browse.php?search=" + text + "'>TB</a>");
        //div.append("<a target='_blank' href='https://uloz.to/hledej?q=" + text + "'>Uloz.to</a>");
    });

    var pirates = document.querySelectorAll(".pirates > a");
    for (var i = 0; i < pirates.length; i++) {
        pirates[i].style.display = 'inline';
        pirates[i].style.marginRight = '3px';
    }

    $('html, body').animate({
        scrollTop: $(".today").offset().top - 70
    }, 500);


})();
