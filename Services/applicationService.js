const AppDataSource = require('../Config/database');
const Application = require('../Models/applicationModel');

const applicationRepository = AppDataSource.getRepository(Application);

const createApplication = async (resume_url, phone_number, education, experience, skills,gender,email,fullname, status) => {
    const application = {
        resume_url,
        phone_number,
        education,
        experience,
        skills,
        fullname,
        gender,
        email,
        status,
    };

    await applicationRepository.save(application);
    return application;
};

const getApplications = async () => {
    return await applicationRepository.find();
};

const getApplicationById = async (id) => {
    return await applicationRepository.findOneBy({ id });
};

const updateApplication = async (id, updateData) => {
    const application = await applicationRepository.findOneBy({ id });
    if (application) {
        Object.assign(application, updateData);
        return await applicationRepository.save(application);
    }
    return null;
};

const deleteApplication = async (id) => {
    const application = await applicationRepository.findOneBy({ id });
    if (application) {
        await applicationRepository.remove(application);
        return application;
    }
    return null;
};

module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
};
