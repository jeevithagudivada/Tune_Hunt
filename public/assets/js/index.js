$(document).ready(function() {

  // import view port library function
  jQuery.extend(verge);

  // smooth scrolling of viewport to target
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 900);
  });

  $('#down').click(function() {
    $('html,body').animate({
      scrollTop: $('#about').offset().top - 50
    }, 900);
  });

  var currentTime = new Date();
  var year = currentTime.getFullYear();

  
  // add listener to all the cards for click flipping
  function addListener() {
    var cards = document.querySelectorAll(".card.effect_click");

    for (var i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener("click", function() {
        this.classList.toggle("flipped");
      });
    }
  }

  // create, populate and show portfolio project cards
  function showProjectCards() {
    var html = '';

    projectData.forEach(function(project) {
      html += '<div class="col-sm-6 col-md-4">';
      html += '<div class="card effect_click"><div class="card_front">';
      html += '<figure><img class="img-responsive" src="' + project.image[0] + '">';
      html += '<figcaption class="project-title">';
      html += project.title;
      html += '</figcaption></figure></div>';

      html += '<div class="card_back"><figure>';
      html += '<div class="project-title">' + project.title + '</div>';
      html += '<figcaption">';
      html += '<div class="project-body">' + project.text + '</div>';
      html += '<div><a data-toggle="tooltip" title="' + project.site[0][0] + '" data-placement="top" href="' + project.site[0][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' + project.site[0][1] + '" aria-hidden="true"></i></a>';

      if (typeof project.site[1] !== 'undefined') {
        html += '<a data-toggle="tooltip" title="' + project.site[1][0] + '" data-placement="top" href="' + project.site[1][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' + project.site[1][1] + '" aria-hidden="true"></i></a>';
      }

      html += '</div></figcaption></figure></div>';
      html += '</div>';
      html += '</div>';
    });

    $('#theProjects').append(html);
    addListener();
  }

  showProjectCards();
  $(".copyright").append("<span>© " + year + "");

  // turn on bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

});

var acAnimated = {Plugins: {}};
acAnimated.Plugins.AddObjects = function(element, noteSchema) {
  for (var i=0; i<=10-1; i++) { //set count in css too for number of elements
    var note = document.createElement("div");
    note.className = "note note" + String(i + 1);
    note.innerHTML = noteSchema;
    element.appendChild(note);
  }
}
acAnimated.Plugins.AddObjects(document.body.querySelector(".flying-notes"), document.body.querySelector(".note-schema").innerHTML);

// data for the portfolio cards front and back
  var projectData = [{
      title: 'Pop',
      text: '<p>Pop developed among the black community of the Southern US.<br> This can be called a classical version of blue music.</p>',

      image: ['http://image.shutterstock.com/display_pic_with_logo/4427560/515538502/stock-vector-pop-music-text-art-colorful-calligraphy-happy-illustration-funny-notes-and-vynil-music-sound-515538502.jpg'],
      site: [
        ['Music Site', 'fa-link', 'http://playlists.net/playlists/pop']
      ]
    }, {
      title: 'Jazz',
      text: '<p>Jazz developed among the black community of the Southern US.<br> This can be called a classical version of blue music.<br> Jazz is often performed by ensembles. </p>',
      image: ['https://image.freepik.com/free-vector/jazz-music-elements_23-2147492185.jpg'],
      site: [
 
		['Music Site', 'fa-link', 'http://playlists.net/playlists/jazz']
      ]
    }, {
      title: 'Disco',
      text: '<p>Disco developed among the black community of the Southern US.<br> This can be called a classical version of blue music.</p>',

      image: ['https://image.freepik.com/free-vector/disco-music_23-2147516466.jpg'],
      site: [
        ['Music Site', 'fa-link', 'http://playlists.net/playlists/disco']
      ]
    }, {
      title: 'Rock',
      text: '<p>Rock developed among the black community of the Southern US.<br> This can be called a classical version of blue music.</p>',

      image: ['http://lifeisreallybeautiful.com/wp-content/uploads/2010/08/Rock_Music.jpg'],
      site: [
        ['Music Site', 'fa-link', 'http://playlists.net/playlists/rock']
      ]
    }, {
      title: 'Classical',
      text: '<p>Classical music developed among the black community of the Southern US.<br> This can be called a classical version of blue music.</p>',

      image: ['https://www.brandcrowd.com/gallery/brands/pictures/picture14244450995668.png'],
      site: [
        ['Music Site', 'fa-link', 'http://playlists.net/playlists/classical']
      ]
    },
   
    {
      title: 'Electro Music',
      text: '<p>Electro music developed among the black community of the Southern US.<br> This can be called a classical version of blue music.</p>',
      image: ['https://lh3.ggpht.com/WhUeP4y-eH-8tADcsC21QT2Y-zNC04oRufNQUCXGhRIezAg2zMYjp9liIwusGRGLpts=w300'],
      site: [
        ['Music Site', 'fa-link', 'http://playlists.net/electronic-music']
      ]
    }, 
  ];
  
var Player = function() {

  var ui = {
    holder: {
      holder: '.player__holder',
      flippedClass: 'player__holder--flipped'
    },
    cover: {
      cover: '.player__cover',
      errorClass: 'player__cover--error',
      openClass: 'player__cover--open'
    },
    list: {
      list: '.player__list',
      openClass: 'player__list--open'
    },
    tracks: {
      list: '.tracks__list',
      track: '.tracks__track',
      activeClass: 'tracks__track--active'
    },
    options: {
      random: '.options__btn--random',
      playlist: '.options__btn--playlist',
      activeClass: 'options__btn--active'
    },
    info: {
      title: '.player__title',
      artist: '.player__artist'
    },
    progressBarHolder: '.player__progressbar-holder',
    progressBar: '.player__progressbar',
    controls: {
      prev: '.controls__btn--prev',
      next: '.controls__btn--next',
      play: {
        playPause: '.controls__btn--play-pause',
        playIconClass: 'fa-play',
        pauseIconClass: 'fa-pause'
      }
    }
  };

  var songs = {};
  var song = new Audio();
  var songIndex = 0;
  var maxSongIndex = 0;
  var trackPositions = [];
  var songTimer = {};
  var history = [];
  var isPlaying = false;
  var isShuffle = false;

  var getRandomInt = function(min, max, exclude) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === exclude) ? getRandomInt(min, max, exclude) : num;
  };

  $.fn.filterByData = function(prop, val) {
    return this.filter(
      function() {
        return $(this).data(prop) == val;
      }
    );
  };

  var growProgressbar = function(songCurrentTime) {
    $(ui.progressBar).css('width', songCurrentTime * 100 / song.duration + '%');
  };

  var switchPlayPause = function() {
    var removeClass = isPlaying ? ui.controls.play.playIconClass : ui.controls.play.pauseIconClass;
    var addClass = isPlaying ? ui.controls.play.pauseIconClass : ui.controls.play.playIconClass;
    $(ui.controls.play.playPause)
      .find('i')
      .addClass(addClass)
      .removeClass(removeClass);
  };

  var loadSongs = function(tracks) {
    songs = tracks;
    maxSongIndex = songs.length - 1;
    var trackList = '';
    for (var i = 0; i < songs.length; i++) {
      trackList += '<li data-index="' + i + '" class="tracks__track"><h3 class="tracks__title">' + songs[i].title + '</h3><h4 class="tracks__artist">' + songs[i].artist + '</h4></li>';
    }
    $(ui.tracks.list).html(trackList);
    $(ui.tracks.track).each(function() {
      trackPositions.push($(this).position().top);
    });
  }

  var setSong = function() {
    song.src = songs[songIndex].source;
    $(ui.cover.cover).css('background-image', 'url(' + songs[songIndex].cover + ')');
    $(ui.info.title).html(songs[songIndex].title);
    $(ui.info.artist).html(songs[songIndex].artist);
  };

  var scrub = function(percentageOfTheSong) {
    song.currentTime = percentageOfTheSong * song.duration / 100;
    play();
  };

  var play = function() {
    $(ui.cover.cover).removeClass(ui.cover.errorClass);
    $(ui.tracks.track)
      .removeClass(ui.tracks.activeClass)
      .filterByData('index', songIndex)
      .addClass(ui.tracks.activeClass);
    $(ui.list.list).animate({
      scrollTop: trackPositions[songIndex]
    }, 500);
    song.play();
    songTimer = setInterval(function() {
      growProgressbar(song.currentTime);
    }, 100);
    isPlaying = true;
    switchPlayPause();
  };

  var pause = function() {
    song.pause();
    clearInterval(songTimer);
    isPlaying = false;
    switchPlayPause();
  };

  var prev = function() {
    history.pop();
    if (history.length) {
      songIndex = history[history.length - 1];
    } else {
      songIndex = songIndex > 0 ? songIndex - 1 : maxSongIndex;
    }
    switchSong();
  };

  var next = function() {
    if (isShuffle) {
      songIndex = getRandomInt(0, maxSongIndex, songIndex);
    } else {
      songIndex = songIndex < maxSongIndex ? songIndex + 1 : 0;
    }
    switchSong();
  };

  var switchSong = function() {
    clearInterval(songTimer);
    growProgressbar(0);
    setSong();
    play();
    saveSongAsPlayed();
  };

  var saveSongAsPlayed = function() {
    if (history[history.length - 1] !== songIndex) {
      history.push(songIndex);
    }
  };

  $(ui.controls.play.playPause).on('click', function() {
    if (isPlaying) {
      pause();
      return;
    }
    play();
  });

  $(ui.controls.prev).on('click', function() {
    prev();
  });

  $(document).on('click', ui.tracks.track, function() {
    songIndex = $(this).data('index');
    switchSong();
  });

  $(ui.controls.next).on('click', function() {
    next();
  });

  $(ui.options.random).on('click', function() {
    $(this).toggleClass(ui.options.activeClass);
    isShuffle = !isShuffle;
  });

  $(ui.options.playlist).on('click', function() {
    $(ui.holder.holder).toggleClass(ui.holder.flippedClass);
  });

  $(ui.progressBarHolder).on('click', function(event) {
    scrub((event.pageX - $(this).offset().left) * 100 / $(this).width());
  });

  song.onended = function() {
    next();
  };

  song.onerror = function() {
    $(ui.cover.cover).addClass(ui.cover.errorClass);
  };

  return {
    init: function(tracks) {
      loadSongs(tracks);
      setSong();
    }
  }

}();

var tracks = [{
  "title": "Aerodynamic",
  "artist": "Daft Punk",
  "source": "http://cdn-preview-f.deezer.com/stream/f3e8e90f2b7e02cdb399a4a08bd9dfcf-4.mp3",
  "cover": "http://cdn-images.deezer.com/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg"
}, {
  "title": "All Of Me",
  "artist": "John Legend",
  "source": "http://cdn-preview-6.deezer.com/stream/6e20cbc33130d53ce852564fcdc38f26-2.mp3",
  "cover": "http://cdn-images.deezer.com/images/artist/fae928da9dc017f55aab29d63273a30e/500x500-000000-80-0-0.jpg"
}, {
  "title": "Skyfall",
  "artist": "Adele",
  "source": "http://cdn-preview-7.deezer.com/stream/734b8578401225b70801da88cee2bd4e-4.mp3",
  "cover": "http://cdn-images.deezer.com/images/artist/22c83631d238c4e21800a75a79c54c61/500x500-000000-80-0-0.jpg"
}, {
  "title": "Civilization",
  "artist": "Justice",
  "source": "http://cdn-preview-5.deezer.com/stream/54dae4f699850e25a9c7e721b8e04006-2.mp3",
  "cover": "http://cdn-images.deezer.com/images/artist/46773214a3a3e074822aa2c5b489619d/500x500-000000-80-0-0.jpg"
}, {
  "title": "Elastic Heart",
  "artist": "Sia",
  "source": "http://cdn-preview-3.deezer.com/stream/3cba73091283ba8e3a431270e293a713-1.mp3",
  "cover": "http://e-cdn-images.deezer.com/images/artist/15899685d14010a641b1fbb4fb960f98/500x500-000000-80-0-0.jpg"
}, {
  "title": "Can't Feel My Face",
  "artist": "The Weeknd",
  "source": "http://cdn-preview-8.deezer.com/stream/8aa90807a77b15889b7af63a1a191880-0.mp3",
  "cover": "http://cdn-images.deezer.com/images/artist/f7f0229f30d4455077fec80abba15583/500x500-000000-80-0-0.jpg"
}];

Player.init(tracks);

/*===========*/
var app = angular.module('plunkr', [])
  app.controller('UploadController', function($scope, fileReader) {
    $scope.imageSrc = "";
    
    $scope.$on("fileProgress", function(e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });
  });




  app.directive("ngFileSelect", function(fileReader, $timeout) {
    return {
      scope: {
        ngModel: '='
      },
      link: function($scope, el) {
        function getFile(file) {
          fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
              $timeout(function() {
                $scope.ngModel = result;
              });
            });
        }

        el.bind("change", function(e) {
          var file = (e.srcElement || e.target).files[0];
          getFile(file);
        });
      }
    };
  });

app.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function(reader, scope) {
    return function(event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function(deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function(file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});