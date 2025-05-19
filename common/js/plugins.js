(function($) {
    /*****************************************************************
    *		$.ChangeFontSize
    /****************************************************************/
    $.fn.ChangeFontSize = function(opts) {
        var opts = $.extend({
                        content: this,
                        max_value: 0,
                        zoom_value: 0,
                        cookie_name: ''
                    }, opts);
    
        var $content = (opts.content == this) ? $(this) : $(this).find(opts.content);
        var max_value = opts.max_value;
        var zoom_value = opts.zoom_value;
    
        return this.each(function() {
            var default_font = $content.css('font-size');
    
            // Default Font Size
            $('#df').on('click keyup', function(ev) {
                if( (ev.type == 'click') || ((ev.type == 'keyup') && (ev.keyCode == 13)) ) {
                    $content.css('font-size', default_font);
                    $('body').trigger('SetTitleLineOver');
                }
                return false;
            });
    
            // Zoom Font Size
            $('#zf').on('click keyup', function(ev) {
                if( (ev.type == 'click') || ((ev.type == 'keyup') && (ev.keyCode == 13)) ) {
                    var zoom_font = Math.floor($content.css('font-size').replace(/px/, ''));
                    if( (zoom_font != max_value) && (zoom_font < max_value) ) {
                        zoom_font += zoom_value;
                        $content.css('font-size', zoom_font + 'px');
                        $('body').trigger('SetTitleLineOver');
                    }
                }
                return false;
            });
        });
    };
    /*****************************************************************
    *		$.TopOfPage
    /****************************************************************/
    $.fn.TopOfPage = function(opts) {
        var opts = $.extend({
                        content: this,
                        speed: 500,
                        easing: 'swing'
                    }, opts);
    
        var $content = (opts.content == this) ? $(this) : $(this).find(opts.content);
        var speed = opts.speed;
        var easing = opts.easing;
    
        return $content.each(function() {
            $(this).on('click',function(ev) {
                ev.preventDefault();
    
                var targetTop = 0;
                if( typeof $(this).attr('href') != 'undefined' ) {
                    var target = $(this).attr('href').split('#')[1];
                    var targetOffset = $('#' + target).offset();
                    if( typeof targetOffset != 'undefined' ) {
                        targetTop = targetOffset.top;
                    }
                }
                $('html, body').animate({scrollTop:targetTop}, speed, easing);
    
                return false;
            });
        });
    };
    })(jQuery);