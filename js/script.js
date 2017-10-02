$(document).ready(function () {

    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    var brandLink = $('#brand');
    var pageTop = $('#page-top');
    var navLinks = $('.nav-link');
    var offerSection = $('#offer');
    var techSection = $('#tech');
    var portfolioSection = $('#portfolio');
    var contactSection = $('#contact');
    var moreBtn = $('.more-button');

    brandLink.click(() => {
        $('html, body').animate({
            scrollTop: pageTop.offset().top
        }, 500);
    });

    navLinks.eq(0).click(() => {
        $('html, body').animate({
            scrollTop: pageTop.offset().top
        }, 500);
    });

    navLinks.eq(1).click(() => {
        $('html, body').animate({
            scrollTop: (offerSection.offset().top - 50)
        }, 500);
    });

    navLinks.eq(2).click(() => {
        $('html, body').animate({
            scrollTop: (techSection.offset().top - 60)
        }, 500);
    });

    navLinks.eq(3).click(() => {
        $('html, body').animate({
            scrollTop: (portfolioSection.offset().top - 50)
        }, 500);
    });

    navLinks.eq(4).click(() => {
        $('html, body').animate({
            scrollTop: (contactSection.offset().top - 50)
        }, 500);
    });

    moreBtn.click(() => {
        $('html, body').animate({
            scrollTop: (offerSection.offset().top - 50)
        }, 500);
    });


    // ------------ jQuery SVG 3D Tag Cloud Plugin --------------- //
    var entries = [

        {
            label: 'HTML5',
            url: 'https://en.wikipedia.org/wiki/HTML5',
            target: '_top'
        },
        {
            label: 'CSS3',
            url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
            target: '_top'
        },
        {
            label: 'Bootstrap',
            url: 'http://getbootstrap.com/',
            target: '_top'
        },
        {
            label: 'SASS',
            url: 'http://sass-lang.com/',
            target: '_top'
        },
        {
            label: 'JavaScript',
            url: 'https://en.wikipedia.org/wiki/JavaScript',
            target: '_top'
        },
        {
            label: 'JQuery',
            url: 'https://jquery.com/',
            target: '_top'
        },
        {
            label: 'Angular 4',
            url: 'https://angular.io/',
            target: '_top'
        },
        {
            label: 'WordPress',
            url: 'https://pl.wordpress.org/',
            target: '_top'
        },
        {
            label: 'WooCommerce',
            url: 'https://woocommerce.com/',
            target: '_top'
        },
        {
            label: 'PHP',
            url: 'https://en.wikipedia.org/wiki/PHP',
            target: '_top'
        },
        {
            label: 'RWD',
            url: 'https://en.wikipedia.org/wiki/Responsive_web_design',
            target: '_top'
        },
        {
            label: 'GitHub',
            url: 'https://github.com/',
            target: '_top'
        },
        {
            label: 'Git',
            url: 'https://en.wikipedia.org/wiki/Git',
            target: '_top'
        },
        {
            label: 'Gimp',
            url: 'https://www.gimp.org/',
            target: '_top'
        }        

    ];

    var settings = {

        entries: entries,
        width: 640,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'rgba(1, 1, 1, 0)',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal', //bold
        fontStyle: 'normal', //italic 
        fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#tag-cloud').svg3DTagCloud(settings);

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
    // ------------ jQuery SVG 3D Tag Cloud Plugin --------------- //


});