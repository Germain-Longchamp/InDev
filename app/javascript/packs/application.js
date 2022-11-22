require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//= require jquery
//= require jquery-ui
//= require jquery.turbolinks
//= require jquery_ujs

import $ from 'jquery';
global.$ = jQuery;
import "chosen-js"

require("scripts/main")
require("scripts/cookies")
require("scripts/panel")
require("scripts/create-account")
require("scripts/clients-index")
