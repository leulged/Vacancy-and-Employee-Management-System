const AppDataSource = require('../Config/database');
const PostedBy = require('../Models/PostedBy');

const postedByRepository = AppDataSource.getRepository(PostedBy);

const createPostedBy = async (jobId, teamId, applicantId) => {
    const postedBy = {
        job: { id: jobId },
        team: { id: teamId },
        applicant: { id: applicantId },
    };

    return await postedByRepository.save(postedBy);
};

const getAllPostedBy = async () => {
    return await postedByRepository.find({
        relations: ['job', 'team', 'applicant'],
    });
};

const getPostedByById = async (id) => {
    return await postedByRepository.findOne({
        where: { id },
        relations: ['job', 'team', 'applicant'],
    });
};

const updatePostedBy = async (id, jobId, teamId, applicantId) => {
    const postedBy = await postedByRepository.findOneBy({ id });
    if (postedBy) {
        postedBy.job = { id: jobId };
        postedBy.team = { id: teamId };
        postedBy.applicant = { id: applicantId };
        return await postedByRepository.save(postedBy);
    }
    return null;
};

const deletePostedBy = async (id) => {
    const postedBy = await postedByRepository.findOneBy({ id });
    if (postedBy) {
        await postedByRepository.remove(postedBy);
        return postedBy;
    }
    return null;
};
const getPostedByTeamId = async (teamId) => {
    return await postedByRepository.find({
        where: { team: { id: teamId } }, // Filter by team ID
        relations: ['job', 'team', 'applicant'],
    });
};
module.exports = {
    createPostedBy,
    getAllPostedBy,
    getPostedByById,
    updatePostedBy,
    deletePostedBy,
    getPostedByTeamId
};
