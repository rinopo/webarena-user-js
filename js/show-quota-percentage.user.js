// ==UserScript==
// @name         WebArena - Show quota in percentage
// @namespace    https://github.com/rinopo/webarena-user-js
// @version      0.0.1
// @description  Show quota in percentage.
// @author       rinopo
// @match        https://manager.mail.arena.ne.jp/*/Site_Manager/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @icon         http://web.arena.ne.jp/favicon.ico
// ==/UserScript==

$.noConflict();
jQuery( document ).ready(function( $ ) {
  'use strict';

  // 各行ごとに処理。
  $('#usrList tr').each(function(){

    // 「使用量」を取得。
    var used = $(this).children('td:nth-of-type(3)').text().replace(/\(MB\)/,'');
    // 「容量」を取得。
    var quota = $(this).children('td:nth-of-type(4)').text().replace(/\(MB\)/,'');

    // パーセント値を算出。
    var percentage = Math.round((used / quota)*100);

    // パーセント値を表示する列を追加。
    $(this).children('th:nth-of-type(4)').after('<th style="white-space: nowrap;">使用率</th>');
    $(this).children('td:nth-of-type(4)').after('<td class="right">' + percentage + '%</td>');

    // パーセント値が高い場合、背景色を設定。
    var color;
    if ( percentage >= 70) {
      color = "#ffc";
    }
    if ( percentage >= 80) {
      color = "#fcc";
    }
    if ( percentage >= 99) {
      color = "#f66";
    }
    $(this).css("background-color", color);

  });

});
