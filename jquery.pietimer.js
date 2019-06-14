/**
 * jQuery PieTimer Plugin v0.1
 * Authors: Kus (http://blakek.us/css3-pie-graph-timer-with-jquery/)
 *          Connor Doyle (jQuery plugin)
 *
 * http://github.com/chikamichi/jquery.pietimer
 *
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($){
  var methods = {
    init: function(options) {
      var state = {
        timer: null,
        timerSeconds: 10,
        callback: function() {},
        timerCurrent: 0,
        showPercentage: false,
        fill: false,
        color: '#CCC'
      };

      state = $.extend(state, options);

      return this.each(function() {
        var $this = $(this);
        var data = $this.data('pietimer');
        if (!data) {
          $this.addClass('pietimer');
          $this.css({fontSize: $this.width()});
          $this.data('pietimer', state);
          if (state.showPercentage) {
            $this.find('.percent').show();
          }
          if (state.fill) {
            $this.addClass('fill');
          }
          $this.pietimer('start');
        }
      });
    },

    stopWatch: function() {
      var data = $(this).data('pietimer');
      if (data) {
        var seconds = (data.timerFinish-(new Date().getTime()))/1000;
        if (seconds <= 0) {
          clearInterval(data.timer);
          $(this).pietimer('drawTimer', 100);
          data.callback();
        } else {
          var percent = 100-((seconds/(data.timerSeconds))*100);
          $(this).pietimer('drawTimer', percent);
        }
      }
    },

    drawTimer: function(percent) {
      $this = $(this);
      var data = $this.data('pietimer');
      if (data) {
        $this.html('<div class="percent"></div><div class="slice'+(percent > 50?' gt50"':'"')+'><div class="pie"></div>'+(percent > 50?'<div class="pie fill"></div>':'')+'</div>');
        var deg = 360/100*percent;
        $this.find('.slice .pie').css({
          '-moz-transform':'rotate('+deg+'deg)',
          '-webkit-transform':'rotate('+deg+'deg)',
          '-o-transform':'rotate('+deg+'deg)',
          'transform':'rotate('+deg+'deg)'
        });
        $this.find('.percent').html(Math.round(percent)+'%');
        if (data.showPercentage) {
          $this.find('.percent').show();
        }
        if ($this.hasClass('fill')) {
          $this.find('.slice .pie').css({backgroundColor: data.color});
        }
        else {
          $this.find('.slice .pie').css({borderColor: data.color});
        }
      }
    },
    
    start: function() {
      var data = $(this).data('pietimer');
      if (data) {
        data.timerFinish = new Date().getTime()+(data.timerSeconds*1000);
        $(this).pietimer('drawTimer', 0);
        data.timer = setInterval("$this.pietimer('stopWatch')", 50);
      }
    },

    reset: function() {
      var data = $(this).data('pietimer');
      if (data) {
        clearInterval(data.timer);
        $(this).pietimer('drawTimer', 0);
      }
    }
  };

  $.fn.pietimer = function(method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.pietimer');
    }
  };
})(jQuery);

/*
     FILE ARCHIVED ON 17:48:00 Jun 02, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:50:11 Jun 14, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 1299.532 (3)
  esindex: 0.008
  captures_list: 1321.535
  CDXLines.iter: 13.53 (3)
  PetaboxLoader3.datanode: 825.474 (4)
  exclusion.robots: 0.133
  exclusion.robots.policy: 0.122
  RedisCDXSource: 5.268
  PetaboxLoader3.resolve: 428.596 (2)
  load_resource: 6.119
*/
