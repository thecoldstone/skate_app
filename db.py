"""
    Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
"""

"""
    Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
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
        "friend_info" : {},
        "events": [],
        "favourite": []
    }
}

"""
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
"""
spots = {
    0: {
        "name": "Skate park #1",
        "description": "A skate park which was created by Jasos Biba in 1337. Its cultural place is available for all kinds of skaters",
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
        "name": "Skate park \"Slam Dunk\"",
        "description": "ZA WARUDO!!! TOKI WO TOMARE!!!!",
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
        "name": "Skate park \"30 arrows\"",
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

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
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
            "description": "Well-located spot in the city center.",
            "address": "Janáčkovo divadlo",
            "id": "1",
            "members": 15,
            "image": "https://as1.ftcdn.net/v2/jpg/02/87/93/88/1000_F_287938821_r4gVJaWOkQivCpByTVH2Sq4FPTZDPXN7.jpg"
        },
        "id": "1",
    }
]

events = [
    {
        "title": "SkateFest",
        "type": "event",
        "description": "Workshop for small children to learn basic skate tricks.",
        "address": "Boby Centrum",
        "id": "2",
        "members": 0,
        "image": "https://t4.ftcdn.net/jpg/03/85/01/71/240_F_385017164_97YeX100UVZWAbJ1QZ3HUtaOE8uMNZQN.jpg",
        "participants": []
    },
    {
        "title": "Longshop Opening",
        "type": "event",
        "description": "We are opening",
        "address": "Antonínská 5",
        "id": "12",
        "members": 0,
        "image": "https://longshop.cz/wp-content/uploads/2018/11/meli2-768x327.jpg",
        "participants": []
    },
]

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
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
        "properties": events[0],
        "id": "2"
    },
    {
        "type": "Feature",
        "geometry": {
                "type": "Point",
                "coordinates": [
                    16.605623400012504,
                    49.20291420397536
                ]
        },
        "properties": events[1],
        "id": "12"
    },
]

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
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
            "description": "Insnane skater destroys the skatepark.",
            "address": "Brno-Židenice, Juliánov",
            "id": "3",
            "members": 2,
            "image": "https://as2.ftcdn.net/v2/jpg/03/02/47/73/1000_F_302477323_YcrRliEVC4z6RZJPCACGxO3bBjdbHcrf.jpg"
        },
        "id": "3"
    }
]

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
tab_photos = [
    {
        "type": "Feature",
        "geometry": {
                "type": "Point",
                "coordinates": [
                    16.657183,
                    49.1970
                ]
        },
        "properties": {
            "title": "Photo#1",
            "type": "photo",
            "description": "Beautiful pictures of young talents from Brno.",
            "address": "Brno-Židenice, Juliánov",
            "id": "4",
            "members": 4,
            "image": "https://as2.ftcdn.net/v2/jpg/04/72/12/31/1000_F_472123128_RL8Jx0jqylDsTcplDLhM2nXOaAHsn1Qy.jpg"
        },
        "id": "4"
    }
]

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
tab_all = [
    tab_events,
    tab_spots,
    tab_videos,
    tab_photos
]

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
def add_event(title, description, address, lng, lat):

    event = {
            "title": title,
            "type": "event",
            "description": description,
            "address": address,
            "id": "13",
            "members": 0,
            "image": "https://longshop.cz/wp-content/uploads/2018/11/meli2-768x327.jpg",
            "participants": []
    }

    tab_event = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    lng,
                    lat
                ]
            },
            "properties": event,
            "id": "13"
    }

    events.append(event)
    tab_events.append(tab_event)

    return tab_event

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
def add_spot(title, description, address, lng, lat):
    properties = {
            "title": title,
            "type": "spot",
            "description": description,
            "address": address,
            "id": "13",
            "members": 0,
            "image": "https://as1.ftcdn.net/v2/jpg/02/87/93/88/1000_F_287938821_r4gVJaWOkQivCpByTVH2Sq4FPTZDPXN7.jpg",
    }
    tab_spot = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    lng,
                    lat
                ]
            },
            "properties": properties,
            "id": "14"
    }

    tab_spots.append(tab_spot)

    return tab_spot

"""
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
"""
def get_spot(id):
    return spots[int(id)]


"""
    Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
"""
def set_spot(id, name, image):
    if id not in spots:
        spots[int(id)] = {"name": name, "image": image}
    else:
        print("ERROR, ID ALREADY EXISTS")


"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
def get_homepage_contet(content_type, userFavourites=None, userId=None):

    respond_body = {
        "type": "FeatureCollection",
        "features": []
    }

    if userId is not None:
        userFavourites = users[userId]["favourite"]

    print(userFavourites)
    
    if userFavourites is None or type(userFavourites) is not list:
        userFavourites = []

    if content_type == "all":
        for items in tab_all:
            for item in items:
                respond_body["features"].append(item)

    if content_type == "favourite":
            for items in tab_all:
                for item in items:
                    if int(item["id"]) in userFavourites:
                        item["isFavourite"] = True
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

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
def get_event(eventId):
    for event in tab_events:
            if event['id'] == eventId:
                return event
    return {}

"""
    Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
"""
def get_item(itemId):
    for tab in tab_all:
        for item in tab:
            if item['id'] == itemId:
                return item
    
    return None

"""
    Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
"""
def get_user(id):
    return users[int(id)]


"""
    Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
"""
def set_user(id, new_info):
    users[int(id)] = new_info
