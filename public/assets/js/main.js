'use strict';
$(window).load(function() {
	$('.loader')
		.delay(500)
		.fadeOut('slow');
});
$(document).ready(function() {
	'use strict';
	var wow = new WOW({ animateClass: 'animated', offset: 10, mobile: true });
	wow.init();
	$(window).on('scroll', function() {
		if ($(window).scrollTop() < 100) {
			$('.header').removeClass('sticky_header');
		} else {
			$('.header').addClass('sticky_header');
		}
	});
	$('.counter').counterUp({ delay: 5, time: 3000 });
	$('.countdown').countdown('2019/03/30', function(event) {
		$(this).html(
			event.strftime(
				'<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>'
			)
		);
	});
	$('.cover_slider').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: false,
		dots: true,
		nav: false,
		items: 1,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dotsContainer: '.cover_dots'
	});
	$('.brand_carousel').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 450,
		autoplayHoverPause: false,
		dots: false,
		nav: false,
		responsiveClass: true,
		responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 5 } },
		items: 5
	});
	var waypoints = $('.progress_container').waypoint(
		function() {
			$('.progress .progress-bar').progressbar({
				transition_delay: 1000
			});
		},
		{ offset: '50%' }
	);
	var map = $('#map');
	if (map.length > 0) {
		google.maps.event.addDomListener(window, 'load', init);
		var lattuide = map.attr('data-lat');
		var longtuided = map.attr('data-lon');
	}
	function init() {
		var mapOptions = {
			zoom: 16,
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			center: new google.maps.LatLng(lattuide, longtuided),
			styles: [
				{
					featureType: 'water',
					stylers: [
						{ saturation: 43 },
						{ lightness: -11 },
						{ hue: '#0088ff' }
					]
				},
				{
					featureType: 'road',
					elementType: 'geometry.fill',
					stylers: [
						{ hue: '#ff0000' },
						{ saturation: -100 },
						{ lightness: 99 }
					]
				},
				{
					featureType: 'road',
					elementType: 'geometry.stroke',
					stylers: [{ color: '#808080' }, { lightness: 54 }]
				},
				{
					featureType: 'landscape.man_made',
					elementType: 'geometry.fill',
					stylers: [{ color: '#ece2d9' }]
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry.fill',
					stylers: [{ color: '#ccdca1' }]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [{ color: '#767676' }]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.stroke',
					stylers: [{ color: '#ffffff' }]
				},
				{ featureType: 'poi', stylers: [{ visibility: 'off' }] },
				{
					featureType: 'landscape.natural',
					elementType: 'geometry.fill',
					stylers: [{ visibility: 'on' }, { color: '#b8cb93' }]
				},
				{ featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
				{
					featureType: 'poi.sports_complex',
					stylers: [{ visibility: 'on' }]
				},
				{ featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
				{
					featureType: 'poi.business',
					stylers: [{ visibility: 'simplified' }]
				}
			]
		};
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lattuide, longtuided),
			map: map,
			title: 'SLAC 2019'
		});
	}
});

// ParticlesJS Config.
particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 80,
		"density": {
		  "enable": true,
		  "value_area": 700
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
	  },
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "grab"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 140,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });