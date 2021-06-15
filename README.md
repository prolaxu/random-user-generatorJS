
## Random User Generator

This project is build with pure js ,css and html which fatch data from api.


  
## API Reference

#### Get all items

```http
  GET https://randomuser.me/api/
```
Example Response:
#### Note:[ This response changes every time get request is made ]
```
{
   "results":[
      {
         "gender":"female",
         "name":{
            "title":"Ms",
            "first":"Amalie",
            "last":"Johansen"
         },
         "location":{
            "street":{
               "number":337,
               "name":"Frederikssundsvej"
            },
            "city":"Agerbæk",
            "state":"Danmark",
            "country":"Denmark",
            "postcode":37320,
            "coordinates":{
               "latitude":"-28.5430",
               "longitude":"153.2749"
            },
            "timezone":{
               "offset":"-10:00",
               "description":"Hawaii"
            }
         },
         "email":"amalie.johansen@example.com",
         "login":{
            "uuid":"04e10301-4840-4f11-97d4-3601d720eec4",
            "username":"brownduck439",
            "password":"sting",
            "salt":"Fqb0he2E",
            "md5":"48f4d80cda3fde6af524dcd59fd603ac",
            "sha1":"a9773ca1f3e5a9907bf9e2174efddde9ba826e2b",
            "sha256":"0636a5799b72b7b68d2d8ca75a874cf3b30d906a51c5026a87d8075ee4a2baac"
         },
         "dob":{
            "date":"1945-10-10T17:46:50.880Z",
            "age":76
         },
         "registered":{
            "date":"2004-01-28T18:04:33.297Z",
            "age":17
         },
         "phone":"41098724",
         "cell":"20250313",
         "id":{
            "name":"CPR",
            "value":"101045-8937"
         },
         "picture":{
            "large":"https://randomuser.me/api/portraits/women/81.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/81.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/81.jpg"
         },
         "nat":"DK"
      }
   ],
   "info":{
      "seed":"df83b256465786c5",
      "results":1,
      "page":1,
      "version":"1.3"
   }
}
```


  

## Demo
https://prolaxu.github.io/random-user-generatorJS/

## Authors

- [@prolaxu](https://github.com/prolaxu)


  
