# @timfagergren/google-reviews package

This angular-based npm package is intended for pulling and displaying Google Reviews for a given location


![google reviews sample](https://github-assets.progressx.us/google-reviews_sample_walmart.png)

## Prerequisites

1. Google Maps API
* The following line must exist in your root `index.html` file, with a valid `API_KEY`
    ```
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=API_KEY"></script>
    ```

    **NOTE**: Google now requires the API be attached to a billing account, and have the following permissions:
    - Google Maps JavaScript API
    - Google Maps Geocoding API
    - Google Maps Places API


2. Bootstrap
-   We're really only using the `col` class here, if you want to import just that you can; otherwise
    ```
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    ```

Example

```
<!doctype html>
<html lang="en">
<head>
  ...
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
  <!-- Requires the following APIs: JavaScript API, Geocoding API, and Places API -->
  <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=API_KEY"></script>
</head>
...
</html>
```

## Installation

1. Install package
    ```
    npm install @timfagergren/google-reviews
    ```

2. Update `app.module.ts`

    a. Add the import

    ```
    import { GoogleReviewsModule } from '@timfagergren/google-reviews'
    ```

    b. Add the module to the `imports` list

    Result should look something similar to this:

    ```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { GoogleReviewsModule } from '@timfagergren/google-reviews'

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GoogleReviewsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

# Usage

## Parameters
| Option | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `place_id` | Place ID ([find place id](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)) | string | - | true |
| `review_count` | Number of reviews to display (between 0 and 5) | integer | 3 | false |

---

&nbsp;


## Example

The following line of code:

```
<lib-google-reviews place_id="ChIJJ4SwTjGmlVQRvwFztyOyTSY" review_count=2></lib-google-reviews>
```

Yields the these results:

![google reviews sample](https://github-assets.progressx.us/google-reviews_sample_shlandscape.png)
