// as const assertion

// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }

const UserRoles = {
    Admin  : "Admin",
    Editor : "Editor",
    Viewer : "Viewer"
} as const; // it will be readonly

/**
 * {
 *  readonly Admin: "Admin",
 *  readonly Editor : "Editor",
 *  readonly Viewer : "Viewer"
 * }
 * 1 typeof perator
 * 2 keyof operator
 * 
 * const user = {
 *  id : 200,
 * name: "Ramjan"
 * }
 *  typeof user;
 * 
 * type user {
 *  id: number,
 *  name: string
 * }
 * 
 * typeof UserRoles 
 * {
 *  Admin: "Admin",
 *  Editor: "Editor",
 *  Viewer: "Viewer"
 * }
 * 
 * keyof typeof UserRoles
 *  'Admin' | 'Editor' | 'viewer'
 * 
*/

// UserRoles.Admin = "test" // can't rewrite

const canEdit = (role: keyof typeof UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true
    } else return false
};










console.log(canEdit(UserRoles.Admin)) // node --experimental-transform-types enum.ts