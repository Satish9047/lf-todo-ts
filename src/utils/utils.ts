
/**
 * Generate random and unique id
 *
 * @returns string
 */
export function getRandomID(){
    const timeNow = Date.now().toString(36);
    const randomNumber = Math.floor(Math.random()*1000).toString(36);
    return `${timeNow}_${randomNumber}`;
}
