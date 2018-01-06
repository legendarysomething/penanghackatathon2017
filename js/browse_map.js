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
                <a href="details.php?{id}" class="btn btn-warning">&nbsp;Art Info &nbsp;</a>
            </div>
            <div class="iw-bottom-gradient"></div>
        </div>
    </div>`;

    // img/listing/listing1.jpg
    // id=1
    var oc_content = []
    oc_content[0] = popupcontent.replace("{url}", "img/index/thumbnail_1.png");
    oc_content[0] = oc_content[0].replace("{id}", "id=1");
    oc_content[0] = oc_content[0].replace("{desc}", "Little Children on a Bicycle <br><small>Experience lorum</small>");

    oc_content[1] = popupcontent.replace("{url}", "img/listing/thumbnail_2.jpg");
    oc_content[1] = oc_content[1].replace("{id}", "id=2");
    oc_content[1] = oc_content[1].replace("{desc}", "Little Children on a Bicycle <br><small>Experience lorum</small>");

    oc_content[2] = popupcontent.replace("{url}", "img/listing/thumbnail_1.jpg");
    oc_content[2] = oc_content[2].replace("{id}", "id=3");
    oc_content[2] = oc_content[2].replace("{desc}", "Little Children on a Bicycle <br><small>Experience lorum</small>");

    oc_content[3] = popupcontent.replace("{url}", "img/listing/thumbnail_1.jpg");
    oc_content[3] = oc_content[3].replace("{id}", "id=4");
    oc_content[3] = oc_content[3].replace("{desc}", "Little Children on a Bicycle <br><small>Experience lorum</small>");



    var locations = [
          ['Park Spot 1', 5.414670, 100.338246, 1], // Little children on a bicycle
          ['Park Spot 2', 3.111301, 101.604076, 2], 
          ['Park Spot 3', 3.113706, 101.608417, 3],
          ['Park Spot 4', 3.114803, 101.603876, 4]
        ];

    var center = {lat: 5.405154, lng: 100.321736}; // Penang

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
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
