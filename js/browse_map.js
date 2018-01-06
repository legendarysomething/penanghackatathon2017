function initMap() {


    var styledMapType = new google.maps.StyledMapType(
        [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{   
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#46bcec"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#2196f3"
            }]
        }],
        {name: 'Styled Map'});

    // Content for onclick
    var popupcontent = `
    <div class="infobox-close">
        <i class="fa fa-close"></i>
    </div>
    <div id="iw-container" style="background-image: url({url});">
        <div class="iw-content">
            <div class="iw-subTitle">{desc}</div>
                <a href="details.php?{id}" class="btn btn-primary">&nbsp;Experience &nbsp;</a>
                <a href="/penanghackatathon2017/art_info.php" class="btn btn-warning">&nbsp;Art Info &nbsp;</a>
            </div>
            <div class="iw-bottom-gradient"></div>
        </div>
    </div>`;

     // Content for onclick
    var popupcontent_no_story = `
    <div class="infobox-close">
        <i class="fa fa-close"></i>
    </div>
    <div id="iw-container" style="background-image: url({url});">
        <div class="iw-content">
            <div class="iw-subTitle">
                {desc}
            </div>
                <a href="/penanghackatathon2017/art_info.php" class="btn btn-warning">&nbsp;Art Info &nbsp;</a>
            </div>
            <div class="iw-bottom-gradient"></div>
        </div>
    </div>`;

    // img/listing/listing1.jpg
    // id=1
    var oc_content = []
    oc_content[0] = popupcontent.replace("{url}", "img/index/thumbnail_1.png");
    oc_content[0] = oc_content[0].replace("{id}", "id=1");
    oc_content[0] = oc_content[0].replace("{desc}", "Little Children on a Bicycle <br><small>Two children stumble upon a bike when nobody seemed to be around...</small>");


    var oc_content_no_story = []
    oc_content_no_story[0] = popupcontent_no_story.replace("{url}", "img/index/thumbnail_3.png");
    oc_content_no_story[0] = oc_content_no_story[0].replace("{id}", "id=1");
    oc_content_no_story[0] = oc_content_no_story[0].replace("{desc}", "Brother and Sister on a Swing<br><br><br>");



    var locations = [
          ['Little Children on a bicycle', 5.414670, 100.338246, 1], // Little children on a bicycle
          // ['Bruce Lee Would Never Do This', 5.41553,  100.33907,  2], // Burce Lee kicking a cat
        ];

    var locations_nostory = [
          ['Little Children on a bicycle', 5.4142437,100.3405795, 2], // Brother and sister on swing
        ];

    var center = {lat: 5.405154, lng: 100.321736}; // Penang

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map, 
            icon: "img/near_me/story_alert.png",
            title: "Click for more info"

        });

        (function(marker, i) {
            // add click event
            google.maps.event.addListener(marker, 'click', function() {
                infowindow = new google.maps.InfoWindow({
                    content: oc_content[i]
                    // content: popupcontent
                });
                infowindow.open(map, marker);
            });
        })(marker, i);
      }

      // 

      for (i = 0; i < locations_nostory.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations_nostory[i][1], locations_nostory[i][2]),
            map: map, 
            icon: "img/near_me/map_pin_no_story.png",
            title: "Click for more info"

        });

        (function(marker, i) {
            // add click event
            google.maps.event.addListener(marker, 'click', function() {
                infowindow = new google.maps.InfoWindow({
                    content: oc_content_no_story[i]
                    // content: popupcontent
                });
                infowindow.open(map, marker);
            });
        })(marker, i);
      }

    // YOUR location
    marker = new google.maps.Marker({
            position: new google.maps.LatLng(5.405154, 100.321736),
            map: map, 
            // icon: "img/parking.png",
            title: "You Are Here"

        });

    

    // marker.addListener('click', function() {
    //   infowindow.open(map, marker);
    //   alert('test');
    // });



    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

   
}
