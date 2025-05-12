/**
 * Gets a CSRF token from the server.
 * @returns {Promise<string>} CSRF token
 */
declare function getCsrfToken(): Promise<string>;
/**
 * Gets a list of users from the server.
 * @returns {Promise<object>} List of users
 */
declare function getUserList(): Promise<object>;
/**
 * Requests a recovery code for the user.
 * @param {string} handle User handle
 * @returns {Promise<void>}
 */
declare function sendRecoveryPart1(handle: string): Promise<void>;
/**
 * Sets a new password for the user using the recovery code.
 * @param {string} handle User handle
 * @param {string} code Recovery code
 * @param {string} newPassword New password
 * @returns {Promise<void>}
 */
declare function sendRecoveryPart2(handle: string, code: string, newPassword: string): Promise<void>;
/**
 * Attempts to log in the user.
 * @param {string} handle User's handle
 * @param {string} password User's password
 * @returns {Promise<void>}
 */
declare function performLogin(handle: string, password: string): Promise<void>;
/**
 * Handles the user selection event.
 * @param {object} user User object
 * @returns {Promise<void>}
 */
declare function onUserSelected(user: object): Promise<void>;
/**
 * Displays an error message to the user.
 * @param {string} message Error message
 */
declare function displayError(message: string): void;
/**
 * Redirects the user to the home page.
 * Preserves the query string.
 */
declare function redirectToHome(): void;
/**
 * Hides the password entry block and shows the password recovery block.
 */
declare function showRecoveryBlock(): void;
/**
 * Hides the password recovery block and shows the password entry block.
 */
declare function onCancelRecoveryClick(): void;
/**
 * Configures the login page for normal login.
 * @param {import('../../src/users').UserViewModel[]} userList List of users
 */
declare function configureNormalLogin(userList: import("../../src/users").UserViewModel[]): void;
/**
 * Configures the login page for discreet login.
 */
declare function configureDiscreetLogin(): void;
/**
 * CRSF token for requests.
 */
declare let csrfToken: string;
declare let discreetLogin: boolean;
//# sourceMappingURL=login.d.ts.map