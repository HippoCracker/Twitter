$(document).ready(function(){function a(a){if(a.files&&a.files[0]){var b=new FileReader,c=$('<div class="upload-image">'),d=$('<a class="img-close" href="#"><i class="fa fa-times"></a>');d.appendTo(c);var e=$('<img src="">');e.appendTo(c),b.onload=function(a){e.attr("src",a.target.result)},b.readAsDataURL(a.files[0]),c.appendTo("#preview")}}function b(){var a=$(".upload-image").length;a>0?$("#preview").removeClass("hide"):$("#preview").addClass("hide")}$("#nav-bar > li > a").click(function(a){$("#nav-bar > li > a").removeClass("active"),$(this).addClass("active")}),$("#nav-search").click(function(a){a.preventDefault(),$("#search-bar").removeClass("hide"),$("#nav-bar").addClass("hide"),$("#search-input").focus()}),$("#search-bar > a:first-child").click(function(a){a.preventDefault(),$("#search-bar").addClass("hide"),$("#nav-bar").removeClass("hide"),$("#search-result").addClass("hide"),$("#search-input").val("")}),$("#search-result a").click(function(a){a.preventDefault,$("#search-result").addClass("hide")}),$("#nav-more").click(function(a){a.preventDefault();var b=$("#more-options");b.hasClass("hide")?b.removeClass("hide"):(b.addClass("hide"),$(this).removeClass("active"))}),$("#more-options a").click(function(a){a.preventDefault,$("#more-options").addClass("hide")}),$("#signup-btn").click(function(a){a.preventDefault,$(".login-regist-modal").removeClass("hide"),$("#signup").addClass("is-selected"),$("#login").removeClass("is-selected"),$("#reset-password").removeClass("is-selected"),$(".switcher li:first-child a").removeClass("selected"),$(".switcher li:last-child a").addClass("selected")}),$("#login-btn").click(function(a){a.preventDefault,$(".login-regist-modal").removeClass("hide"),$("#login").addClass("is-selected"),$("#signup").removeClass("is-selected"),$("#reset-password").removeClass("is-selected"),$(".switcher li:first-child a").addClass("selected"),$(".switcher li:last-child a").removeClass("selected")}),$(".switcher li:first-child a").click(function(){event.preventDefault,$("#login").addClass("is-selected"),$("#signup").removeClass("is-selected"),$("#reset-password").removeClass("is-selected"),$(".switcher li:first-child a").addClass("selected"),$(".switcher li:last-child a").removeClass("selected")}),$(".switcher li:last-child a").click(function(){event.preventDefault,$("#login").removeClass("is-selected"),$("#signup").addClass("is-selected"),$("#reset-password").removeClass("is-selected"),$(".switcher li:last-child a").addClass("selected"),$(".switcher li:first-child a").removeClass("selected")}),$("#login .form-bottom-message a").click(function(){event.preventDefault,$("#login").removeClass("is-selected"),$("#reset-password").addClass("is-selected")}),$("#reset-password .form-bottom-message a").click(function(){event.preventDefault,$("#login").addClass("is-selected"),$("#reset-password").removeClass("is-selected")}),$("#close-form").click(function(a){a.preventDefault,$(".login-regist-modal").addClass("hide")}),$("#user-photo").click(function(a){a.preventDefault;var b=$("#user-menu");b.hasClass("hide")?b.removeClass("hide"):b.addClass("hide")}),$("#user-menu a").click(function(a){a.preventDefault,$("#user-menu").addClass("hide")}),$("#tweet-text").focus(function(){$("#counter").removeClass("hide")}),$("#tweet-text").blur(function(){$("#counter").addClass("hide")}),$("#tweet-text").keyup(function(){var a="#tweet-text".val();alert(a),$this.val().length>10&&$this.css("color","red")}),$("#tweet-pictures").change(function(){a(this),$(".img-close").click(function(a){a.preventDefault,$(this).parent().remove(),b()}),b()})});var twitterApp=angular.module("twitterApp",[]),userTweets={},followingTweets={};twitterApp.run(["$http",function(a){a.get("php/getTweets.php").success(function(a){userTweets.tweets=a})}]),twitterApp.controller("MainPageCtrl",["$scope","$http",function(a,b){a.userTweets=userTweets,$("#search-input").keyup(function(){var b=$(this).val();1==b.length&&($.get("php/SuggestKey.php").done(function(b){var c=JSON.parse(b),d=[];for(var e in c)d.push(c[e]);a.suggestKeys=d}),a.$apply(),$("#search-result").removeClass("hide")),0==b.length&&$("#search-result").addClass("hide")}),a.getError=function(a){if(angular.isDefined(a)){if(a.required)return"Please enter a value";if(a.email)return"Please enter a valid email address"}},a.login=function(a){console.log(a.email),console.log(a.password),$.post("php/login.php",{email:a.email,password:a.password}).done(function(a){alert(a)})}}]),twitterApp.controller("UserPanelCtrl",["$scope","$http",function(a,b){a.followingTweets=followingTweets}]);