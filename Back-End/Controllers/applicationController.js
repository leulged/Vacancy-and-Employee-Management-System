const applicationService = require('../Services/applicationService');

async function createApplication(req, res) {
    try {
        const { resume_url, phone_number, education, experience, skills,email,gender,fullname, status } = req.body;
        const application = await applicationService.createApplication(
            resume_url, phone_number, education, experience, skills,email,gender,fullname,  status
        );
        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Error creating application', error });
    }
}

async function getApplications(req, res) {
    try {
        const applications = await applicationService.getApplications();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications', error });
    }
}

async function getApplicationById(req, res) {
    try {
        const application = await applicationService.getApplicationById(req.params.id);
        if (application) {
            res.status(200).json(application);
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching application', error });
    }
}

async function updateApplication(req, res) {
    try {
        const application = await applicationService.updateApplication(req.params.id, req.body);
        if (application) {
            res.status(200).json(application);
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating application', error });
    }
}

async function deleteApplication(req, res) {
    try {
        const application = await applicationService.deleteApplication(req.params.id);
        if (application) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting application', error });
    }
}

module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
};
