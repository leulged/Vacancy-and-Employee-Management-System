// service/teamService.js
const AppDataSource = require('../Config/database');
const Team = require('../Models/Team');

const teamRepository = AppDataSource.getRepository(Team);

const createTeam = async (teamName) => {
    const newTeam = teamRepository.create({ team_name: teamName });
    return await teamRepository.save(newTeam);
};

const getAllTeams = async () => {
    return await teamRepository.find();
};

const getTeamById = async (id) => {
    return await teamRepository.findOneBy({ id });
};

const updateTeam = async (id, teamName) => {
    const team = await teamRepository.findOneBy({ id });
    if (team) {
        team.team_name = teamName;
        return await teamRepository.save(team);
    }
    return null;
};

const deleteTeam = async (id) => {
    const team = await teamRepository.findOneBy({ id });
    if (team) {
        await teamRepository.remove(team);
        return team;
    }
    return null;
};

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    updateTeam,
    deleteTeam,
};
