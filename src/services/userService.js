class UserService {
  constructor(userManager) {
    this.manager = userManager;
  }

  getUserById = async (id) => {
    try {
      return await this.manager.getUserById(id);
    } catch (err) {
      throw Error(err.message);
    }
  };

  getUserByEmail = async (email) => {
    try {
      return await this.manager.getUserByEmail(email);
    } catch (err) {
      throw Error(err.message);
    }
  };

  setPremiumUser = async (userId) => {
    try {
      if (userId === ":uId") {
        throw new Error("invalid parameters");
      }
      const user = await this.getUserById(userId);
      let premium = user.premium;
      await this.manager.setPremiumUser(userId, !premium);
    } catch (err) {
      throw Error(err.message);
    }
  };
}

module.exports = { UserService };
