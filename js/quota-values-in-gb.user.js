// ==UserScript==
// @name         WebArena - Quota values in GB
// @namespace    https://github.com/rinopo/webarena-user-js
// @version      1.0.0
// @description  Default quota value to GB instead of MB.
// @author       rinopo
// @match        https://manager.mail.arena.ne.jp/*/Site_Manager/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @icon         http://web.arena.ne.jp/favicon.ico
// ==/UserScript==

$.noConflict();
jQuery( document ).ready(function( $ ) {
    'use strict';

    // GBをデフォルトにする。
    $('input[value=GB]').click();

    // 値を GB に変換する。
    const quota_mb = $('input[name=QUOTA]').val();
    const quota_gb = quota_mb / 1024;
    $('input[name=QUOTA]').val(quota_gb);
});
