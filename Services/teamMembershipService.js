// services/teamMembershipService.js
const AppDataSource = require('../Config/database');
const TeamMembership = require('../Models/TeamMembership'); // Adjust the path if necessary

const teamMembershipRepository = AppDataSource.getRepository(TeamMembership);

const createTeamMembership = async (teamId, userId) => {
    const newTeamMembership = teamMembershipRepository.create({
        team: teamId ,
        user:  userId ,
    });
    return await teamMembershipRepository.save(newTeamMembership);
};


const getAllTeamMemberships = async () => {
    return await teamMembershipRepository.find({
        relations: ['team', 'user','user.role'], // Load related entities
    });
};

const getTeamMembershipById = async (id) => {
    return await teamMembershipRepository.findOne({
        where: { id },
        relations: ['team', 'user', 'user.role'], // Load related entities
    });
};

const updateTeamMembership = async (id, teamId, userId) => {
    const teamMembership = await teamMembershipRepository.findOneBy({ id });
    if (teamMembership) {
        teamMembership.team = teamId;
        teamMembership.user = userId;
        return await teamMembershipRepository.save(teamMembership);
    }
    return null;
};

const deleteTeamMembership = async (id) => {
    const teamMembership = await teamMembershipRepository.findOneBy({ id });
    if (teamMembership) {
        await teamMembershipRepository.remove(teamMembership);
        return teamMembership;
    }
    return null;
};

const getUsersByTeamId = async (teamId) => {
    try {
        const teamMembers = await AppDataSource
            .getRepository(TeamMembership)
            .find({
                where: { team: { id: teamId } },
                relations: ["user", "user.role", "team"] // Fetches related user, role, and team info
            });

        if (!teamMembers.length) {
            return { message: `No users found for team with ID ${teamId}` };
        }

        return teamMembers.map(member => ({
            id: member.user.id,
            username: member.user.username,
            email: member.user.email,
            full_name: member.user.full_name,
            role: {
                id: member.user.role.id,
                name: member.user.role.name
            },
            team: {
                id: member.team.id,
                team_name: member.team.team_name
            }
        }));
    } catch (error) {
        throw new Error(`Failed to fetch users for team ID ${teamId}: ${error.message}`);
    }
};

module.exports = {
    createTeamMembership,
    getAllTeamMemberships,
    getTeamMembershipById,
    updateTeamMembership,
    deleteTeamMembership,
    getUsersByTeamId 
};
