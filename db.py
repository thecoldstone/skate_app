"""
    Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
    Author: Nikita Zhukov <xzhuko00@stud.fit.vutbr.cz>
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
"""

users = {
    0 : {
        "email" : "myemail0@gmail.com",
        "pass" : "123",
        "image" : "https://picsum.photos/id/1005/100/100",
        "name" : "James Bond",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [1,2,3,4,5,6,7,8],
        "friend_info" : {}
    },
    1 : {
        "email" : "myemail1@gmail.com",
        "pass" : "456",
        "image" : "https://picsum.photos/id/1003/100/100",
        "name" : "Adham Sptiz",
        "tiktok" : "something.something",
        "facebook" : "something",
        "instagram" : "something",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [0, 2],
        "friend_info" : {}
    },
    2 : {
        "email" : "myemail2@gmail.com",
        "pass" : "789",
        "image" : "https://picsum.photos/id/1001/100/100",
        "name" : "James Fofan",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [0, 1, 3, 4 ,7],
        "friend_info" : {}
    },
    3 : {
        "email" : "myemail3@gmail.com",
        "pass" : "789",
        "image" : "https://picsum.photos/id/142/100/100",
        "name" : "Antuan Lampas",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [1, 5, 7, 4, 2],
        "friend_info" : {}
    },
    4 : {
        "email" : "myemail4@gmail.com",
        "pass" : "789",
        "image" : "https://picsum.photos/id/141/100/100",
        "name" : "David Brovin",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [0, 1, 3, 4, 7],
        "friend_info" : {}
    },
    5 : {
        "email" : "myemail5@gmail.com",
        "pass" : "789",
        "image" : "https://picsum.photos/id/140/100/100",
        "name" : "Anton Marohin",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [0, 1, 3],
        "friend_info" : {}
    },
    6 : {
        "email" : "myemail6@gmail.com",
        "pass" : "789",
        "image" : "https://picsum.photos/id/139/100/100",
        "name" : "Samuel Eldin",
        "tiktok" : "khsgasdga.lame",
        "facebook" : "asgdag0",
        "instagram" : "khabgsdagsdgy00",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [3, 4, 5],
        "friend_info" : {}
    },
    7 : {
        "email" : "myemail7@gmail.com",
        "pass" : "789",
        "image" : "https://picsum.photos/id/131/100/100",
        "name" : "Donald NoTrapm",
        "tiktok" : "asdgme",
        "facebook" : "khabylasdgicial00",
        "instagram" : "kasdg",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [6, 7, 3],
        "friend_info" : {}
    },
    8 : {
        "email" : "myemail8@gmail.com",
        "pass" : "789",
        "image" : "https://picsum.photos/id/137/100/100",
        "name" : "Noone",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "spots" : [0, 1, 2],
        "spot_info" : {},
        "friends" : [2, 4, 6],
        "friend_info" : {}
    }
}

spots = {
    0: {
        "name": "Venice Beach",
        "description": "A skate park which was created by Jasos Biba in 1337. Its cultural place is available for all kinds of faggots",
        "image": "https://www.korunavysociny.cz/media/com_xkatalog/images/listings/m/1406.jpg",
        'comments': [
            {'userId': 0, 'userName': users[0]
                ['name'], 'comment': 'asdasdasd'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'asasdasd'},
            {'userId': 0, 'userName': users[0]
                ['name'], 'comment': 'asdas123123dasd'},
            {'userId': 1, 'userName': users[1]['name'],
                'comment': '!@#!@#!@#asdasdasd'},
        ],
        "user_ranks" : {
            0 : 71,
            1 : 30,
            2 : 37,
            3 : 40,
            4 : 59,
            5 : 67,
            6 : 98,
            7 : 1,
            8 : 99
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
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/0e3GPea1Tyg"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/3N0S-Sg3Pbk"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/3N0S-Sg3Pbk"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/3N0S-Sg3Pbk"
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
        "user_ranks" : {
            0 : 65,
            1 : 11,
            2 : 33,
            3 : 40,
            4 : 59,
            5 : 67,
            6 : 98,
            7 : 1,
            8 : 99
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
        "description": "A skate park which was created by Jasos Biba",
        "image": "https://www.karolinka.cz/files/files/texty/1566379874dsc_0326.jpg",
        'comments': [
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'test1'},
            {'userId': 1, 'userName': users[1]['name'], 'comment': 'test2'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'test3'},
            {'userId': 2, 'userName': users[2]
                ['name'], 'comment': 'fit.vutbr.cz'},
        ],

        "user_ranks" : {
            0 : 31,
            1 : 39,
            2 : 97,
            3 : 40,
            4 : 59,
            5 : 67,
            6 : 98,
            7 : 1,
            8 : 99
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
