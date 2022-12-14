/**
 * ViewImage.min.js 1.3.1
 * https://tokinx.github.io/ViewImage/
 */
(function(a){a.extend({viewImage:function(c){var b=a.extend({target:".view-image img",exclude:"",delay:300},c);a(b.exclude).attr("view-image",!1);a(b.target).off().on("click",function(e){var f=e.target.src,d=e.target.href,c=".vi-"+Math.random().toString(36).substr(2);if(!a(this).attr("view-image")&&!a(this).is(b.exclude)&&(f||d&&d.match(/.+\.(jpg|jpeg|webp|gif|png)/gi)))return a("body").append("<style class='view-image-css'>.view-img{position:fixed;background:#fff;background:rgba(255,255,255,.92);width:100%;height:100%;top:0;left:0;text-align:center;padding:2%;z-index:999;cursor: zoom-out}.view-img img,.view-img span{max-width:100%;max-height:100%;position:relative;top:50%;transform: translateY(-50%);}.view-img img{animation:view-img-show .8s -0.1s ease-in-out}.view-img span{height:2em;color:#AAB2BD;overflow:hidden;position:absolute;top:50%;left:0;right:0;width:120px;text-align:center;margin:-1em auto;}.view-img span:after{content:'';position:absolute;bottom:0;left:0;transform: translateX(-100%);width:100%;height:2px;background:#3274ff;animation:view-img-load .8s -0.1s ease-in-out infinite;}@keyframes view-img-load{0%{transform: translateX(-100%);}100%{transform: translateX(100%);}}@keyframes view-img-show{0%{opacity:0;}100%{opacity:1;}}</style><div class='view-img'><span>loading...</span></div>"),
        setTimeout(function(){var b=new Image;b.src=f||d;b.onload=function(){a(".view-img").html('<img src="'+b.src+'"  alt="ViewImage">')};a(".view-img").off().on("click",function(){a(".view-image-css").remove();a(this).remove()});a(c).html()},b.delay),!1})}})})(jQuery);


/*! Lazy Load 2.0.0-rc.2 - MIT license - Copyright 2007-2019 Mika Tuupola */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});

	$.fn.serializeObject = function() {
		  var o = {};
		  var a = this.serializeArray();
		  $.each(a, function() {
			  if (o[this.name] !== undefined) {
				  if (!o[this.name].push) {
					  o[this.name] = [o[this.name]];
				  }
				  o[this.name].push(this.value || '');
			  } else {
				  o[this.name] = this.value || '';
			  }
		  });
		  return o;
	};
	
	(function () {
				window.TpComment = {
					dom : function (id) {
						return document.getElementById(id);
					},
				
					create : function (tag, attr) {
						var el = document.createElement(tag);
					
						for (var key in attr) {
							el.setAttribute(key, attr[key]);
						}
					
						return el;
					},

					reply : function (id,cid,nickname) {
						var comment = this.dom(id), parent = comment.parentNode,
							response = this.dom('respond-post'),pid = document.getElementById("pid"),poster = document.getElementById("author"),
							form = 'form' == response.tagName ? response : response.getElementsByTagName('form')[0],
							textarea = response.getElementsByTagName('textarea')[0];
							response.style.display = 'block';

						pid.setAttribute('value', cid);
						poster.setAttribute('value', nickname);					

						if (null == this.dom('comment-form-place-holder')) {
							var holder = this.create('div', {
								'id' : 'comment-form-place-holder'
							});

							response.parentNode.insertBefore(holder, response);
						}

						comment.appendChild(response);
						
						this.dom('cancel-comment-reply-link').style.display = '';

						if (null != textarea && 'text' == textarea.name) {
							textarea.focus();
						}

						return false;
					},
					
					cancelReply : function () {
						var response = this.dom('respond-post'),
						holder = this.dom('comment-form-place-holder'),pid = document.getElementById("pid"),poster = document.getElementById("author");

						pid.setAttribute('value',0);
						poster.setAttribute('value','');

						if (null == holder) {
							return true;
						}

						this.dom('cancel-comment-reply-link').style.display = 'none';
						holder.parentNode.insertBefore(response, holder);
						return false;
					},
					
					twreply : function (cid, coid,nickname) {
						var comment = this.dom(cid), parent = comment.parentNode,
							response = this.dom('respond-tw'), tid = this.dom('tid'), poster = this.dom('poster'),
							form = 'form' == response.tagName ? response : response.getElementsByTagName('form')[0],
							textarea = response.getElementsByTagName('textarea')[0];
							response.style.display = 'block';
							
						if (null == tid) {
							tid = this.create('input', {
								'type' : 'hidden',
								'name' : 'tid',
								'id'   : 'tid'
							});

							form.appendChild(tid);
						}

						tid.setAttribute('value', coid);
						
						if (null == poster) {
							poster = this.create('input', {
								'type' : 'hidden',
								'name' : 'poster',
								'id'   : 'poster'
							});

							form.appendChild(poster);
						}

						poster.setAttribute('value', nickname);

						if (null == this.dom('comment-form-place-holder')) {
							var holder = this.create('div', {
								'id' : 'comment-form-place-holder'
							});

							response.parentNode.insertBefore(holder, response);
						}

						comment.appendChild(response);
						
						this.dom('cancel-comment-reply-link').style.display = '';

						if (null != textarea && 'text' == textarea.name) {
							textarea.focus();
						}

						return false;
					},

					cancelTw : function () {
						var response = this.dom('respond-tw'),
						holder = this.dom('comment-form-place-holder'), tid = this.dom('tid');

						if (null != tid) {
							tid.parentNode.removeChild(tid);
						}

						if (null == holder) {
							return true;
						}

						this.dom('cancel-comment-reply-link').style.display = 'none';
						holder.parentNode.insertBefore(response, holder);
						response.style.display = 'none';
						return false;
					}
				};
			})();
			
			
	layui.use(['layer', 'element'], function(){
		var $ = layui.$,
		layer = layui.layer,
		element = layui.element;
		$(".nav-btn").on('click', function(){
			$('.nav-btn dl').toggleClass('layui-show');
		});
	
	/*????????????*/
	$.viewImage({
                    'target'  : '.text img,.mylife img',
                    'exclude' : '.readerswall img,.t-p img',
                   'delay'   : 300
               });	
	
	
	/*????????????*/
	$('img.lazy').lazyload({effect:'fadeIn'});	


	/*??????*/
	$(".dot-good").click(function () {
			if ($(this).hasClass('done')) {
			   $(this).removeClass('done');
			var id = $(this).data("id"), 
			herf = $(this).data("herf"), 
			rateHolder = $(this).children('.count');
			var ajax_data = {
				id: id,
				t:Math.random()
			};
			$.post(herf, ajax_data, 
			function(data) {
				$(rateHolder).html(data);
			});
			return false;
		 } else {
			$(this).addClass('done');
			var id = $(this).data("id"), 
			herf = $(this).data("herf"), 
			rateHolder = $(this).children('.count');
			var ajax_data = {
				id: id,
				t:Math.random()
			};
			$.post(herf, ajax_data, 
			function(data) {
				$(rateHolder).html(data);
			});
			return false;
		}
	})


	/*??????*/
	$(".js-ajax-submit").click(function() {
		var $btn = $(".js-ajax-submit");
        var $form = $(".js-ajax-form");
		var formObject=$form.serializeObject();
        $.ajax({
            url: $btn.data('action') ? $btn.data('action') : $form.attr('action'), 
            dataType: 'json',
            data: formObject,
            type: "post",
			beforeSend: function(arr, $form, options) {
                $btn.data("?????????", true);
                var text = $btn.text();
                $btn.addClass('disabled');
            },
            success: function(data, statusText, xhr) {
				var text = $btn.text();
                $btn.removeClass('disabled');
                if (data.code === 1) {
							layer.alert(data.msg, {
								skin:'lyear-skin-dark',
							});
							//window.location.reload(true);
							layer.close();//???????????????	  
				}else if (data.code ===0) {
							layer.msg(data.msg);
							setTimeout(function(){
							window.location.reload(true);		
					}, 1000);						
                } else{
  					layer.alert(data.msg, {
								skin:'lyear-skin-dark',
							});
                    $btn.removeProp('disabled').removeClass('disabled');
                }
            },
			error: function(xhr, e, statusText) {
                layer.alert(statusText);
            },
            complete: function() {
                $btn.data("?????????", false);
            }
        });
   });

	/*????????????*/
	$(".js-ajax").click(function() {
		var $btn = $(".js-ajax");
		var id = $(this).data("tid");
        var $form = $(".js-ajax-form");
		var formObject=$form.serializeObject();
        $.ajax({
            url: $btn.data('action') ? $btn.data('action') : $form.attr('action'), 
            dataType: 'json',
            data: formObject,
            type: "post",
            success: function(data, statusText, xhr) {
                if (data.code === 0) {
						$("#respond").removeClass().addClass("respond_hide cf");
					   		$("#description").val('');
							$("#sitename").val("");
							$("#siteurl").val("");
							$("#sitepic").val("");
							layer.alert(data.msg, {
								skin:'lyear-skin-dark',
							});
							layer.close();                                
					} else{
  							layer.alert(data.msg, {
								skin:'lyear-skin-dark',
							});
                }
            },
			error: function(xhr, e, statusText) {
                layer.alert(statusText);
            },
            complete: function() {
                $btn.data("?????????", false);
            }
        });
   });


	/*??????*/
	$(".js-ajax-button").click(function() {
			var $btn = $(".js-ajax-button");
			var $form = $(".js-ajax-form");
			var formObject=$form.serializeObject();
			$.ajax({
				url: $btn.data('action') ? $btn.data('action') : $form.attr('action'), 
				dataType: 'json',
				data: formObject,
				type: "post",
				beforeSend: function(arr, $form, options) {
					$btn.data("?????????", true);
					var text = $btn.text();
					$btn.addClass('disabled');
				},
				success: function(data, statusText, xhr) {
					var text = $btn.text();
					$btn.removeClass('disabled');
					if (data.code === 1) {
								layer.alert(data.msg, {
									skin:'lyear-skin-dark',
								});
								//window.location.reload(true);
								layer.close();//???????????????	  
					}else if (data.code ===0) {
			 // step 1 ajax ????????????????????? id
				var comment_id = data.comment_id; //?????????????????????????????????????????????????????????
				layer.msg(data.msg, {
					time: 1000 //???????????? 1???
				}, function () {
					// step 2
					//???????????? url:
					var base = window.location.protocol + '//' + window.location.host + window.location.pathname;
					// https://qq.md/post/4444444444

					// step 3  // ????????? get ??????
					var search = window.location.search;
					if (search.length > 0) {
						base += search;
					} // https://qq.md?xxx=333&xxx=4444

					// step 4
					// '#comment-' + comment_id ?????????????????????<div id="#comment-4444"></div>
					// comment_id = ajax ????????????????????? id
					// ??????????????? => https://qq.md?xxx=111&xxx=2222#comment-4444

					window.location.href = base+ '?' + Math.ceil(Math.random()*10) + '#comment-' + comment_id   //????????????

				});	
				
					} else{
						layer.alert(data.msg, {
									skin:'lyear-skin-dark',
								});
						$btn.removeProp('disabled').removeClass('disabled');
					}
				},
				error: function(xhr, e, statusText) {
					layer.alert(statusText);
				},
				complete: function() {
					$btn.data("?????????", false);
				}
				
			});
			
	   });


	/*??????*/
	$('.js-loginout').on('click', function (e) {
                e.preventDefault();
                var $_this = this,
                    $this = $($_this),
                    href = $this.data('href'),
                    msg = $this.data('msg');
					href = href?href:$this.attr('href');
					layer.confirm(msg, {
							btn: ['??????', '??????'] //??????
							}, function(index){
									$.post(href,function(data){
									if (data.code == 0) {
										if(data.url){
												layer.msg(data.msg, {
												icon: 'success',
												time: 2000,
												});
												location.href = data.url;
												layer.close(index);//???????????????										
                                            }else{		
												layer.msg(data.msg, {
												icon: 'success',
												time: 2000,
												});										
												reloadPage(window); 
												layer.close(index);
                                            }
									} else{
												layer.msg(data.msg, {
												icon: 'cry',
												time: 2000,
												});
									}
								},"json");	
							}, function(index){
								layer.close(index);
							});
							return false;

				});

	$(function(){
        var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if( $(this).scrollTop() > offset_opacity ) { 
                $back_to_top.addClass('cd-fade-out');
            }
        });
        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
        });
    });

	/*???????????????*/
	$(function(){
            var tips;
            $('.comment-body .comment-user-img,.comment-body-sub .comment-user-img').on({
                mouseenter:function(){
                    var that = this;
					var user =$(this).data("usesr"), os = $(this).data("os"), br = $(this).data("browers"), last = $(this).data("last");
                    tips =layer.tips("<div class='card'><div class='card__contacts'><div class='card__info'><table><tr><td class='l-grey'>??????</td><td class='pl-md'>"+user+"</td></tr><tr><td class='l-grey'>????????????</td><td class='pl-md'>"+os+"</td> </tr><tr><td class='l-grey'>???????????????</td><td class='pl-md'>"+br+"</td></tr><tr><td class='l-grey'>????????????</td><td class='pl-md'>"+last+"</td></tr></table></div></div></div>",that,{tips:[2,'#656D78'],time:0,area: 'auto',maxWidth:300});
                },
                mouseleave:function(){
                    layer.close(tips);
                }
            });
        });



    /*????????????tips*/
    $(".link div a").mouseover(function(e) {
        if ($.trim(this.title) != '') {
            this.Title = this.title;
            this.title = "";
            layer.tips(this.Title, this, {tips: 3});
        }
		}).mouseout(function() {
			if (this.Title != null) {
				this.title = this.Title;
			}
		});




		
	});


document.addEventListener('DOMContentLoaded', function(){
   var aluContainer = document.querySelector('.comment-smilies');
    if ( !aluContainer ) return;
    aluContainer.addEventListener('click',function(e){
    var myField,
        _self = e.target.dataset.smilies ? e.target : e.target.parentNode;
        if ( typeof _self.dataset.smilies == 'undefined' ) return;
        var tag = ' ' + _self.dataset.smilies + ' ';
        if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') {
            myField = document.getElementById('comment')
        } else {
            return false
        }
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = tag;
            myField.focus()
        } else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            var cursorPos = endPos;
            myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length);
            cursorPos += tag.length;
            myField.focus();
            myField.selectionStart = cursorPos;
            myField.selectionEnd = cursorPos
        } else {
            myField.value += tag;
            myField.focus()
        }
    });
 });

	/*??????*/
	function dot_good(tid){
		
			if ($('#likes-'+tid).hasClass('done')) {
			   $('#likes-'+tid).removeClass('done');
			var herf = $('#likes-'+tid).data("herf"), 
			rateHolder = $('#likes-'+tid).children('.count');
			var ajax_data = {
				id: tid,
				t:Math.random()
			};
			$.post(herf, ajax_data, 
			function(data) {
				$(rateHolder).html(data);
			});
			return false;
		 } else {
			$('#likes-'+tid).addClass('done');
			var herf = $('#likes-'+tid).data("herf"), 
			rateHolder = $('#likes-'+tid).children('.count');
			var ajax_data = {
				id: tid,
				t:Math.random()
			};
			$.post(herf, ajax_data, 
			function(data) {
				$(rateHolder).html(data);
			});
			return false;
		}
	};

