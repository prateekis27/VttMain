import { Component, OnInit } from '@angular/core';
import {} from 'google.maps';
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent implements OnInit {
  // map: google.maps.Map;
  // center: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: google.maps.MapTypeId.ROADMAP,
  //   scrollwheel: false,
  //   disableDefaultUI: true,
  //   disableDoubleClickZoom: true,
  //   zoom: 16,

  // };

  constructor() {}

  ngOnInit(): void {
    // navigator.geolocation.getCurrentPosition(position => {

    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //   };

    //   this.map = new google.maps.Map(document.getElementById('map'), {
    //     ...this.options,
    //     center: this.center
    //   });

    // });

    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 17.0423, lng: 81.811 },
      zoom: 15,
      mapTypeId: 'satellite',
      // heading: 90,
      // tilt: 45,
    });

    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.RECTANGLE,
        ],
      },
      markerOptions: {
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      },
      circleOptions: {
        fillColor: '#ffff00',
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1,
      },
    });
    drawingManager.setMap(map);
  }
}
