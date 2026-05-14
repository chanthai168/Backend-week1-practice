import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */

export class RaceResult {
    
    /** @type {string} Participant identifier */
    participant_id;
    
    /** @type {string} Type of sport  */
    sport_type;
    
    /** @type {Duration} The duration of the race */
    duration;


    /**
     * Creates a new RaceResult instance.
     * 
     * @param {string} participant_id - Unique identifier of the participant.
     * @param {string} sport_type - Type of sport for this race.
     * @param {Duration} duration - Duration object representing the race time.
     */
    constructor(participant_id, sport_type, duration) {
        this.participant_id = participant_id;
        this.sport_type = sport_type;
        this.duration = duration;
    }
}