const verifyUserRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const rolesArray = [...allowedRoles];
    // check if user is logged in
    if (!req?.user.role) {
      res.status(401);
      throw new Error("Unauthorized Access");
    }
    console.log(req.user.role);
    //  check if logged in user has access to view this route
    const result = req.user.role
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) {
      throw new Error("Access denied!!!");
    }
    next();
  };
};

module.exports = {
  verifyUserRoles,
};
