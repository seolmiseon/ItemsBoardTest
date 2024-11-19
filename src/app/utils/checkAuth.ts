export const checkAuthorization = (userId: string, currentUserId: string) =>
    userId === currentUserId;
