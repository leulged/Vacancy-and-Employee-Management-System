const jobPostService = require('../Services/jobPostService');

const createJobPost = async (req, res) => {
    try {
        const jobPost = await jobPostService.createJobPost(req.body);
        res.status(201).json(jobPost);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create job post', error: error.message });
    }
};

const getJobPosts = async (req, res) => {
    try {
        const jobPosts = await jobPostService.getJobPosts();
        res.status(200).json(jobPosts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve job posts', error: error.message });
    }
};

const getJobPostById = async (req, res) => {
    try {
        const jobPost = await jobPostService.getJobPostById(req.params.id);
        if (!jobPost) {
            return res.status(404).json({ message: 'Job post not found' });
        }
        res.status(200).json(jobPost);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve job post', error: error.message });
    }
};

const updateJobPost = async (req, res) => {
    try {
        const updatedJobPost = await jobPostService.updateJobPost(req.params.id, req.body);
        res.status(200).json(updatedJobPost);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update job post', error: error.message });
    }
};

const deleteJobPost = async (req, res) => {
    try {
        await jobPostService.deleteJobPost(req.params.id);
        res.status(204).json({ message: 'Job post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete job post', error: error.message });
    }
};

module.exports = {
    createJobPost,
    getJobPosts,
    getJobPostById,
    updateJobPost,
    deleteJobPost,
};
