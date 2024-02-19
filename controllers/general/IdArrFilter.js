const populateObjectIdArr= async (objectIdArr, objectModel)=> {
    try {
        // Fetch objects from the database
        const objects = await objectModel.find({ _id: { $in: idArray } });

        // Filter out the IDs that were not found
        idArray = objects.map(obj => obj._id.toString());

        // You can handle other cases here if needed
    } catch (error) {
        console.error("Error while populating array:", error);
        return [objectIdArr,null]
    }
    return [idArray,objects];

}


