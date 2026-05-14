
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from 'fs';

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    try{
        const data = JSON.stringify(this._raceResults);
        fs.writeFileSync(filePath,data,'utf-8' );
    }
    catch(error){
      console.log(error);
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        this._raceResults = JSON.parse(data);
        return true;
    }
    catch(error){
      console.log(error);
      return false
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO
       const raceResult = this._raceResults.find(e => e.participant_id === participantId);
       if(!raceResult) return null;

       return raceResult.duration; 
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO'

    const attempts = this._raceResults.filter(e => e.participant_id === participantId);

    if(attempts.length == 0) return null;

    const duration = new Duration();

    attempts.forEach(e => {
      duration = duration.plus(e);
    })
    
    return duration;
  }
}
