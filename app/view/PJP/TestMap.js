Ext.define('Jumawax.view.PJP.TestMap', {
    extend: 'Ext.Container',
    requires: ['Ext.Map'],
    xtype: 'testMap',
 
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'map',
                id: 'geomap',
                mapOptions: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 10
                }
                // useCurrentLocation: true
            }
        ]
    },
 
    initialize: function(){
        var me = this;
        me.callParent(arguments);
        this.initMap();
    },
 
    initMap: function(){
 
        var mapPanel = this.down('map');
        var gMap = mapPanel.getMap();
        var markers = [];
        var infoWindow = null;
 
        var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
        panoramioLayer.setMap(gMap); 

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        
        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: true,
            frequency: '10000',

            listeners: {
                locationupdate: function (geo) {        
                    var center = new google.maps.LatLng(geo.getLatitude(), geo.getLongitude());
                    var storePos = new google.maps.LatLng(-6.2610147,107.0581644);
                    // Ext.getCmp('geomap').setData(center);
                    // var center = new google.maps.LatLng(-7.275973, 112.808304);
                    // mapPanel.update(center);
                    directionsDisplay.setMap(gMap);

                    // clearMarkers();
                    // addMarker(center);

                    // if (infoWindow) {
                    //     infoWindow.close();
                    // }
                    // addInfoWindow(center);

                    calculateAndDisplayRoute(center, storePos);
                },

                locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {

                    if (bTimeout) {
                        alert('Timeout occurred.');
                    } 
                    else {
                        alert('Error occurred.');
                    }
                }                
            }
        });

        function addMarker(location) {
            var marker = new google.maps.Marker({
              position: location,
              map: gMap,
              animation: google.maps.Animation.DROP
            });
            markers.push(marker);
        };

        function setMapOnAll(map) {
            for (var i = 0; i < markers.length; i++) {
              markers[i].setMap(map);
            }
        };

        // Removes the markers from the map, but keeps them in the array.
        function clearMarkers() {
            setMapOnAll(null);
        };

        function addInfoWindow(position){
            infoWindow = new google.maps.InfoWindow;
            infoWindow.setPosition(position);
            infoWindow.setContent('New latitude: '+ position.lat());
            infoWindow.open(gMap);
        };

        function calculateAndDisplayRoute(currPos, destPos) {
                    console.log(currPos);
            directionsService.route({
              origin: currPos,
              destination: destPos,
              travelMode: 'DRIVING'
            }, function(response, status) {
              if (status === 'OK') {
                directionsDisplay.setDirections(response);
              } else {
                window.alert('Directions request failed due to ' + status);
              }
            });
        }

    }
});



