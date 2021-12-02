actual_user = 0

users = {
    0 : {
        "image" : "https://picsum.photos/id/1005/100/100",
        "email" : "myemail@gmail.com",
        "name" : "James Kukold",
        "pass" : "123",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "my_spots" : [0],
        "my_spots_info" : {},
        "my_friends" : [1],
        "my_friends_info" : {}
    },
    1 : {
        "image" : "https://picsum.photos/id/1003/100/100",
        "email" : "myemail@gmail.com",
        "name" : "James Bandit",
        "pass" : "123",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "my_spots" : [0, 1, 2],
        "my_spots_info" : {},
        "my_friends" : [0,2],
        "my_friends_info" : {}
    },
    2 : {
        "image" : "https://picsum.photos/id/1001/100/100",
        "email" : "myemail@gmail.com",
        "name" : "James Fofan",
        "pass" : "123",
        "tiktok" : "khaby.lame",
        "facebook" : "khabylameofficial00",
        "instagram" : "khaby00",
        "my_spots" : [0, 1, 2],
        "my_spots_info" : {},
        "my_friends" : [],
        "my_friends_info" : {}
    }
}

spots = {
    0 : {
        "name" : "Venice Beach",
        "image" : "https://picsum.photos/id/772/100/100",
        'comments': [
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'asdasdasd'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'asasdasd'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'asdas123123dasd'},
            {'userId': 1, 'userName': users[1]['name'], 'comment': '!@#!@#!@#asdasdasd'},
        ],
        "user_ranks" : {
            0 : 71,
            1 : 30,
            2 : 37
        },
        "videos" : [
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 1,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 2,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            }
        ]
    },
    1 : {
        "name" : "Another Beach",
        "image": "https://www.blansko.cz/soubory/clanky/images/2021/skatepark-51967-5604_800.jpg",
        'comments': [
            {'userId': 2, 'userName': users[2]['name'], 'comment': 'asdasdasd'},
            {'userId': 1, 'userName': users[1]['name'], 'comment': 'asasdasd'},
            {'userId': 1, 'userName': users[1]['name'], 'comment': 'asdas123123dasd'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': '!@#!@#!@#asdasdasd'},
        ],
        "user_ranks" : {
            0 : 65,
            1 : 11,
            2 : 33
        },
        "videos" : [
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 1,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 1,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 2,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            }
        ]
    },
    2 : {
        "name" : "test Beach",
        "image": "https://picsum.photos/id/774/100/100",
        'comments': [
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'test1'},
            {'userId': 1, 'userName': users[1]['name'], 'comment': 'test2'},
            {'userId': 0, 'userName': users[0]['name'], 'comment': 'test3'},
            {'userId': 2, 'userName': users[2]['name'], 'comment': 'fit.vutbr.cz'},
        ],
        "user_ranks" : {
            0 : 31,
            1 : 39,
            2 : 97
        },
        "videos" : [
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 0,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 1,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 1,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 1,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            },
            {
                "user_id" : 2,
                "url" : "https://www.youtube.com/embed/MlcRss1uzS0"
            }
        ]
    }
}

def get_spot(id):
    return spots[int(id)]

def set_spot(id, name, image):
    if id not in spots:
        spots[int(id)] = {"name" : name, "image" : image}
    else:
        print("ERROR, ID ALREADY EXISTS")

def get_user(id):
    return users[int(id)]

def set_user(id, new_info):
    users[int(id)] = new_info