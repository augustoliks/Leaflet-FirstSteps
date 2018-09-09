from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
import time

app = Flask(__name__)
socketio = SocketIO(app)

thread = None
  
def background_thread():
    time_wait = 3
    test = 0
    while True:
        print ('While true')

        if test == 0:
            socketio.emit('message', test)
            time.sleep(time_wait)
            test = 1
        else:
            socketio.emit('message', test)
            time.sleep(time_wait)
            test = 0


@socketio.on('connect')
def connect():
    print('CONNECT AKI')

    global thread

    if thread is None:
        thread = socketio.start_background_task(target=background_thread)

@app.route('/')
def index():
    return render_template('leaflet.html')

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':

    socketio.run(app, debug=True, host='0.0.0.0')