// controllers/teamController.js
const teamService = require('../Services/teamService');

const getAllTeams = async (req, res) => {
    try {
        const teams = await teamService.getAllTeams();
        res.json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve teams' });
    }
};

const getTeamById = async (req, res) => {
    try {
        const team = await teamService.getTeamById(req.params.id);
        if (team) {
            res.json(team);
        } else {
            res.status(404).json({ error: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve team' });
    }
};

const createTeam = async (req, res) => {
    try {
        const { team_name } = req.body;
        const newTeam = await teamService.createTeam(team_name);
        res.status(201).json(newTeam);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create team' });
    }
};

const updateTeam = async (req, res) => {
    try {
        const { team_name } = req.body;
        const updatedTeam = await teamService.updateTeam(req.params.id, team_name);
        if (updatedTeam) {
            res.json(updatedTeam);
        } else {
            res.status(404).json({ error: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update team' });
    }
};

const deleteTeam = async (req, res) => {
    try {
        const deletedTeam = await teamService.deleteTeam(req.params.id);
        if (deletedTeam) {
            res.json(deletedTeam);
        } else {
            res.status(404).json({ error: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete team' });
    }
};

module.exports = {
    getAllTeams,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam,
};
