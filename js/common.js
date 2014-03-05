;(function($)
{
	/**
	 * @name $.fn.colorit
	 * @constructor
	 * @param {Object} [settings] 配置参数
	 * @param {String} [settings.color='red'] 字体颜色
	 * @param {String} [settings.font-family='Microsoft YaHei'] 字体
	 * @param {String} [settings.font-size='15px'] 字体大小
	 * @returns {*}
	 */
	$.fn.colorit = function (settings)
	{
		var defaults = {
			'color': 'red',
			'font-family':'Microsoft YaHei',
			'font-size': '15px'
		},
		opts = $.extend(defaults, settings);

		return this.each(function()
		{
			var ci = new ColorIt($(this), opts);
			ci.render();
		});


	}
	/**
	 * 构造函数
	 * @param obj
	 * @param settings
	 * @constructor
     */
    function ColorIt(obj, settings)
    {
    	this._obj = obj;
    	this._color = settings.color;
    	this._fontSize = settings['font-size'];
        this._fontFamily = settings['font-family'];
    }

    /**
     * 渲染元素
     * @name render
     * @constructor
     * @return {ColorIt}
     */
    ColorIt.prototype.render = function()
    {
    	this._obj.css({
    		"color":this._color,
            'font-family':this._fontFamily,
            'font-size':this._fontSize
    	});
    	return this;
    }

})(jQuery);


