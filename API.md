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
  "name" : "HTC"
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
            "name": "Apple",
            "numberOfPhone": 0
        },
        {
            "id": 2,
            "name": "HTC",
            "numberOfPhone": 0
        },
        {
            "id": 3,
            "name": "SamSung",
            "numberOfPhone": 0
        },
        {
            "id": 4,
            "name": "NOKIA",
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
        "name": "Apple",
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
     "name" : "iPhone5",
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
