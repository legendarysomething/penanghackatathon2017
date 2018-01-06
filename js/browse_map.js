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
            <ul class="list-inline rating">
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
            </ul>
            <div class="iw-subTitle">{desc}</div>
                <a href="details.php?{id}" class="btn btn-primary">&nbsp; Get Details &nbsp;</a>
            </div>
            <div class="iw-bottom-gradient"></div>
        </div>
    </div>`;

    // img/listing/listing1.jpg
    // id=1
    var oc_content = []
    oc_content[0] = popupcontent.replace("{url}", "img/listing/listing1.jpg");
    oc_content[0] = oc_content[0].replace("{id}", "id=1");
    oc_content[0] = oc_content[0].replace("{desc}", "Shaded parking spot in KJ");

    oc_content[1] = popupcontent.replace("{url}", "img/listing/listing2.jpg");
    oc_content[1] = oc_content[1].replace("{id}", "id=2");
    oc_content[1] = oc_content[1].replace("{desc}", "Gated & shaded parking");

    oc_content[2] = popupcontent.replace("{url}", "img/listing/listing3.jpg");
    oc_content[2] = oc_content[2].replace("{id}", "id=3");
    oc_content[2] = oc_content[2].replace("{desc}", "Car porch parking");

    oc_content[3] = popupcontent.replace("{url}", "img/listing/listing4.jpg");
    oc_content[3] = oc_content[3].replace("{id}", "id=4");
    oc_content[3] = oc_content[3].replace("{desc}", "2 spot parking in Kelana");

    oc_content[4] = popupcontent.replace("{url}", "img/listing/listing5.jpg");
    oc_content[4] = oc_content[4].replace("{id}", "id=5");
    oc_content[4] = oc_content[4].replace("{desc}", "Kelana Jaya parking (outside)");
    
    oc_content[5] = popupcontent.replace("{url}", "img/listing/listing6.png");
    oc_content[5] = oc_content[5].replace("{id}", "id=6");
    oc_content[5] = oc_content[5].replace("{desc}", "1 Spot Outside Parking in Kelana");

    oc_content[6] = popupcontent.replace("{url}", "img/listing/listing7.jpg");
    oc_content[6] = oc_content[6].replace("{id}", "id=7");
    oc_content[6] = oc_content[6].replace("{desc}", "Shaded 1 spot parking");

    oc_content[7] = popupcontent.replace("{url}", "img/listing/listing8.jpg");
    oc_content[7] = oc_content[7].replace("{id}", "id=8");
    oc_content[7] = oc_content[7].replace("{desc}", "1 Spot Outside Parking In Kelana");


    console.log(oc_content);



    var locations = [
          ['Park Spot 1', 3.113902, 101.604686, 1],
          ['Park Spot 2', 3.111301, 101.604076, 2],
          ['Park Spot 3', 3.113706, 101.608417, 3],
          ['Park Spot 4', 3.114803, 101.603876, 4],
          ['Park Spot 5', 3.110667, 101.602123, 5],
          ['Park Spot 6', 3.107341, 101.601948, 6],
          ['Park Spot 7', 3.108250, 101.605663, 7],
          ['Park Spot 8', 3.110857, 101.608510, 8],
          // ['Park Spot 9', 3.119435, 101.611363, 9],
          // ['Park Spot 10', 3.116634, 101.600531, 10]
        ];

    var center = {lat: 3.113902, lng: 101.604686};

    


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map, 
            icon: "img/parking.png",
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

    marker = new google.maps.Marker({
            position: new google.maps.LatLng(3.113902, 101.604686),
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
