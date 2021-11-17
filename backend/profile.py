from flask import Flask, Response, jsonify

def get_profile_info():
    data = {'Nikitka': 'pidr,lox,sosetpisiu'}
    return jsonify(data), 200   