// Record Collection

/*You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property*/

/*
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
*/

function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    } else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && value !== "") {
      if (records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [];
      }
      records[id][prop].push(value);
    }
    return records;
}