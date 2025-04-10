import Pin from "../modals/pin.model.js"

export const getPins = async (req, res) => {
    const pageNumber = Number(req.query.cursor);
    const LIMIT = 21;
    const pins = await Pin.find({})
        .limit(LIMIT)
        .skip(pageNumber * LIMIT);
    // limit for the limit the data fetching from databse 

    const hasNextPage = pins.length === LIMIT;

    await new Promise(resolve=> setTimeout(resolve,2000));

    res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
}