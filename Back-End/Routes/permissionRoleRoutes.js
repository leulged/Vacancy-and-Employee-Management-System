// routes/permissionRoleRoutes.js
const express = require("express");
const router = express.Router();
const permissionRoleController = require("../Controllers/permissionRoleController");

router.post("/", permissionRoleController.assignPermissionToRole);
router.get("/:roleId", permissionRoleController.getAllPermissionsForRole);
router.delete("/:permissionId/:roleId", permissionRoleController.removePermissionFromRole);

module.exports = router;
