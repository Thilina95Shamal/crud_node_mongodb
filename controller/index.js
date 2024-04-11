const Models = require("../models");


//insert Method for new Document
const insertNewDocument = async (modelDb, storeObj) => {
    let data = new Models[modelDb](storeObj);
    return await data.save();
};

//get All Method for getting all the Document
const find = async (modelDb, queryObj) =>
  await Models[modelDb].find(queryObj).exec();

//update Method for Updating a Documnet 
const updateDocument = async (modelDb, updateQuery, setQuery) =>
  await Models[modelDb].findOneAndUpdate(
    updateQuery,
    { $set: setQuery },
    { new: true }
  );

//delete Method for Deleteing a Document
const deleteDocument = async (modelDb, deleteQuery) =>
  await Models[modelDb].deleteOne(deleteQuery);



module.exports = {
    insertNewDocument,
    find,
    updateDocument,
    deleteDocument,
    
};