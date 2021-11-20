spots = {
    "venice" : {
        "name" : "Venice Beach",
        "image": "https://picsum.photos/id/772/100/100"
    },
    "another" : {
        "name" : "Another Beach",
        "image": "https://picsum.photos/id/773/100/100"
    },
    "test" : {
        "name" : "test Beach",
        "image": "https://picsum.photos/id/774/100/100"
    }
}

def get_spot(id):
    return spots[id]

def set_spot(id, name, image):
    if id not in spots:
        spots[id] = {"name" : name, "image" : image}
    else:
        print("ERROR, ID ALREADY EXISTS")