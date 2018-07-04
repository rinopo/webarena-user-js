// ==UserScript==
// @name         WebArena - Recommend quota values
// @namespace    https://github.com/rinopo/webarena-user-js
// @version      0.0.1
// @description  Recommend quota values.
// @author       rinopo
// @match        https://manager.mail.arena.ne.jp/*/Site_Manager/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @icon         http://web.arena.ne.jp/favicon.ico
// ==/UserScript==

$.noConflict();
jQuery( document ).ready(function( $ ) {
  'use strict';

  // 容量設定フォームに、推奨値をフィボナッチ数列で表示。
  $('input[name=QUOTA] + br').after('推奨値：1024, 2048, 3072, 5120, 8192, 13312, 21504<br>');

});
