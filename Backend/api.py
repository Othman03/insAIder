from threading import Thread
from uuid import uuid4
from flask import Flask, abort, jsonify, request

app = Flask(__name__)

def kickoff_crew(job_id : str,study : str ,ticker : str ,horizon : str ,risk : str):
    print(f"running crew for id {job_id} , with study type of {study}, for ticker {ticker}, horizon {horizon} and a {risk} risk tolerance")


@app.route("/api/crew", methods=['POST'])
def run_crew():
    data = request.json
    if not data or "study" not in data or "ticker" not in data or "horizon" not in data or "risk" not in data:
        abort(400, description="Invalid request with missing data")
    
    job_id = str(uuid4())
    study = data['study']
    ticker = data['ticker']
    horizon = data['horizon']
    risk =data['risk']

    thread = Thread(target = kickoff_crew, args=(job_id, study,ticker,horizon,risk))
    thread.start()
    return jsonify({'job_id': job_id}) , 200

@app.route("/api/crew/<job_id>", methods=['GET'])
def get_status(job_id):
    return jsonify({'status': f"returning job with id {job_id}"}),200


if __name__ == '__main__':
    app.run(debug=True,port=5001)