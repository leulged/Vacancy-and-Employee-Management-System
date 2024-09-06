// routes/permissionRoutes.js
const express = require("express");
const router = express.Router();
const permissionController = require("../Controllers/permissionController");

router.post("/", permissionController.createPermission);
router.get("/", permissionController.getAllPermissions);
router.get("/:id", permissionController.getPermissionById);
router.put("/:id", permissionController.updatePermission);
router.delete("/:id", permissionController.deletePermission);

module.exports = router;
