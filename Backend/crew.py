from Backend.job_manager import append_event


class ResearchCrew:
    def __init__(self, job_id : str):
        self.job_id = job_id
        self.crew = None

    def setup_crew(self, study : str, horizon : str, ticker : str, risk : str):
        print(f"settingup crew for id {self.job_id} , with study type of {study}, for ticker {ticker}, horizon {horizon} and a {risk} risk tolerance")

    def kickoff(self):
        if not self.crew:
            print(f"no crew found for {self.job_id}")
            return
        append_event(self.job_id, "Crew started")
        try:
            print(f"running crew for {self.job_id}")
            results = self.crew.kickoff()
            return results
        
        except Exception as e:
            return str(e)



