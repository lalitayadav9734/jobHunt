export const checkRole = (roleRequired: string) => {
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("role");
    if (role !== roleRequired) {
      window.location.href = "/login"; // redirect if role not allowed
    }
  }
};
