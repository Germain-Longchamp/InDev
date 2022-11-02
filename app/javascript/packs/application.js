require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//= require jquery
//= require jquery-ui
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .

import $ from 'jquery';
global.$ = jQuery;

import "../scripts/main.js"
import "../scripts/create-account.js"
import "../scripts/clients-index.js"