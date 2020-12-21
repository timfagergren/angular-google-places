import { Component, OnInit, Input } from '@angular/core';
import { google } from '@google/maps';

declare var $:any;
declare var google: any;

@Component({
  selector: 'lib-google-reviews',
  templateUrl: './google-reviews.component.html',
  styleUrls: ['./google-reviews.component.sass']
})
export class GoogleReviewsComponent implements OnInit {

  public reviews: any = [];

  @Input() place_id: string;
  @Input() review_count: number = 3; // Must be between 0 and 5

  // These can be updated to anything, examples see: https://icons.getbootstrap.com/
  private star_graphic_active: any = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>'
  private star_graphic_inactive: any = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>'

  constructor() { }

  ngOnInit(): void {
    console.log(this.place_id);
    this.getReviews((reviews) => {
      /**
       * TODO: Context/Scope issues getting the call back to render via {{ }} in the html page
       *  so adding manually
       */
      document.getElementById('google-reviews').innerHTML = ""
      for (let i = 0; i < reviews.length && i < this.review_count; i++){
        let stars = this.renderStars(reviews[i]['rating']);
        document.getElementById('google-reviews').innerHTML += " \
          <div class='review-item col'> \
              " + stars + " \
              <p class='review-text'>\"" + reviews[i]['text'] + "\"</p> \
              <div class='review-meta'> \
                  <span class='review-author'>-" + reviews[i]['author_name'] +" \
                  <span class='review-date'></span> \
              </div> \
          </div>";
      }
    });
  }

  renderStars(rating){
    var stars = "<div class='review-stars'><ul class='review-stars-ul'>";
    // fill in solid stars
    for (var i = 0; i < rating; i++) {
      stars = stars + "<li>" + this.star_graphic_active + "</li>";
    };

    // fill in empty stars
    if(rating < 5){
      for (var i = 0; i < (5 - rating); i++) {
        stars = stars + "<li>" + this.star_graphic_inactive + "</li>";
      };
    }
    stars = stars+"</ul></div>";
    return stars;
  }

  getReviews(callback) {
    let request = {
      placeId: this.place_id
    };

    let map = new google.maps.Map(document.getElementById("map-temporary"));
    let service = new google.maps.places.PlacesService(map);
  
    service.getDetails(request, (place, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        callback(place["reviews"]);
      }
    });
  }

}
