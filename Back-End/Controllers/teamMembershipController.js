// controllers/teamMembershipController.js
const teamMembershipService = require('../Services/teamMembershipService');

const getAllMemberships = async (req, res) => {
    try {
        const memberships = await teamMembershipService.getAllTeamMemberships();
        res.json(memberships);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve memberships' });
    }
};

const getMembershipById = async (req, res) => {
    try {
        const membership = await teamMembershipService.getTeamMembershipById(req.params.id);
        if (membership) {
            res.json(membership);
        } else {
            res.status(404).json({ error: 'Membership not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve membership' });
    }
};

const createMembership = async (req, res) => {
    try {
        const { teamId, userId } = req.body;  // Make sure these match your request body
        const newMembership = await teamMembershipService.createTeamMembership(teamId, userId);
        res.status(201).json(newMembership);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create membership' });
    }
};


const updateMembership = async (req, res) => {
    try {
        const { user_id, team_id } = req.body;
        const updatedMembership = await teamMembershipService.updateTeamMembership(req.params.id, user_id, team_id);
        if (updatedMembership) {
            res.json(updatedMembership);
        } else {
            res.status(404).json({ error: 'Membership not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update membership' });
    }
};

const deleteMembership = async (req, res) => {
    try {
        const deletedMembership = await teamMembershipService.deleteTeamMembership(req.params.id);
        if (deletedMembership) {
            res.json(deletedMembership);
        } else {
            res.status(404).json({ error: 'Membership not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete membership' });
    }
};
const getUsersByTeam = async (req, res) => {
    const { teamId } = req.params;

    try {
        const users = await teamMembershipService.getUsersByTeamId(teamId);
        
        if (!users || users.message) {
            return res.status(404).json({ message: `No users found for team ID ${teamId}` });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllMemberships,
    getMembershipById,
    createMembership,
    updateMembership, 
    deleteMembership,
    getUsersByTeam
};
