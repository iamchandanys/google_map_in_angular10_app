import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui';

  latitude: number;
  longitude: number;
  markers = [];
  zoom = 12;
  center: google.maps.LatLngLiteral;

  constructor() {
    this.initializeMap();
  }

  ngOnInit() { }

  initializeMap() {
    //Getting current Latitude & Longitude
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      //Setting marker to center
      this.center = {
        lat: this.latitude,
        lng: this.longitude,
      }

      //Adding marker as per Lat & Long
      this.addMarker();
    });
  }

  addMarker() {
    this.markers.push({
      position: { //Sets the latitude & Longitude
        lat: this.latitude,
        lng: this.longitude,
      },
      label: { //The label on the marker
        color: 'white',
        text: 'A',
      },
      title: 'Sets the title, visible on hover', //Sets the title when we hover on marker
      options: {
        mapTypeId: 'roadmap', 
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        maxZoom: 15,
        minZoom: 8,
        draggable: true,
        animation: google.maps.Animation.DROP
      },
    })
  }

  onMapDrag(event: google.maps.MouseEvent) {
    this.latitude = event.latLng.lat();
    this.longitude =  event.latLng.lng();
  }
}
