/**
* Header
* - Logo
* - Nav Items
*Body
* - Search
* - RestaurantContainer
*     - RestaurantCard
*       - Img
*       - Name of Res, Start Rating, Cuisines, Delivery time
* Footer
* - Copyright
* - Links
* - Address
* - Contact 
**/

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/9fd7ab9744a09e8f0c91acba9799f08e" />
      </div>
      <div className="navContainer">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
        <li>Contact Us</li>
      </ul>
    </div>
    </div>

  )
}

const restList = [
  {
    "info": {
      "id": "671928",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
      "locality": "7th Block",
      "areaName": "Koramangla",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "2.9K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "93741",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/093195b9-ad73-4879-960a-f2f29ecaac2f_93741.jpg",
      "locality": "The Nexus Mall",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "2",
      "avgRatingString": "4.0",
      "totalRatingsString": "7.2K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 05:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/subway-the-nexus-mall-koramangala-rest93741",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "99K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 06:55:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "4.0K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "613421",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_613421.JPG",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.8",
      "totalRatingsString": "188",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-30 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-6th-block-koramangala-rest613421",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "621512",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
      "locality": "K.H.B Colony",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "2233",
      "avgRatingString": "4.6",
      "totalRatingsString": "1.7K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-k-h-b-colony-koramangala-rest621512",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "307",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "gxe4mn4ubw70yx3flyar",
      "locality": "BTM Layout",
      "areaName": "Btm Layout",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.5",
      "totalRatingsString": "74K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-30 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                }
              },
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-btm-layout-rest307",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.5,
      "parentId": "371281",
      "avgRatingString": "4.5",
      "totalRatingsString": "52K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.4",
          "ratingCount": "3.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "711368",
      "name": "Salad Days",
      "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
      "locality": "BTM Layout",
      "areaName": "HSR",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Salads"
      ],
      "avgRating": 4.5,
      "parentId": "796",
      "avgRatingString": "4.5",
      "totalRatingsString": "3.4K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/salad-days-btm-layout-hsr-rest711368",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "375041",
      "name": "Andhra Gunpowder",
      "cloudinaryImageId": "byilgyrcfz690ryoasww",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.5,
      "parentId": "10496",
      "avgRatingString": "4.5",
      "totalRatingsString": "5.2K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Andhra.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Andhra.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-6th-block-koramangala-rest375041",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "643665",
      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/8162aab2-4ccd-431e-8163-ad18749b95f5_643665.JPG",
      "locality": "Patel Narayana Reddy Layout",
      "areaName": "Ejipura",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Keto",
        "Snacks"
      ],
      "avgRating": 4.6,
      "parentId": "355285",
      "avgRatingString": "4.6",
      "totalRatingsString": "335",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-patel-narayana-reddy-layout-ejipura-rest643665",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "750225",
      "name": "Daily Kitchen - Homely Meals",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
      "locality": "6TH BLOCK",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Home Food",
        "Indian",
        "North Indian",
        "Thalis"
      ],
      "avgRating": 4.3,
      "parentId": "444382",
      "avgRatingString": "4.3",
      "totalRatingsString": "362",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "10-20 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-6th-block-koramangala-rest750225",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "717421",
      "name": "Paris Panini - Gourmet Sandwiches & Wraps",
      "cloudinaryImageId": "c27da4b0bab4ca71460bdf082cf58ad4",
      "locality": "BTM Layout",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Continental",
        "Pastas",
        "Salads",
        "Desserts",
        "Snacks",
        "Fast Food",
        "French"
      ],
      "avgRating": 4.6,
      "parentId": "21019",
      "avgRatingString": "4.6",
      "totalRatingsString": "2.7K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-30 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-rest717421",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108097",
      "name": "Ambur Star Briyani Since 1890",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Chettinad",
        "Andhra",
        "Beverages",
        "Seafood"
      ],
      "avgRating": 4.5,
      "parentId": "21400",
      "avgRatingString": "4.5",
      "totalRatingsString": "20K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/ambur-star-briyani-since-1890-2nd-stage-btm-layout-rest108097",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "10820",
      "name": "California Burrito",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food"
      ],
      "avgRating": 4.6,
      "parentId": "1252",
      "avgRatingString": "4.6",
      "totalRatingsString": "40K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "2.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/california-burrito-koramangala-rest10820",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "426776",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/059c1c9b-6e04-475a-8aba-1cba2e61953f_426776.jpg",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Beverages"
      ],
      "avgRating": 4.7,
      "parentId": "1040",
      "avgRatingString": "4.7",
      "totalRatingsString": "5.3K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-30 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/theobroma-7th-block-koramangala-rest426776",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23678",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "62K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 04:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "158855",
      "name": "Candice's Gourmet Sandwiches & Wraps",
      "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Salads",
        "sandwich",
        "Snacks"
      ],
      "avgRating": 4.6,
      "parentId": "465403",
      "avgRatingString": "4.6",
      "totalRatingsString": "3.7K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-30 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-rest158855",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "255801",
      "name": "Great Indian Khichdi by EatFit",
      "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "319582",
      "avgRatingString": "4.5",
      "totalRatingsString": "4.1K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/great-indian-khichdi-by-eatfit-6th-block-koramangala-rest255801",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "558763",
      "name": "HRX by EatFit",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/27b3c3e0-1215-45b8-9807-81ea0ea98b0a_558763.jpg",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Burgers"
      ],
      "avgRating": 4.5,
      "parentId": "335529",
      "avgRatingString": "4.5",
      "totalRatingsString": "574",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/hrx-by-eatfit-6th-block-koramangala-rest558763",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "18973",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.3,
      "parentId": "2120",
      "avgRatingString": "4.3",
      "totalRatingsString": "36K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Biryani.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "8.0K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
      "type": "WEBLINK"
    }
  }
]
const RestaurantCard = (props) => {
  const {restData} = props
  console.log({restData})
  return (
    <div className="restCard">
    <img className="restImg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${restData.info.cloudinaryImageId}`}/>
    <h5 className="restName">{restData.info.name}</h5>
    <h5 className="cuisines">{restData.info.cuisines.join(", ")}</h5>
    <h5 className="costFor2">{restData.info.costForTwo}</h5>
    <h5 className="avgRating">{restData.info.avgRating} stars</h5>
    <h5 className="deliveryTime">{restData.info.sla.deliveryTime} minutes</h5>
    </div>
  )
}
const BodyComponent = () => {
  return (
    <div className="bodyContainer">
      <div className="searchConatiner">
        <label>Search</label><input type="text" className="searchBox"/>
      </div>
      <div className="restConatiner">
        {
          restList.map(rest=><RestaurantCard key={rest.info.id} restData={rest}/>)
        }
      </div>
    </div>
  )
}

const MainComponent = () => {
return (
  <div className="main">
    <HeaderComponent/>
    <BodyComponent/>
  </div>
)
}

root.render(<MainComponent/>)