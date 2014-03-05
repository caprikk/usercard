/*+--------------------------------------+
* 名称: 用户小卡片
* developer: kk
* Email: capri19910730@gmail.com
* Date: 2014-03-04
* Version: v.1.0
*+--------------------------------------+*/

;(function($)
{
	var usercardTimer;
	$.fn.userCard = function (settings)
	{
		var defaults = {
			'id': '01',
			'name': '用户名',
			'introduce': '个人介绍!',
			'follow': '300',
			'fans': '100',
			'url': 'github.com',
			'imgUrl': 'img/user.png'
		},

		opts = $.extend(defaults, settings);

		$(document).on('mouseover', '.user-card', function ()
	    {
	        clearTimeout(usercardTimer);
	        
	        $(this).show();
	    });
	    
	    $(document).on('mouseout', '.user-card', function ()
	    {
	        $(this).hide();
	    });

		return this.each(function()
		{
			var usercard = new UserCard($(this), opts);
			$(this).bind({
				mouseover: function()
				{
					clearTimeout(usercardTimer);
					$('#ajax-box').html('').append(usercard.render());
					$('.user-card').fadeIn();
				},

				mouseout: function()
				{
					usercardTimer = setTimeout(function ()
					{
						$('.user-card').fadeOut();
					}, 300);
				}
			});
		});
	}

	function UserCard(obj, settings, callback)
	{
		this._obj = obj;
		this._settings = settings;
	}

	UserCard.prototype.render = function()
	{
		var obj = this._obj,
			left = obj.offset().left,
			top = obj.offset().top,
			template = 
			'<div class="mod user-card">'+
				'<div class="mod-head">'+
					'<a href="' + this._settings.url + '">'+
						'<img src="'+ this._settings.imgUrl +'" alt="" />'+
					'</a>'+
					'<p class="title">'+
						'<a href="' + this._settings.url + '" data-id="' + this._settings.id + '">' + this._settings.name + '</a>'+
					'</p>'+
					'<p>' + this._settings.introduce + '</p>'+
				'</div>'+
				'<div class="mod-body">'+
					'<p>'+
						'<span>关注: <em class="txt-green">' + this._settings.follow + '</em></span>'+
						'<span>粉丝: <em class="txt-orange">' + this._settings.fans + '</em></span>'+
					'</p>'+
				'</div>'+
				'<div class="mod-footer">'+
					'<span class="pull-right">'+
						'<a href="javascript:;">私信</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;">问Ta</a>'+
					'</span>'+
					'<a class="btn btn-sm btn-info">关注</a>'+
				'</div>'+
			'</div>';

		//判断小卡片右边溢出情况
		if (left + parseInt($(template).css('width')) > $(window).width())
		{
			left = left - parseInt($(template).css('width')) + parseInt($(obj).css('width'));
		}

		//判断小卡片下边溢出情况
		if (top + parseInt($(template).css('height')) > $(window).height())
		{
			top = top - parseInt($(template).css('height'));
		}
		else
		{
			top += 20;
		}

		template = $(template).css({
			'left': left,
			'top': top
		});

		return template;
	}

})(jQuery);


