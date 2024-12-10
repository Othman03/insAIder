from dataclasses import dataclass
from typing import List, Dict
from datetime import datetime

@dataclass
class Events:
     timestamp : datetime
     data : str
@dataclass
class Job:
     status : str
     events : List[Events]
     result : str

jobs_lock = Lock()
jobs : Dict[str , "Job"] = {}

def append_event(job_id : str , event_data : str):
     with jobs_lock:
          if job_id in jobs:
               print(f"start job {job_id}")
               jobs[job_id] = Job(
                    status="Started",
                    events=[],
                    result=""
               )
          else:
               print("appending for event job")
               jobs[job_id].events.append(
                Events(
                         timestamp = datetime.now(),
                         data = event_data
                    )
               )
          
            