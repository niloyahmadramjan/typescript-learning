/**
 * Enums in TypeScript
 *
 * Enum is used to define a set of named constant values.
 *
 * Why use:
 * - Improve code readability
 * - Avoid hardcoded values
 * - Group related constants
 *
 * Types:
 * - Numeric Enum
 * - String Enum
 *
 * Example:
 * enum Role {
 *   Admin,
 *   User,
 * }
 *
 * enum Status {
 *   Success = "SUCCESS",
 *   Failed = "FAILED",
 * }
 *
 * Note:
 * - Numeric enums auto increment (0, 1, 2...)
 * - String enums must be assigned values
 *
 * Rule:
 * Use enums when you have fixed constant values.
 */

// type UserRoles = "Admin" | "Editor" | "viewer";

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true
    } else return false
};


console.log(canEdit(UserRoles.Admin)) // node --experimental-transform-types enum.ts