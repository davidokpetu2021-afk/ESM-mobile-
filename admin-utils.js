// admin-utils.js

// Admin mode toggle
let isAdminMode = false;

function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    console.log('Admin mode:', isAdminMode ? 'Enabled' : 'Disabled');
}

// ESM6002 password validation
function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/; // At least one number and one special character
    return regex.test(password);
}

// Permission checking
function hasPermission(userRole, requiredRole) {
    const rolesHierarchy = ['user', 'moderator', 'admin'];
    return rolesHierarchy.indexOf(userRole) >= rolesHierarchy.indexOf(requiredRole);
}

// Session management
let sessions = {};

function startSession(userId) {
    sessions[userId] = { sessionId: generateSessionId(), timestamp: new Date() };
    console.log('Session started for user:', userId);
}

function endSession(userId) {
    if (sessions[userId]) {
        delete sessions[userId];
        console.log('Session ended for user:', userId);
    }
}

function generateSessionId() {
    return 'sess-' + Math.random().toString(36).substr(2, 9);
}

// Export functions
module.exports = { toggleAdminMode, validatePassword, hasPermission, startSession, endSession };