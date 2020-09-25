# Loading Google Map In Angular 10 Applications

<br/>

![header image](https://github.com/imchandanys/google_map_in_angular10_app/blob/master/docs/GoogleMapInAngular.PNG)

Requirement:
  1. Angular 10.
  2. Google API key to load google map without watermark. We can get Google API key from <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Here.</a>

<br/>

Steps:
  1. Install Google Map package using <b>npm install @angular/google-maps</b>.
  2. Import GoogleMapsModule  in <b>app.module.ts</b>
  3. In <b>index.html</b>, If you have google API key, then add the first script or else add the second one.
  ```
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
  ```
  ```
  <script src="https://maps.googleapis.com/maps/api/js"></script>
  ``` 
  4. In your componet just add,
  ```
  <google-map></google-map>
  ```

  That's it. The google map will load. For rest other functions like loading Marker, setting the current Position and all go through the repository.
  
  For more information, we can go through <a href="https://timdeschryver.dev/blog/google-maps-as-an-angular-component" target="_blank">Google Maps is now an Angular component.</a>
