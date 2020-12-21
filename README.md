# AngularGooglePlaces

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build google-reviews` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Publish

```
cd angular-google-places
ng build google-reviews --prod
cd dist/google-reviews
npm login
npm publish --access=public
```

## Package Usage

See [projects/google-reviews/README.md](projects/google-reviews/README.md)

# Prerequisites

* The following line must exist in your root `index.html` file, with a valid `API_KEY`

```
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=API_KEY"></script>
```

**NOTE**: Google now requires the API be attached to a billing account, and have the following permissions:
- Google Maps JavaScript API
- Google Maps Geocoding API
- Google Maps Places API

Example

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>The Infinity Group</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
  <!-- Requires the following APIs: JavaScript API, Geocoding API, and Places API -->
  <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=API_KEY"></script>
</head>
<body class="mat-typography">
  <app-root></app-root>
</body>
</html>
```