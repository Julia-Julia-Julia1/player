(function ($) {
    $(document).ready(function () {

        $('.player').each(function () {


            var player = $(this),
                video = player.find('video'),
                v = video.get(0),
                play = player.find('#play'),
                start = player.find('#start'),
                progressBar = player.find('.progress'),
                progress = progressBar.find('span');


            play.on('click', function () {
                if (v.paused || v.ended) {
                    v.play();
                } else {
                    v.pause();
                }

            });


            start.on('click', function () {

                v.currentTime = 0;

            });

            video.on('play', function () {
                play.text('PAUSE');

            });


            video.on('pause ended', function () {
                play.text('PLAY');

            });



            video.on('timeupdate', function () {
                progress.css('width', (v.currentTime / v.duration * 100) + '%');

            });
            progressBar.on('click', function (e) {

                var z = e.originalEvent.pageX,
                    a = progressBar.offset().left,
                    y = progressBar.width(),
                    d = v.duration;

                v.currentTime = (z - a) / y * d;

            });

        });


    });
})(jQuery);
