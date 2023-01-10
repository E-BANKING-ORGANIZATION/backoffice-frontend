export const hasRole = (role: string, authorities: string[]) => {
  return role && authorities && authorities.includes(role);
};

export const hasNoteRole = (role: string, authorities: string[]) => {
  return !hasRole(role, authorities);
};

export const hasAnyRole = (roles: string[], authorities: string[]) => {
  return roles && roles.some((role) => hasRole(role, authorities));
};
