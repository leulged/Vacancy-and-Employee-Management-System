const postedByService = require('../Services/postedByService');

const getAllPostedBy = async (req, res) => {
    try {
        const postedBys = await postedByService.getAllPostedBy();
        res.status(200).json(postedBys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPostedBy = async (req, res) => {
    try {
        const { jobId, teamId, applicantId } = req.body;
        const postedBy = await postedByService.createPostedBy(jobId, teamId, applicantId);
        res.status(201).json(postedBy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPostedByById = async (req, res) => {
    try {
        const postedBy = await postedByService.getPostedByById(req.params.id);
        if (postedBy) {
            res.status(200).json(postedBy);
        } else {
            res.status(404).json({ message: 'PostedBy entry not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePostedBy = async (req, res) => {
    try {
        const { jobId, teamId, applicantId } = req.body;
        const postedBy = await postedByService.updatePostedBy(req.params.id, jobId, teamId, applicantId);
        if (postedBy) {
            res.status(200).json(postedBy);
        } else {
            res.status(404).json({ message: 'PostedBy entry not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePostedBy = async (req, res) => {
    try {
        const postedBy = await postedByService.deletePostedBy(req.params.id);
        if (postedBy) {
            res.status(200).json(postedBy);
        } else {
            res.status(404).json({ message: 'PostedBy entry not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getPostedByTeamId = async (req, res) => {
    const { teamId } = req.params; // Extract the teamId from the route parameters
    try {
        const postedByEntries = await postedByService.getPostedByTeamId(teamId);
        if (postedByEntries.length === 0) {
            return res.status(404).json({ message: `No job posts or applicants found for team ID ${teamId}` });
        }
        res.status(200).json(postedByEntries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllPostedBy,
    createPostedBy,
    getPostedByById,
    updatePostedBy,
    deletePostedBy,
    getPostedByTeamId
};
