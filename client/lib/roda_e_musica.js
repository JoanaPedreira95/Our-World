/**
 * Created by joaopedreira on 18/06/2017.
 */
intervalRodaMusica = null;
mediaRodaMusica = null;

rodaMusica = (audioSelector,rodarSelector,totalTime) => {

        var audioElement = audioSelector ? document.getElementById(audioSelector) : null;
        var $rodar = $(rodarSelector);
        var rotation = 0;
        var timeRemaining = totalTime;
        var rotationAngle = 1;
        var timePerCycle = (rotationAngle * totalTime / 360);
        if(audioElement) {
            mediaRodaMusica = Meteor.isCordova && new Media(`/android_asset/www/application/app/${audioElement.src.slice(audioElement.src.indexOf('audio'))}`);
            //mediaRodaMusica = Meteor.isCordova && new Media(audioElement.src);
        } else {
            mediaRodaMusica = null;
        }

        /**
         * Play media
         * @param action: 'play' or 'stop'
         */
        let mediaPlay = (action) => {
            if(['play','stop'].indexOf(action) > -1) {
                if(mediaRodaMusica) {
                    mediaRodaMusica[action]();
                } else {
                    if(audioElement) {
                        if(action === 'stop') {
                            audioElement && audioElement.pause();
                        } else {
                            audioElement && audioElement[action]();
                        }
                    }
                }
            }
        };

        mediaPlay('play');

        jQuery.fn.rotate = function(degrees) {
            $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                '-moz-transform' : 'rotate('+ degrees +'deg)',
                '-ms-transform' : 'rotate('+ degrees +'deg)',
                'transform' : 'rotate('+ degrees +'deg)'});
        };

        $rodar.click(function() {
            rotation += rotationAngle;
            $(this).rotate(-rotation);
        });

        intervalRodaMusica = Meteor.setInterval(function() {
            $rodar.trigger('click');
            //console.log(timeRemaining);
            timeRemaining -= timePerCycle;
            if((timeRemaining !== 'undefined') && timeRemaining <= 0) {
                Meteor.clearInterval(intervalRodaMusica);
                Meteor.isCordova && mediaRodaMusica.release();
                rodaMusica(audioSelector,rodarSelector,totalTime);
                // timeRemaining = totalTime;
                // mediaPlay('stop');
                // Meteor.setTimeout(() => {
                //     mediaPlay('play');
                // },1000);
            }
        }, timePerCycle  * 1000)
};

