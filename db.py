actual_user = 0

users = {
    0: {
        "email": "myemail0@gmail.com",
        "pass": "123",
        "image": "https://picsum.photos/id/1005/100/100",
        "name": "James Kukold",
        "tiktok": "khaby.lame",
        "facebook": "khabylameofficial00",
        "instagram": "khaby00",
        "my_spots": [0, 1, 2],
        "my_spots_info": {},
        "my_friends": [1],
        "my_friends_info": {}
    },
    1: {
        "email": "myemail1@gmail.com",
        "pass": "456",
        "image": "https://picsum.photos/id/1003/100/100",
        "name": "James Bandit",
        "tiktok": "khaby.lame",
        "facebook": "khabylameofficial00",
        "instagram": "khaby00",
        "my_spots": [0, 1, 2],
        "my_spots_info": {},
        "my_friends": [0, 2],
        "my_friends_info": {}
    },
    2: {
        "email": "myemail2@gmail.com",
        "pass": "789",
        "image": "https://picsum.photos/id/1001/100/100",
        "name": "James Fofan",
        "tiktok": "khaby.lame",
        "facebook": "khabylameofficial00",
        "instagram": "khaby00",
        "my_spots": [0, 1, 2],
        "my_spots_info": {},
        "my_friends": [],
        "my_friends_info": {}
    }
}

spots = {
    0: {
        "name": "Venice Beach",
        "image": "https://picsum.photos/id/772/100/100",
        'comments': [
            {'userId': 0, 'userName': users[0]
                ['name'], 'comment': 'asdasdasd'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'asasdasd'},
            {'userId': 0, 'userName': users[0]
                ['name'], 'comment': 'asdas123123dasd'},
            {'userId': 1, 'userName': users[1]['name'],
                'comment': '!@#!@#!@#asdasdasd'},
        ],
        "user_ranks": {
            0: 71,
            1: 30,
            2: 37
        },
        "videos": [
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/JtDqhdpHn3g"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/Yv2p-ffhj1M"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/0e3GPea1Tyg"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/3N0S-Sg3Pbk"
            },
            {
                "user_id": 1,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 2,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            }
        ],
    },
    1: {
        "name": "Another Beach",
        "image": "https://www.blansko.cz/soubory/clanky/images/2021/skatepark-51967-5604_800.jpg",
        'comments': [
            {'userId': 2, 'userName': users[2]
                ['name'], 'comment': 'asdasdasd'},
            {'userId': 1, 'userName': users[1]['name'], 'comment': 'asasdasd'},
            {'userId': 1, 'userName': users[1]
                ['name'], 'comment': 'asdas123123dasd'},
            {'userId': 0, 'userName': users[0]['name'],
                'comment': '!@#!@#!@#asdasdasd'},
        ],
        "user_ranks": {
            0: 65,
            1: 11,
            2: 33
        },
        "videos": [
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/mWKXPnlUvg0"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/mNXVXZ6Xu30"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/55WOSS0L6yo"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/LX0bSu9rNnE"
            },
            {
                "user_id": 1,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 1,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 2,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            }
        ]
    },
    2: {
        "name": "test Beach",
        "image": "https://picsum.photos/id/774/100/100",
        'comments': [
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'test1'},
            {'userId': 1, 'userName': users[1]['name'], 'comment': 'test2'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'test3'},
            {'userId': 2, 'userName': users[2]
                ['name'], 'comment': 'fit.vutbr.cz'},
        ],
        "user_ranks": {
            0: 31,
            1: 39,
            2: 97
        },
        "videos": [
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/ClasOS9VFWI"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/9LPXCGwSLAg"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 0,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 1,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 1,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 1,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id": 2,
                "url": "https://www.youtube.com/embed/MlcRss1uzS0"
            }
        ]
    }
}

tab_spots = [
    {
        "type": "Feature",
        "geometry": {
                "type": "Point",
                "coordinates": [
                    16.609397322755587,
                    49.19899335319561
                ]
        },
        "properties": {
            "title": "Spot #1",
            "type": "spot",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
            "address": "Janáčkovo divadlo",
            "id": "1",
            "members": 24
        }
    }
]

tab_events = [
    {
        "type": "Feature",
        "geometry": {
                "type": "Point",
                "coordinates": [
                    16.608322918657706,
                    49.21169085644892
                ]
        },
        "properties": {
            "title": "SkateFest",
            "type": "event",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
            "address": "Boby Centrum",
            "id": "2"
        }
    }
]

tab_videos = [
    {
        "type": "Feature",
        "geometry": {
                "type": "Point",
                "coordinates": [
                    16.657182730046852,
                    49.196919012878325
                ]
        },
        "properties": {
            "title": "Video#1",
            "type": "video",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
            "address": "Brno-Židenice, Juliánov",
            "id": "3"
        }
    }
]

tab_photos = [
    {
        "type": "Feature",
        "geometry": {
                "type": "Point",
                "coordinates": [
                    16.657182730046852,
                    49.196919012878325
                ]
        },
        "properties": {
            "title": "Photo#1",
            "type": "photo",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
            "address": "Brno-Židenice, Juliánov",
            "id": "4"
        }
    }
]

tab_all = [
    tab_events,
    tab_spots,
    tab_videos,
    tab_photos
]


def get_spot(id):
    return spots[int(id)]


def set_spot(id, name, image):
    if id not in spots:
        spots[int(id)] = {"name": name, "image": image}
    else:
        print("ERROR, ID ALREADY EXISTS")


def get_homepage_contet(content_type):

    respond_body = {
        "type": "FeatureCollection",
        "features": []
    }

    if content_type == "all":
        for items in tab_all:
            for item in items:
                respond_body["features"].append(item)

    if content_type == "events":
        for item in tab_events:
            respond_body["features"].append(item)

    if content_type == "spots":
        for item in tab_spots:
            respond_body["features"].append(item)

    if content_type == "videos":
        for item in tab_videos:
            respond_body["features"].append(item)

    if content_type == "photos":
        for item in tab_photos:
            respond_body["features"].append(item)

    return respond_body


def get_user(id):
    return users[int(id)]


def set_user(id, new_info):
    users[int(id)] = new_info
