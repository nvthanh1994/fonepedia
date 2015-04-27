## LIST API

### 1. LOGIN

```
POST http://localhost:6969/v1/api/login
Content-Type: application/json
Cache-Control: no-cache

```

##### Regex

```
{
  "username" : "admin",
  "password" : "password"
}
```

##### Return

```
{
    "error_code": 0,
    "user": {
        "id": 1,
        "username": "admin",
        "password": "$2a$08$NyDE6p1am0r8RRxLaZMoauyGEsS5J..8hyegzG916IMwEEaddm2BW"
    }
}

```


### 2. SIGNUP

```
POST http://localhost:6969/v1/api/signup
Content-Type: application/json
Cache-Control: no-cache

```

##### Regex

```
{
  "username" : "admin3",
  "password" : "password3"
}
```

##### Return

```
{
    "error_code": 0
}

```

### 3. CREATE BRAND

```
POST http://localhost:6969/v1/api/brand
Content-Type: application/json
Cache-Control: no-cache

```

##### Regex

```
{
  "brand_name" : "HTC"
}
```

##### Return

```
{
    "error_code": 0
}

```



### 4. GET ALL BRAND

```
Get http://localhost:6969/v1/api/brand

```

##### Regex

```

```

##### Return

```
{
    "error_code": 0,
    "brand": [
        {
            "id": 1,
            "brand_name": "Apple",
            "numberOfPhone": 0
        },
        {
            "id": 2,
            "brand_name": "HTC",
            "numberOfPhone": 0
        },
        {
            "id": 3,
            "brand_name": "SamSung",
            "numberOfPhone": 0
        },
        {
            "id": 4,
            "brand_name": "NOKIA",
            "numberOfPhone": 0
        }
    ]
}
```


### 5. GET BRAND BY ID

```
Get http://localhost:6969/v1/api/brand/:id

```

##### Regex

```
GET http://localhost:6969/v1/api/brand/1
```

##### Return

```
{
    "error_code": 0,
    "brand": {
        "id": 1,
        "brand_name": "Apple",
        "numberOfPhone": 0
    }
}
```


### 6. CREATE PHONE

```
Post http://localhost:6969/v1/api/phone

```

##### Regex

```
{
     "phone_name" : "iPhone5",
     "brand_id" : "1",
     "release_date" : "2014-06-05",
     "purchase_date" : "2014-07-05",
     "network" : "4G",
     "OS" : "iOs 8.3",
     "camera" : "5mp",
     "memory" : "16GB",
     "battery" : "2cell"
}
```

##### Return

```
{
    "error_code": 0
}
```

### 7. GET ALL PHONE

```
GET http://localhost:6969/v1/api/phone

```

##### Regex

```

```

##### Return

```
{
    "error_code": 0,
    "phone": [
        {
            "phone_name": "iPhone5s",
            "spes_id": 7,
            "phone_id": 5,
            "release_date": "2014-06-04T17:00:00.000Z",
            "purchase_date": "2014-07-04T17:00:00.000Z",
            "network": "4G",
            "OS": "iOs 8.3",
            "camera": "5mp",
            "memory": "32GB",
            "battery": "2cell",
            "brand_id": 2,
            "brand_name": "APPLE",
            "numberOfPhone": 1
        }
    ]
}
```

### 8. GET PHONE

```
GET http://localhost:6969/v1/api/phone/:id

```

##### Regex

```

```

##### Return

```
{
    "error_code": 0,
    "phone": [
        {
            "phone_name": "iPhone5s",
            "spes_id": 7,
            "phone_id": 5,
            "release_date": "2014-06-04T17:00:00.000Z",
            "purchase_date": "2014-07-04T17:00:00.000Z",
            "network": "4G",
            "OS": "iOs 8.3",
            "camera": "5mp",
            "memory": "32GB",
            "battery": "2cell",
            "brand_id": 2,
            "brand_name": "APPLE",
            "numberOfPhone": 1
        }
    ]
}
```


### 9. DELETE PHONE

```
DELETE http://localhost:6969/v1/api/phone/:id

```

##### Regex

```

```

##### Return

```
{
    "error_code": 0
}
```

### 10. UPDATE PHONE

```
PUT http://localhost:6969/v1/api/phone

```

##### Regex

```
{
     "phone_id" : "4",
     "spes_id" : "6",
     "phone_name" : "iPhone 6 Plus",
     "brand_id" : "2",
     "release_date" : "2014-07-05",
     "purchase_date" : "2014-08-05",
     "network" : "3G",
     "OS" : "iOs 8.4",
     "camera" : "5mp",
     "memory" : "32GB",
     "battery" : "4cell"
}

```

##### Return

```
{
    "error_code": 0
}
```
