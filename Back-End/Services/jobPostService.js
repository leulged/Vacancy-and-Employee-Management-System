const AppDataSource = require('../Config/database');
const JobPost = require('../Models/jobpost');

const jobPostRepository = AppDataSource.getRepository(JobPost);

const createJobPost = async (jobPostData) => {
    const jobPost = jobPostRepository.create(jobPostData);
    return await jobPostRepository.save(jobPost);
};

const getJobPosts = async () => {
    return await jobPostRepository.find({ relations: ['category'] });
};

const getJobPostById = async (id) => {
    return await jobPostRepository.findOne({ where: { id }, relations: ['category'] });
};

const updateJobPost = async (id, updateData) => {
    await jobPostRepository.update(id, updateData);
    return await getJobPostById(id);
};

const deleteJobPost = async (id) => {
    return await jobPostRepository.delete(id);
};


module.exports = {
    createJobPost,
    getJobPosts,
    getJobPostById,
    updateJobPost,
    deleteJobPost,
};
